// src/theme/Root.js

import React, { useLayoutEffect, useEffect } from 'react';
import { useLocation } from '@docusaurus/router';
import { getStepByDocId } from '@site/src/utils/codelabMapping';

function Root({ children }) {
  const location = useLocation();

  // The inline script now handles most URL transformations via pushState interception
  // This is just a fallback for edge cases

  // Fallback: Handle URL transformation on location change (runs synchronously)
  useLayoutEffect(() => {
    const currentPath = window.location.pathname;
    const currentSearch = window.location.search;
    const currentHash = window.location.hash;

    const codelabMatch = currentPath.match(/^\/blockly\/codelabs\/([^/]+)\/([^/]+)\/?$/);
    
    if (codelabMatch) {
      const [, category, stepId] = codelabMatch;
      
      // Skip if already transformed
      if (currentPath.includes('/index.html') && currentSearch.includes('index=')) {
        return;
      }

      const docId = `codelabs/${category}/${stepId}`;
      const stepInfo = getStepByDocId(docId);
      
      if (stepInfo) {
        const newPath = `/${stepInfo.basePath}/index.html`;
        const queryParam = 'index=..%2F..index';
        const hash = `#${stepInfo.step.hash}`;
        const newUrl = `${newPath}?${queryParam}${hash}`;

        const currentUrl = currentPath + currentSearch + currentHash;
        if (currentUrl !== newUrl) {
          window.history.replaceState(null, '', newUrl);
        }
      }
    }
  }, [location.pathname, location.search, location.hash]);

  return <>{children}</>;
}

export default Root;