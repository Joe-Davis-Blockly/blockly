import React from 'react';

/**
 * Image component for use in MDX docs
 * Wraps HTML img tag with additional styling and responsiveness
 * 
 * @param {string} src - Image source path
 * @param {string} alt - Alt text for accessibility
 * @param {number|string} width - Optional width (in pixels)
 * @param {number|string} height - Optional height (in pixels)
 * @param {string} className - Optional CSS class for custom styling
 * @param {object} style - Optional inline styles
 */
export default function Image({ src, alt, width, height, className, style = {}, ...props }) {
  const imgStyle = {
    maxWidth: '100%',
    height: 'auto',
    ...style,
  };

  if (width) {
    imgStyle.width = typeof width === 'number' ? `${width}px` : width;
  }
  if (height) {
    imgStyle.height = typeof height === 'number' ? `${height}px` : height;
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      style={{ ...imgStyle }}
      {...props}
    />
  );
}
