import mysql from "mysql2/promise";

const DB_NAME = process.env.DB_NAME || "c-portfolio";

const serverConfig = {
  host: process.env.DB_HOST || "mysql-1c6c42ff-kavindadarmasiri15-197a.g.aivencloud.com",
  port: Number(process.env.DB_PORT || 25939),
  user: process.env.DB_USER || "avnadmin",
  password: process.env.DB_PASSWORD || "",
  ssl: process.env.DB_SSL === "true" ? { rejectUnauthorized: false } : undefined,
};

const config = {
  ...serverConfig,
  database: DB_NAME,
  waitForConnections: true,
  connectionLimit: 5,
  namedPlaceholders: true,
};

declare global {
  var __travlerPool: mysql.Pool | undefined;
}

async function ensureDatabase(): Promise<void> {
  const conn = await mysql.createConnection(serverConfig);
  await conn.query(
    `CREATE DATABASE IF NOT EXISTS \`${DB_NAME}\` CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci`
  );
  await conn.end();
}

async function createPool(): Promise<mysql.Pool> {
  if (!global.__travlerPool) {
    await ensureDatabase();
    global.__travlerPool = mysql.createPool(config);
  }
  return global.__travlerPool;
}

export async function query<T extends mysql.RowDataPacket[] | mysql.OkPacket | mysql.ResultSetHeader>(
  sql: string,
  params: unknown[] = []
): Promise<T> {
  const pool = await createPool();
  const [rows] = await pool.query(sql, params);
  return rows as T;
}

const SCHEMA = [
  `CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(512) NOT NULL,
    is_active TINYINT(1) DEFAULT 1,
    user_type VARCHAR(50) DEFAULT 'user',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  )`,
  `CREATE TABLE IF NOT EXISTS sessions (
    token CHAR(64) PRIMARY KEY,
    user_id INT NOT NULL,
    expires_at DATETIME NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
  )`,
  `CREATE TABLE IF NOT EXISTS inquiries (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    type VARCHAR(50) DEFAULT 'contact',
    company VARCHAR(255),
    interest VARCHAR(255),
    message TEXT,
    status VARCHAR(50) DEFAULT 'unread',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  )`,
  `CREATE TABLE IF NOT EXISTS projects (
    id INT AUTO_INCREMENT PRIMARY KEY,
    slug VARCHAR(255) NOT NULL UNIQUE,
    name VARCHAR(255) NOT NULL,
    category VARCHAR(100) NOT NULL,
    tech TEXT NOT NULL,
    blurb TEXT,
    problem TEXT,
    features TEXT,
    image VARCHAR(1024),
    image_alt VARCHAR(1024),
    featured TINYINT(1) DEFAULT 0,
    status VARCHAR(50) DEFAULT 'LIVE',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
  )`,
  `CREATE TABLE IF NOT EXISTS settings (
    \`key\` VARCHAR(255) PRIMARY KEY,
    value TEXT
  )`,
];

export async function initDb() {
  const pool = await createPool();
  for (const ddl of SCHEMA) {
    await pool.query(ddl);
  }
  await migrateInquiries(pool);
}

async function migrateInquiries(pool: mysql.Pool): Promise<void> {
  const [cols] = await pool.query<mysql.RowDataPacket[]>(
    `SELECT COLUMN_NAME AS name
     FROM information_schema.COLUMNS
     WHERE TABLE_SCHEMA = ? AND TABLE_NAME = 'inquiries'`,
    [DB_NAME]
  );
  const names = new Set(cols.map((c) => String(c.name)));
  if (!names.has("type")) {
    await pool.query(
      "ALTER TABLE inquiries ADD COLUMN type VARCHAR(50) DEFAULT 'contact' AFTER email"
    );
  }
  if (!names.has("status")) {
    await pool.query(
      "ALTER TABLE inquiries ADD COLUMN status VARCHAR(50) DEFAULT 'unread'"
    );
  }
  await pool.query(
    "UPDATE inquiries SET status = 'unread' WHERE status NOT IN ('read', 'unread')"
  );
}
