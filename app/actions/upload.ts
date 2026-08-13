"use server";

import { createHash } from "crypto";

import { getSessionUser } from "../lib/auth";

export interface UploadSignature {
  cloudName: string;
  apiKey: string;
  timestamp: string;
  signature: string;
  folder: string;
}

export async function getUploadSignature(): Promise<
  UploadSignature | { error: string }
> {
  const user = await getSessionUser();
  if (!user) return { error: "Not authorized." };

  const cloudName = process.env.CLOUDINARY_CLOUD_NAME;
  const apiKey = process.env.CLOUDINARY_API_KEY;
  const apiSecret = process.env.CLOUDINARY_API_SECRET;

  if (!cloudName || !apiKey || !apiSecret) {
    return { error: "Cloudinary is not configured." };
  }

  const timestamp = String(Math.round(Date.now() / 1000));
  const folder = "company-portfolio";
  const toSign = `folder=${folder}&timestamp=${timestamp}${apiSecret}`;
  const signature = createHash("sha1").update(toSign).digest("hex");

  return { cloudName, apiKey, timestamp, signature, folder };
}
