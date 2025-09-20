import React from "react";

interface BlobProps {
  src: string;
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  width?: string;
  height?: string;
  rotation?: number; // degrees
  scale?: number;
  style?: React.CSSProperties;
}

export default function Blob({
  src,
  top,
  left,
  right,
  bottom,
  width = "200px",
  height = "200px",
  rotation = 0,
  scale = 1,
  style = {},
}: BlobProps) {
  return (
    <img
      src={src}
      aria-hidden="true"
      className="blob"
      style={{
        top,
        left,
        right,
        bottom,
        width,
        height,
        transform: `rotate(${rotation}deg) scale(${scale})`,
        pointerEvents: "none",
        zIndex: 0,
        ...style,
      }}
    />
  );
}