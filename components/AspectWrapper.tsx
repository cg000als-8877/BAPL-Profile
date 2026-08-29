"use client";

import React from "react";

interface AspectWrapperProps {
  children: React.ReactNode;
  className?: string;
}

export const AspectWrapper: React.FC<AspectWrapperProps> = ({
  children,
  className = "",
}) => {
  return (
    <div className={`slide-content-wrapper rounded-none md:rounded-2xl border-0 md:border md:border-slate-800/80 shadow-2xl ${className}`}>
      {children}
    </div>
  );
};
