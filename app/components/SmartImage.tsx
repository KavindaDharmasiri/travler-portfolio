"use client";

import { useState } from "react";
import Image from "next/image";
import type { ImageProps } from "next/image";

interface SmartImageProps extends ImageProps {
  wrapperClassName?: string;
  imageClassName?: string;
  skeletonClassName?: string;
}

export default function SmartImage({
  wrapperClassName = "",
  imageClassName = "",
  skeletonClassName = "",
  onLoad,
  onError,
  ...props
}: SmartImageProps) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={`relative overflow-hidden ${wrapperClassName}`}>
      <div
        className={`skeleton absolute inset-0 transition-opacity duration-500 ${
          loaded ? "opacity-0" : "opacity-100"
        } ${skeletonClassName}`}
        aria-hidden="true"
      />
      <Image
        {...props}
        className={`${imageClassName} ${props.fill ? "h-full w-full" : ""}`}
        onLoad={(e) => {
          setLoaded(true);
          onLoad?.(e);
        }}
        onError={(e) => {
          setLoaded(true);
          onError?.(e);
        }}
      />
    </div>
  );
}
