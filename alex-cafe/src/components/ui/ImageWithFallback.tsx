'use client';

import { useState } from 'react';

interface ImageWithFallbackProps {
  src: string;
  alt: string;
  className?: string;
  fallbackGradient?: string;
  fill?: boolean;
  sizes?: string;
  priority?: boolean;
}

export default function ImageWithFallback({
  src,
  alt,
  className = '',
  fallbackGradient = 'linear-gradient(135deg, #3C2A1A 0%, #5A4232 100%)',
  fill = false,
  priority = false,
}: ImageWithFallbackProps) {
  const [imgSrc, setImgSrc] = useState(src);
  const [hasError, setHasError] = useState(false);

  if (hasError || !imgSrc) {
    return (
      <div
        className={`${fill ? 'absolute inset-0' : ''} ${className}`}
        style={{ background: fallbackGradient }}
        role="img"
        aria-label={alt}
      >
        <div className="absolute inset-0 flex items-center justify-center text-white/20 text-4xl">
          ☕
        </div>
      </div>
    );
  }

  return (
    <img
      src={imgSrc}
      alt={alt}
      className={className}
      loading={priority ? 'eager' : 'lazy'}
      onError={() => setHasError(true)}
    />
  );
}
