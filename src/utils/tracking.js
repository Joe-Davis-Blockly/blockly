/**
 * Utility functions for pushing custom events to dataLayer for GA4 tracking via GTM
 */

/**
 * Push custom events to dataLayer for GA4 tracking
 * @param {string} eventName - The name of the event (e.g., 'site_search', 'cta_click')
 * @param {object} eventParams - Additional parameters to send with the event
 */
export function pushToDataLayer(eventName, eventParams = {}) {
  if (typeof window === 'undefined') {
    return;
  }

  // Ensure dataLayer exists
  if (!window.dataLayer) {
    window.dataLayer = [];
  }

  const eventData = {
    event: eventName,
    ...eventParams
  };

  window.dataLayer.push(eventData);
  
  // Log to console for verification
  console.log('📊 DataLayer push:', eventData);
  console.log('📊 Total events in dataLayer:', window.dataLayer.length);
  
  // Verify the event was added
  const lastEvent = window.dataLayer[window.dataLayer.length - 1];
  if (lastEvent.event === eventName) {
    console.log('✅ Event successfully added to dataLayer');
  }
  
  // Check GTM status (informational - events work even if GTM isn't loaded yet)
  if (window.google_tag_manager && window.google_tag_manager['GTM-NSSCB6XT']) {
    console.log('✅ GTM is loaded and will process this event');
  } else {
    console.log('ℹ️ GTM not loaded yet - event stored in dataLayer and will be processed when GTM loads');
  }
}

/**
 * Track site search with query
 * @param {string} searchQuery - The search query entered by the user
 */
export function trackSiteSearch(searchQuery) {
  if (!searchQuery || typeof searchQuery !== 'string' || searchQuery.trim() === '') {
    return;
  }
  
  const trimmedQuery = searchQuery.trim();
  
  console.log('🔍 site_search event:', {
    event_category: trimmedQuery,
    event_action: 'NA'
  });
  
  pushToDataLayer('site_search', {
    event_category: trimmedQuery,
    event_action: 'NA'
  });
}
