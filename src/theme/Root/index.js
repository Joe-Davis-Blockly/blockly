/**
 * Root theme component - wraps the entire app
 * Handles client-side tracking for Algolia search queries
 */

import React, { useEffect } from 'react';
import { trackSiteSearch } from '../../utils/tracking';

export default function Root({ children }) {
  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    // Ensure dataLayer exists
    if (!window.dataLayer) {
      window.dataLayer = [];
    }

    // Diagnostic: Check if GTM script is in the page
    const checkGTMLoading = () => {
      const gtmScript = document.querySelector('script[src*="googletagmanager.com"]');
      const gtmNoscript = document.querySelector('noscript iframe[src*="googletagmanager.com"]');
      
      console.log('🔍 GTM Diagnostic:');
      console.log('  - GTM script tag found:', !!gtmScript);
      console.log('  - GTM noscript found:', !!gtmNoscript);
      console.log('  - window.google_tag_manager:', !!window.google_tag_manager);
      console.log('  - window.dataLayer exists:', !!window.dataLayer);
      
      if (gtmScript) {
        console.log('  - GTM script src:', gtmScript.src);
      } else {
        console.warn('  ⚠️ GTM script not found in page - plugin may not be loading');
      }
    };

    // Check after a short delay to allow scripts to load
    setTimeout(checkGTMLoading, 2000);

    let lastTrackedQuery = '';
    let searchTimeout = null;

    // Method 1: Listen for Algolia DocSearch custom events
    const handleDocSearchQuery = (event) => {
      if (event.detail && event.detail.query) {
        const query = event.detail.query.trim();
        if (query && query !== lastTrackedQuery && query.length > 0) {
          trackSiteSearch(query);
          lastTrackedQuery = query;
        }
      }
    };

    document.addEventListener('docsearch:query', handleDocSearchQuery);

    // Method 2: Monitor the search input field when the modal is open
    const setupInputTracking = (searchInput) => {
      if (searchInput.hasAttribute('data-tracking-setup')) {
        return;
      }

      searchInput.setAttribute('data-tracking-setup', 'true');

      // Track on input with debouncing
      const handleInput = (e) => {
        const query = e.target.value.trim();

        if (searchTimeout) {
          clearTimeout(searchTimeout);
        }

        // Only track if query is meaningful (at least 2 characters)
        if (query.length >= 2 && query !== lastTrackedQuery) {
          searchTimeout = setTimeout(() => {
            trackSiteSearch(query);
            lastTrackedQuery = query;
          }, 800);
        }
      };

      // Track when user presses Enter (immediate tracking)
      const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
          const query = e.target.value.trim();
          if (query && query !== lastTrackedQuery && query.length > 0) {
            if (searchTimeout) {
              clearTimeout(searchTimeout);
            }
            trackSiteSearch(query);
            lastTrackedQuery = query;
          }
        }
      };

      searchInput.addEventListener('input', handleInput);
      searchInput.addEventListener('keydown', handleKeyDown);
    };

    // Use MutationObserver to detect when search modal opens
    const observer = new MutationObserver(() => {
      const searchInput = document.querySelector('.DocSearch-Input');
      if (searchInput) {
        setupInputTracking(searchInput);
      }
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true
    });

    // Also check immediately in case modal is already open
    const initialSearchInput = document.querySelector('.DocSearch-Input');
    if (initialSearchInput) {
      setupInputTracking(initialSearchInput);
    }

    // Method 3: Listen for clicks on search results (fallback)
    const handleResultClick = (e) => {
      const hitElement = e.target.closest('.DocSearch-Hit');
      if (hitElement) {
        const searchInput = document.querySelector('.DocSearch-Input');
        if (searchInput && searchInput.value) {
          const query = searchInput.value.trim();
          if (query && query !== lastTrackedQuery && query.length > 0) {
            trackSiteSearch(query);
            lastTrackedQuery = query;
          }
        }
      }
    };

    document.addEventListener('click', handleResultClick);

    // Cleanup
    return () => {
      document.removeEventListener('docsearch:query', handleDocSearchQuery);
      document.removeEventListener('click', handleResultClick);
      observer.disconnect();
      if (searchTimeout) {
        clearTimeout(searchTimeout);
      }
    };
  }, []);

  return <>{children}</>;
}

