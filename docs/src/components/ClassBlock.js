import React from 'react';

/**
 * ClassBlock Component
 * Renders a block of content with a CSS class applied
 * Used for styling specific content blocks (e.g., compare-worse, compare-better)
 * 
 * @param {string} className - The CSS class name to apply
 * @param {React.ReactNode} children - The content to render
 * @returns {JSX.Element}
 */
export default function ClassBlock({ className, children }) {
  return <p className={className}>{children}</p>;
}
