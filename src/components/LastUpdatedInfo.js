import React from 'react';
import { useDoc } from '@docusaurus/plugin-content-docs/client';

function normalizeTimestamp(ts) {
  if (!ts && ts !== 0) return null;
  const n = Number(ts);
  if (Number.isNaN(n)) return null;
  return n > 1e12 ? n : n * 1000;
}

export default function LastUpdatedInfo() {
  const { metadata } = useDoc();
  const ts = metadata?.lastUpdatedAt;
  const normalized = normalizeTimestamp(ts);
  if (!normalized) return null;

  const date = new Date(normalized);
  const formatted = `Updated ${date.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  })}`;

  return (
    <div className='Last_Updated_Date'>
      {formatted}
    </div>
  );
}
