"use client";

import Link from "next/link";
import { useActionState, useRef, useState } from "react";
import { saveProjectAction } from "../../actions/projects";
import { getUploadSignature } from "../../actions/upload";

interface ProjectFormInitial {
  slug: string;
  name: string;
  category: string;
  status: string;
  tech: string[];
  blurb: string;
  problem: string;
  features: string[];
  image: string;
  imageAlt: string;
  featured: boolean;
}

interface ProjectFormProps {
  mode: "add" | "edit";
  initial?: ProjectFormInitial | null;
}

const categories = ["E-Commerce", "Enterprise", "Fintech", "Government"];
const statuses = ["LIVE", "DEV", "ARCHIVED"];

const fieldClass =
  "w-full bg-white border border-outline-variant focus:border-primary-container focus:ring-1 focus:ring-primary-container rounded-DEFAULT py-stack-sm px-stack-md font-code-label-lg text-code-label-lg placeholder-slate-data text-on-surface transition-all";

const labelClass =
  "font-code-label-sm text-code-label-sm uppercase tracking-wider text-on-surface-variant mb-stack-xs block";

const initial = { error: "" };

export default function ProjectForm({ mode, initial: project }: ProjectFormProps) {
  const isEdit = mode === "edit";
  const [state, formAction, pending] = useActionState(saveProjectAction, initial);
  const [imageUrl, setImageUrl] = useState(project?.image ?? "");
  const [uploading, setUploading] = useState(false);
  const [uploadError, setUploadError] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  async function handleFile(file: File | null) {
    if (!file) return;
    setUploading(true);
    setUploadError("");
    try {
      const sig = await getUploadSignature();
      if ("error" in sig) {
        setUploadError(sig.error);
        return;
      }
      const form = new FormData();
      form.append("file", file);
      form.append("api_key", sig.apiKey);
      form.append("timestamp", sig.timestamp);
      form.append("signature", sig.signature);
      form.append("folder", sig.folder);

      const res = await fetch(
        `https://api.cloudinary.com/v1_1/${sig.cloudName}/image/upload`,
        { method: "POST", body: form }
      );
      const data = await res.json();
      if (data.error) {
        setUploadError(data.error.message ?? "Upload failed.");
      } else if (data.secure_url) {
        setImageUrl(data.secure_url);
        if (fileInputRef.current) fileInputRef.current.value = "";
      } else {
        setUploadError("Upload failed. Please try again.");
      }
    } catch {
      setUploadError("Upload failed. Please try again.");
    } finally {
      setUploading(false);
    }
  }

  return (
    <>
      {/* Header */}
      <header className="mb-stack-lg flex justify-between items-end border-b border-grid-line pb-stack-sm">
        <div>
          <div className="font-code-label-sm text-code-label-sm text-slate-data mb-stack-xs">
            [FORM_PROJECT]
          </div>
          <h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight font-bold">
            {isEdit ? "Edit Project" : "Add New Project"}
          </h2>
          <p className="font-code-label-sm text-code-label-sm text-on-surface-variant mt-1 uppercase tracking-wider">
            {isEdit ? `MODIFYING // ${project?.slug}` : "REGISTER NEW SYSTEM IN REGISTRY"}
          </p>
        </div>
        <Link
          href="/admin/products"
          className="font-code-label-sm text-code-label-sm text-primary-container uppercase hover:underline flex items-center gap-1"
        >
          <span className="material-symbols-outlined text-[14px]">arrow_back</span>
          Back to Registry
        </Link>
      </header>

      <form
        action={formAction}
        className="border border-outline-variant bg-white rounded-lg relative overflow-hidden"
      >
        {/* Crosshairs for schematic aesthetic */}
        <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-primary-container"></div>
        <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-primary-container"></div>
        <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-primary-container"></div>
        <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-primary-container"></div>

        <div className="p-margin-mobile md:p-gutter flex flex-col gap-stack-lg">
          {isEdit && (
            <input type="hidden" name="original_slug" value={project?.slug ?? ""} />
          )}
          {state.error && (
            <div className="flex items-start gap-2 border border-error bg-error/5 px-3 py-2 font-code-label-sm text-code-label-sm text-error">
              <span className="material-symbols-outlined text-[16px]">
                error_outline
              </span>
              <span>{state.error}</span>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
            <div className="flex flex-col">
              <label className={labelClass} htmlFor="name">
                System_Title [Name]
              </label>
              <input
                className={fieldClass}
                id="name"
                name="name"
                type="text"
                placeholder="Enter system name"
                defaultValue={project?.name}
                required
              />
            </div>
            <div className="flex flex-col">
              <label className={labelClass} htmlFor="slug">
                Slug [URL]
              </label>
              <input
                className={fieldClass}
                id="slug"
                name="slug"
                type="text"
                placeholder="system-slug"
                defaultValue={project?.slug}
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
            <div className="flex flex-col">
              <label className={labelClass} htmlFor="category">
                Category
              </label>
              <select
                className={`${fieldClass} appearance-none`}
                id="category"
                name="category"
                defaultValue={project?.category ?? "Enterprise"}
              >
                {categories.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex flex-col">
              <label className={labelClass} htmlFor="status">
                Status
              </label>
              <select
                className={`${fieldClass} appearance-none`}
                id="status"
                name="status"
                defaultValue={project?.status ?? "LIVE"}
              >
                {statuses.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="flex flex-col">
            <label className={labelClass} htmlFor="tech">
              Tech_Stack [comma separated]
            </label>
            <input
              className={fieldClass}
              id="tech"
              name="tech"
              type="text"
              placeholder="Spring Boot, React, PostgreSQL"
              defaultValue={project?.tech.join(", ")}
            />
          </div>

          <div className="flex flex-col">
            <label className={labelClass} htmlFor="blurb">
              Blurb [Short Description]
            </label>
            <textarea
              className={`${fieldClass} resize-none`}
              id="blurb"
              name="blurb"
              rows={2}
              placeholder="One-line summary of the system..."
              defaultValue={project?.blurb}
            />
          </div>

          <div className="flex flex-col">
            <label className={labelClass} htmlFor="problem">
              Problem [Brief]
            </label>
            <textarea
              className={`${fieldClass} resize-none`}
              id="problem"
              name="problem"
              rows={3}
              placeholder="What business problem does this solve?"
              defaultValue={project?.problem}
            />
          </div>

          <div className="flex flex-col">
            <label className={labelClass} htmlFor="features">
              Key_Features [one per line]
            </label>
            <textarea
              className={`${fieldClass} resize-none`}
              id="features"
              name="features"
              rows={4}
              placeholder={"Cross-departmental sync\nAutomated reporting"}
              defaultValue={project?.features.join("\n")}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
            <div className="flex flex-col">
              <label className={labelClass} htmlFor="image">
                Image_URL
              </label>
              <input
                className={fieldClass}
                id="image"
                name="image"
                type="text"
                placeholder="https://..."
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
              />
              <div className="mt-stack-sm flex items-center gap-stack-sm">
                <input
                  ref={fileInputRef}
                  id="image_upload"
                  name="image_upload"
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={(e) => handleFile(e.target.files?.[0] ?? null)}
                />
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  disabled={uploading}
                  className="flex items-center gap-2 border border-outline-variant bg-white px-stack-md py-stack-xs rounded-DEFAULT font-code-label-sm text-code-label-sm hover:border-primary-container hover:text-primary-container transition-colors disabled:opacity-60"
                >
                  <span className="material-symbols-outlined text-[16px]">
                    {uploading ? "hourglass_top" : "cloud_upload"}
                  </span>
                  {uploading ? "UPLOADING..." : "UPLOAD_IMAGE"}
                </button>
                <span className="font-code-label-sm text-code-label-sm text-slate-data">
                  Uploads go to Cloudinary
                </span>
              </div>
              {uploadError && (
                <span className="mt-stack-xs font-code-label-sm text-code-label-sm text-error">
                  {uploadError}
                </span>
              )}
            </div>
            <div className="flex flex-col">
              <label className={labelClass} htmlFor="image_alt">
                Image_Alt [Description]
              </label>
              <input
                className={fieldClass}
                id="image_alt"
                name="image_alt"
                type="text"
                placeholder="Describe the image for accessibility"
                defaultValue={project?.imageAlt}
              />
            </div>
          </div>

          {/* Image Preview */}
          {imageUrl && (
            <div className="flex flex-col">
              <span className={`${labelClass} mb-stack-xs`}>Preview</span>
              <div className="relative w-full h-48 overflow-hidden border border-grid-line bg-surface-container-high">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={imageUrl}
                  alt="Project image preview"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          )}

          <div className="flex flex-col">
            <label className={labelClass}>Visibility</label>
            <div className="flex items-center gap-2">
              <input
                id="featured"
                name="featured"
                type="checkbox"
                className="w-4 h-4 border border-outline-variant bg-white text-primary-container focus:ring-primary-container rounded-none"
                defaultChecked={project?.featured ?? false}
              />
              <label
                htmlFor="featured"
                className="font-code-label-sm text-code-label-sm text-on-surface-variant uppercase"
              >
                Feature on Portfolio
              </label>
            </div>
          </div>

          <div className="flex justify-end gap-stack-sm border-t border-grid-line pt-stack-md">
            <Link
              href="/admin/products"
              className="border border-outline-variant bg-white px-stack-lg py-stack-sm rounded-DEFAULT font-code-label-sm text-code-label-sm hover:border-primary-container hover:text-primary-container transition-colors uppercase"
            >
              Cancel
            </Link>
            <button
              type="submit"
              disabled={pending}
              className="bg-primary-container text-white font-code-label-sm text-code-label-sm uppercase px-stack-lg py-stack-sm rounded-DEFAULT hover:bg-primary-container/90 transition-colors flex items-center gap-2 border border-primary-container disabled:opacity-60"
            >
              <span className="material-symbols-outlined text-[16px]">
                {isEdit ? "save" : "add"}
              </span>
              {pending ? "Saving..." : isEdit ? "Save Changes" : "Register System"}
            </button>
          </div>
        </div>
      </form>
    </>
  );
}
