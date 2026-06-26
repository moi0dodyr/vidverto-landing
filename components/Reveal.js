"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Fades + lifts its children into view once they enter the viewport.
 * `delay` (ms) staggers siblings; `as` swaps the wrapper element.
 */
export default function Reveal({
  children,
  className = "",
  delay = 0,
  as: Tag = "div",
  style,
}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" }
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={`reveal ${visible ? "is-visible" : ""} ${className}`}
      style={delay ? { ...style, transitionDelay: `${delay}ms` } : style}
    >
      {children}
    </Tag>
  );
}
