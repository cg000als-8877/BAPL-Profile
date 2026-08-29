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
    <div className={`slide-content-wrapper ${className}`}>
      {children}
    </div>
  );
};
