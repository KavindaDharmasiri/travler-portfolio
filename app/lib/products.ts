export interface Product {
  slug: string;
  name: string;
  category: "E-Commerce" | "Enterprise" | "Fintech" | "Government";
  tech: string[];
  blurb: string;
  problem: string;
  features: string[];
  image: string;
  imageAlt: string;
  featured?: boolean;
}

export const products: Product[] = [
  {
    slug: "suite369",
    name: "Suite369",
    category: "Enterprise",
    tech: ["Spring Boot", "React", "PostgreSQL"],
    blurb:
      "Comprehensive enterprise resource planning module specializing in cross-departmental data synchronization and automated reporting.",
    problem:
      "Enterprises needed a single module to synchronize data across departments and automate reporting.",
    features: ["Cross-departmental sync", "Automated reporting", "Modular ERP", "Role-based access"],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDVgnntgpBcch2MXzfXXDLqTwr_RQ34FaGAIzFhNWK4bzOTd5tD1yL06OpR69sZWIsm81yTJbvOLDy84IR6nzSwm6XXeEspua9JEHaDTEhuiYVRFD7LFNSlkxn4qoLLmUxjxd-uEYroU9KCpufbezfbcncDF4G83FZG0BKAQ8JwwaegUA8PPKMq5rK7Vi9wHWsQciyC9Bc-JxRsMXk0OIpa7e59VSlqIYY3d4dKUE3gz9Kp4I2wUt3Q",
    imageAlt:
      "A highly detailed, technical wireframe or architectural diagram of an enterprise software dashboard, rendered in a crisp light mode palette of white, light gray, and primary teal.",
    featured: true,
  },
  {
    slug: "stockmate",
    name: "StockMate",
    category: "Fintech",
    tech: ["Node.js", "Redis", "WebSockets"],
    blurb:
      "High-frequency algorithmic trading interface with real-time latency monitoring and portfolio risk assessment protocols.",
    problem:
      "Traders needed real-time monitoring of latency and portfolio risk without performance overhead.",
    features: ["High-frequency interface", "Real-time latency monitoring", "Risk assessment", "Live WebSocket feeds"],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCHslkkWzDmzSTv4akDiNEAiE5KkMZ1l7aaEnQpjfMjn7rqhA2S7vm5Yvv621zwhXplAZ-eplMzCR5KWSW6u043f2nOGtzG4CdML5DWzvdMqk5OmbwzsPCtWrkjnb3OqVHdcqpxKboJ_H-8NmMyjgkFrHF_vrVI0LLwD5e78-KFJDywHBqn_M1sB_JutQa4FggG0uO3G6VIoikhOrLaFF1S79b8dP9R4YwhiekMMPHpYGoW4k5I-cGK",
    imageAlt:
      "A minimalist data visualization graphic showing a financial ledger or stock chart with thin teal lines against a stark white background.",
    featured: true,
  },
  {
    slug: "fraud-management-system",
    name: "Fraud Management System",
    category: "Fintech",
    tech: ["Python", "TensorFlow", "AWS"],
    blurb:
      "Machine learning pipeline dedicated to anomaly detection in high-volume transaction environments.",
    problem:
      "High-volume transaction platforms needed automated anomaly detection beyond static rules.",
    features: ["ML anomaly detection", "High-volume throughput", "Alert workflows", "AWS cloud deployment"],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDaw9bI845ZfVRc2WMW5N_qIsZYwO3Ki-0OA7kSXkdcvpSJgLT7CeSzqMbGoIlt9ObaxVPzb8jeAIYatDMcUS1nz82sQQJc63j9s1DJQIJFLnJ9gcySuiyTZMuvImhYtUOnP02Jch2Ufe5tIP__KpaHodj9t5jEkYzB47_Gvpaya3ph3nzBoxqEDhha1qSU2-mVCViiJHvLiJtgQCka1ZabxTr_hezREPWKtcyiQ54ZctmqX7b16SlX",
    imageAlt:
      "Abstract representation of network security nodes and encrypted data streams in a monochrome light-mode schematic style.",
    featured: true,
  },
  {
    slug: "doxmate-workflow",
    name: "Doxmate Workflow",
    category: "Enterprise",
    tech: ["C# .NET", "Angular", "SQL Server"],
    blurb:
      "Automated document routing and approval engine designed for rigid compliance environments.",
    problem:
      "Compliance-heavy operations needed automated document routing and auditable approval flows.",
    features: ["Automated routing", "Approval engine", "Compliance audit trail", "Angular frontend"],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB2L5p_qs7CV6OqQ3PKSsfJIzzvfGZ2eXuRdm1MchZ_q9wcfAg8ivBFZ39nl5T5viub-TmTBvx7UnefiaBxcl5uJJ1qHQTVI6IyaQZFOQdYRP1SYL7XAOYb1fpceYqXD1OOC0fznDWg1_o5brL9V7v77invBUdQWDof6Xv2NWv6EdR9LySyuGVC0hb1oR4MtDnXHn_-X7HGjiy_kk9gkZrf2USELRCVfJBSVxeYIMKdGiEDNw-OQagJ",
    imageAlt:
      "A clean, isometric vector illustration of document workflow automation with boxes and arrows connected on a rigid grid.",
  },
  {
    slug: "govpay-gateway",
    name: "GovPay Gateway",
    category: "Government",
    tech: ["Java", "Vue.js", "Oracle"],
    blurb:
      "Secure, PCI-compliant payment portal engineered for municipal and state-level transactional integrity.",
    problem:
      "Municipal bodies needed a PCI-compliant payment portal with state-level transactional integrity.",
    features: ["PCI compliance", "Municipal payments", "Transaction integrity", "Oracle data layer"],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA86B4ctDZhdOxeQtDiOvt0vmp4k6DN71YOs6eSijh4WUWONT6KRToCnZ3PX67czBDvEYF83IkA5Rtjjk8AodeyC_J-kl_baXmYSn5GsJ-9U99zcKufHuxVN--6TAiUQfqJuwYDuSNpGmetopZbyC8Mb0VrvuAqbMMGyH58YExVR_e_6Tpib71bA5PnapNnHwqWuYyRKJR601Rxg-eGqdA48lSu1kOKJdPEqTVjv9r5Tb4F69zcdQJK",
    imageAlt:
      "A schematic layout of a payment gateway architecture with geometric shapes and hairline strokes in slate, white, and teal.",
  },
  {
    slug: "cloudledger-core",
    name: "CloudLedger Core",
    category: "Enterprise",
    tech: ["Go", "Docker", "Kubernetes"],
    blurb:
      "Distributed ledger technology implementation for immutable supply chain tracking and verification.",
    problem:
      "Supply chains needed immutable tracking and verification of goods across distributed partners.",
    features: ["Immutable ledger", "Supply chain tracking", "Verification workflow", "Kubernetes orchestration"],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC0bCda6ztjXqAaAT5Y0jKKYAtzZwVi4T8x3lXSDRUqG_EPOy48icTMYLwBmvuiBHRhpi2SUvpMmJ7IsU1XDnUApL4zzyPmif7e1E_1hIdY2PYq0KKyt3XTnJVm6pjXpPGjP_DYc4LmCDS0rRsyHscT_2o1eVxCi1pCQLHS1btsp-8IWtXQZkRc_R5s0rt_R32sMOS0_rYaw-luioxmQhlIAoK-5ooBkI7QyhN_6i6gqwPKHyY46Ql1",
    imageAlt:
      "Abstract representation of decentralized cloud storage blocks arranged on an isometric grid in a crisp, technical style.",
  },
  {
    slug: "omnicart-api",
    name: "OmniCart API",
    category: "E-Commerce",
    tech: ["GraphQL", "Next.js", "Prisma"],
    blurb:
      "Headless commerce engine providing high-throughput inventory and cart state management via GraphQL.",
    problem:
      "Retail platforms needed a headless commerce engine for high-throughput inventory and cart management.",
    features: ["GraphQL API", "Cart state management", "High throughput", "Headless commerce"],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDdd3hPXANteZ41xsV9564oZkdqd0nDT5c7LRrh39aWkGuyZ5Dsgb_D9KgmYmrUEXtHIZ-ke0c4RTnQd_bIesz3i5AhNK68xSya4jMbTLgOptEiv2bgZNVGoD25cYpA44dy1B52B3Y3x63aBaSfDcBXzXK-nqMjGa4CeS6ygiVkBHGfg9yP-2Txrco2pvO27JM2k_Vy2LoK_ONcnoIAAV6Ox7LDmugAfD9GGna2wGHirDixfANUJ6nu",
    imageAlt:
      "Technical line drawing of a REST API payload structure with JSON hierarchy visualized as a structural map.",
  },
  {
    slug: "secureidentity-auth",
    name: "SecureIdentity Auth",
    category: "Government",
    tech: ["Rust", "WebAuthn", "MongoDB"],
    blurb:
      "Zero-trust authentication matrix utilizing multi-factor biometric fallback protocols for state employees.",
    problem:
      "State agencies needed zero-trust authentication with multi-factor and biometric fallback for employees.",
    features: ["Zero-trust auth", "Biometric fallback", "WebAuthn support", "Rust core"],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBrGRLy84kE7q8SB60fBFaKkH4Fcioyrydi-xIVHjt3ZaaDTsbFHO8YmuX7N8sXLljrPJAKrN-5aPIMwbznwQntzJ5xcXre2YC01e3u-6r9f7D9wQ2DI-5EinOJtB7gj9XLTy_hegxDCKITbkSnDfiXN7E05RoMwxM0LJv8Z6Wt7LVV1bWY917gRB_gJJDdHVEAJ5uGTKd0s7lFSOjn9Xp03m7fQ-SOAFD75QTjj-V7a7_ZbxXVw9-A",
    imageAlt:
      "A graphic resembling a biometric scanning terminal in a blueprint style with a teal fingerprint motif.",
  },
  {
    slug: "logistics-node-alpha",
    name: "Logistics Node Alpha",
    category: "Enterprise",
    tech: ["TypeScript", "Mapbox GL", "Elasticsearch"],
    blurb:
      "Real-time geospatial tracking and fleet routing optimization dashboard for global shipping operations.",
    problem:
      "Global shipping operations needed real-time geospatial tracking and optimized fleet routing.",
    features: ["Geospatial tracking", "Fleet routing optimization", "Real-time dashboard", "Elasticsearch search"],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDFuvi3DEGo_RU23UzksYrI0jF_uLpBDgNB_fycds3dVmMQwHvcLrl-5pzaUhhIOHXDVTeCMqm1_AzZjQNQGbmOx8SFtgepdBcv0nIEyEygsTm4ya9H1iAB3_3SUZGIQtUb9rnzs--NW0ZUEJ9NthaKuBRnleuF4eAbb9KZFU5Wh3pVM4THNP-BGvO2xnWNLHrFxp6Dx7kdrtfhcefytgPfyFfUBpEWa9T68-uL8UMuSV9kdisbKQLx",
    imageAlt:
      "A topographical map style diagram representing logistical nodes across a geographic plane with teal coordinates.",
  },
];

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export const categories = [
  "All Systems",
  "E-Commerce",
  "Enterprise",
  "Fintech",
  "Government",
];
