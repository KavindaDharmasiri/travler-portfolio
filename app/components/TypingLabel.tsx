"use client";

import { useEffect, useState } from "react";

export default function TypingLabel({
  text,
  speed = 45,
  startDelay = 400,
  className,
}: {
  text: string;
  speed?: number;
  startDelay?: number;
  className?: string;
}) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const startTimer = setTimeout(() => setStarted(true), startDelay);
    return () => clearTimeout(startTimer);
  }, [startDelay]);

  useEffect(() => {
    if (!started || count >= text.length) return;
    const t = setTimeout(() => setCount((c) => c + 1), speed);
    return () => clearTimeout(t);
  }, [started, count, speed, text.length]);

  return (
    <span className={className}>
      {text.slice(0, count)}
      <span className="typing-cursor" aria-hidden="true" />
    </span>
  );
}
