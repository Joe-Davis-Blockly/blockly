/**
 * Custom Docusaurus plugin to handle codelab route rewriting
 * This plugin injects a synchronous script that runs immediately on page load
 * to transform URLs before React even initializes
 */

// Inline mapping data to avoid async loading
const codelabMappingData = {
  'getting-started': {
    basePath: 'blockly/codelabs/getting-started',
    steps: {
      'codelab-overview': 0,
      'setup': 1,
      'explore-the-app': 2,
      'add-blockly-libraries': 3,
      'create-a-blockly-workspace': 4,
      'create-a-custom-block': 5,
      'save-load-workspace': 6,
      'generate-javaScript-code': 7,
      'run-generated-code': 8,
      'the-end': 9,
    },
  },
  'custom-toolbox': {
    basePath: 'blockly/codelabs/custom-toolbox',
    steps: {
      'codelab-overview': 0,
      'setup': 1,
      'change-the-look-of-a-category': 2,
      'change-the-look-of-a-selected-category': 3,
      'add-an-icon-to-your-category': 4,
      'change-the-category-HTML': 5,
      'adding-a-custom-toolbox-item': 6,
      'summary': 7,
    },
  },
  'theme-extension-identifier': {
    basePath: 'blockly/codelabs/theme-extension-identifier',
    steps: {
      'codelab-overview': 0,
      'setup': 1,
      'workspace-theme': 2,
      'customize-components': 3,
      'customize-category-styles': 4,
      'customize-block-styles': 5,
      'summary': 6,
    },
  },
  'context-menu-option': {
    basePath: 'blockly/codelabs/context-menu-option',
    steps: {
      'codelab-overview': 0,
      'setup': 1,
      'add-a-context-menu-item': 2,
      'precondition-node-type': 3,
      'precondition-external-state': 4,
      'precondition-blockly-state': 5,
      'callback': 6,
      'display-text': 7,
      'weight-and-id': 8,
      'separators': 9,
      'summary': 10,
    },
  },
  'validation-and-warnings': {
    basePath: 'blockly/codelabs/validation-and-warnings',
    steps: {
      'codelab-overview': 0,
      'setup': 1,
      'validating-blocks': 2,
      'displaying-warnings': 3,
      'summary': 4,
    },
  },
  'custom-generator': {
    basePath: 'blockly/codelabs/custom-generator',
    steps: {
      'codelab-overview': 0,
      'setup': 1,
      'the-basics': 2,
      'block-generator-overview': 3,
      'value-block-generators': 4,
      'member-block-generator': 5,
      'array-block-generator': 6,
      'object-block-generator': 7,
      'generating-a-stack': 8,
      'summary': 9,
    },
  },
  'custom-renderer': {
    basePath: 'blockly/codelabs/custom-renderer',
    steps: {
      'codelab-overview': 0,
      'setup': 1,
      'observe-the-built-in-renderers': 2,
      'define-and-register-a-custom-renderer': 3,
      'override-constants': 4,
      'understand-connection-shapes': 5,
      'change-connection-shapes': 6,
      'typed-connection-shapes': 7,
      'summary': 8,
    },
  },
};

function codelabRoutesPlugin(context, options) {
  return {
    name: 'codelab-routes-plugin',
    injectHtmlTags() {
      // Create inline script that runs immediately, before React loads
      const scriptContent = `
(function() {
  // CRITICAL: Run immediately, before ANY other scripts or page processing
  // This must be the first thing that runs to prevent 404 flashes
  
  // Mapping data (inline for instant access)
  var mapping = ${JSON.stringify(codelabMappingData)};
  
  // Get current URL components immediately
  var currentPath = window.location.pathname;
  var currentSearch = window.location.search;
  var currentHash = window.location.hash;
  
  // Check if we're in a redirect cycle (prevent infinite loop)
  var redirectFlag = sessionStorage.getItem('codelab_redirect');
  sessionStorage.removeItem('codelab_redirect');
  
  // Case 1: Handle transformed URL on page load/refresh (e.g., /blockly/codelabs/getting-started/index.html?index=..%2F..index#1)
  // This MUST run first to redirect before Docusaurus tries to process the route
  var transformedMatch = currentPath.match(/^\\/blockly\\/codelabs\\/([^/]+)\\/index\\.html$/);
  if (transformedMatch && currentSearch.includes('index=') && !redirectFlag) {
    var category = transformedMatch[1];
    var categoryData = mapping[category];
    
    if (categoryData) {
      // Extract hash value (e.g., 1 from #1)
      var hashValue = parseInt(currentHash.replace('#', '') || '0', 10);
      
      // Find step by hash value - optimized for speed
      var stepId = null;
      var steps = categoryData.steps;
      for (var step in steps) {
        if (steps[step] === hashValue) {
          stepId = step;
          break;
        }
      }
      
      if (stepId) {
        // Set flag IMMEDIATELY to prevent any other processing
        sessionStorage.setItem('codelab_redirect', 'true');
        
        // Redirect IMMEDIATELY - no delays, no async operations
        // Using replace instead of href for faster navigation
        var actualPath = '/blockly/codelabs/' + category + '/' + stepId;
        window.location.replace(actualPath);
        
        // Stop execution - nothing else should run
        return;
      }
    }
  }
  
  // Case 2: Transform actual route to display URL (only if not already transformed and not in redirect)
  var codelabMatch = currentPath.match(/^\\/blockly\\/codelabs\\/([^/]+)\\/([^/]+)\\/?$/);
  
  if (codelabMatch && !redirectFlag) {
    var category = codelabMatch[1];
    var stepId = codelabMatch[2];
    
    // Skip if already transformed
    if (currentPath.includes('/index.html') && currentSearch.includes('index=')) {
      return;
    }
    
    var categoryData = mapping[category];
    
    if (categoryData && categoryData.steps[stepId] !== undefined) {
      var hash = categoryData.steps[stepId];
      var newPath = '/' + categoryData.basePath + '/index.html';
      var queryParam = 'index=..%2F..index';
      var newUrl = newPath + '?' + queryParam + '#' + hash;
      
      // Transform URL immediately, before React loads
      if (currentPath + currentSearch + currentHash !== newUrl) {
        window.history.replaceState(null, '', newUrl);
      }
    }
  }
  
  // Also handle client-side navigation for smooth URL transformation
  // Intercept pushState to transform URLs immediately when navigation happens
  var originalPushState = history.pushState;
  var originalReplaceState = history.replaceState;
  
  // Track if we've already transformed to prevent loops
  var lastTransformedUrl = null;
  var transformCooldown = false;
  
  function transformIfNeeded() {
    // Check redirect flag to prevent loops
    if (sessionStorage.getItem('codelab_redirect')) {
      return;
    }
    
    // Prevent rapid re-transformations
    if (transformCooldown) {
      return;
    }
    
    var path = window.location.pathname;
    var search = window.location.search;
    var hash = window.location.hash;
    var currentUrl = path + search + hash;
    
    // Skip if we're already on the transformed URL we want
    if (currentUrl === lastTransformedUrl) {
      return;
    }
    
    // Only transform from actual route to transformed URL (not the reverse)
    // The redirect from transformed URL to actual route only happens on initial page load
    var match = path.match(/^\\/blockly\\/codelabs\\/([^/]+)\\/([^/]+)\\/?$/);
    if (match && !path.includes('/index.html') && !search.includes('index=')) {
      var cat = match[1];
      var step = match[2];
      var catData = mapping[cat];
      if (catData && catData.steps[step] !== undefined) {
        var h = catData.steps[step];
        var np = '/' + catData.basePath + '/index.html';
        var qp = 'index=..%2F..index';
        var nu = np + '?' + qp + '#' + h;
        
        if (currentUrl !== nu) {
          // Set cooldown to prevent rapid transformations
          transformCooldown = true;
          setTimeout(function() {
            transformCooldown = false;
          }, 200);
          
          lastTransformedUrl = nu;
          originalReplaceState.call(history, null, '', nu);
        }
      }
    } else {
      // Reset last transformed URL if we're not on a codelab route
      lastTransformedUrl = null;
    }
  }
  
  // Less aggressive transformation - only run once with a small delay
  function aggressiveTransform() {
    // Clear any pending timeouts to prevent multiple rapid calls
    if (aggressiveTransform.timeoutId) {
      clearTimeout(aggressiveTransform.timeoutId);
    }
    
    transformIfNeeded();
    
    // Only schedule one delayed transformation
    aggressiveTransform.timeoutId = setTimeout(transformIfNeeded, 50);
  }
  
  // Track codelab navigation to ensure transformation happens
  document.addEventListener('click', function(e) {
    var target = e.target;
    // Find the link element (might be nested)
    while (target && target.tagName !== 'A') {
      target = target.parentElement;
    }
    
    if (!target || !target.href) {
      return;
    }
    
    try {
      var url = new URL(target.href, window.location.origin);
      var path = url.pathname;
      var match = path.match(/^\\/blockly\\/codelabs\\/([^/]+)\\/([^/]+)\\/?$/);
      
      if (match) {
        var cat = match[1];
        var step = match[2];
        var catData = mapping[cat];
        
        if (catData && catData.steps[step] !== undefined) {
          // Check if we're already on this step with transformed URL
          var currentPath = window.location.pathname;
          var currentSearch = window.location.search;
          var currentHash = window.location.hash;
          
          var currentTransformedMatch = currentPath.match(/^\\/blockly\\/codelabs\\/([^/]+)\\/index\\.html$/);
          if (currentTransformedMatch && currentSearch.includes('index=')) {
            var currentCategory = currentTransformedMatch[1];
            var currentHashValue = parseInt(currentHash.replace('#', '') || '0', 10);
            var targetHash = catData.steps[step];
            
            // If clicking the same step we're already on, prevent navigation to preserve transformed URL
            if (currentCategory === cat && currentHashValue === targetHash) {
              e.preventDefault();
              e.stopPropagation();
              e.stopImmediatePropagation();
              return false;
            }
          }
          
          // Store the target step so we can transform after navigation
          sessionStorage.setItem('codelab_pending_transform', JSON.stringify({
            category: cat,
            step: step,
            hash: catData.steps[step]
          }));
          
          // Schedule aggressive transformation after navigation
          setTimeout(function() {
            var pending = sessionStorage.getItem('codelab_pending_transform');
            if (pending) {
              sessionStorage.removeItem('codelab_pending_transform');
              aggressiveTransform();
            }
          }, 0);
        }
      }
    } catch (err) {
      // Ignore errors
    }
  }, true);
  
  history.pushState = function() {
    originalPushState.apply(history, arguments);
    aggressiveTransform();
  };
  
  history.replaceState = function() {
    originalReplaceState.apply(history, arguments);
    aggressiveTransform();
  };
  
  window.addEventListener('popstate', aggressiveTransform);
  
  // Also watch for URL changes that might happen after React navigation
  var lastUrl = window.location.href;
  var urlCheckTimeout = null;
  function checkUrlChange() {
    var currentUrl = window.location.href;
    if (currentUrl !== lastUrl) {
      lastUrl = currentUrl;
      // Debounce the transformation to prevent rapid calls
      if (urlCheckTimeout) {
        clearTimeout(urlCheckTimeout);
      }
      urlCheckTimeout = setTimeout(function() {
        transformIfNeeded();
      }, 100);
    }
  }
  
  // Check URL changes periodically (as fallback) - less frequent to avoid loops
  setInterval(checkUrlChange, 200);
  
  // Case 3: Handle hash changes on transformed URLs (e.g., user manually changes #3 to #5)
  // This makes the URLs reverse compatible - any hash change should redirect to the correct route
  // CRITICAL: This must be fast - user is waiting, 404 is showing
  function handleHashChangeOnTransformedUrl() {
    // Fast exit if redirect flag is set
    if (sessionStorage.getItem('codelab_redirect')) {
      return;
    }
    
    var path = window.location.pathname;
    var search = window.location.search;
    
    // Fast pattern check - exit early if not matching
    if (!path.includes('/index.html') || !search.includes('index=')) {
      return;
    }
    
    var transformedMatch = path.match(/^\\/blockly\\/codelabs\\/([^/]+)\\/index\\.html$/);
    if (!transformedMatch) {
      return;
    }
    
    var category = transformedMatch[1];
    var categoryData = mapping[category];
    if (!categoryData) {
      return;
    }
    
    // Extract hash value
    var hash = window.location.hash;
    var hashValue = parseInt(hash.replace('#', '') || '0', 10);
    
    // Find step by hash value
    var stepId = null;
    var steps = categoryData.steps;
    for (var step in steps) {
      if (steps[step] === hashValue) {
        stepId = step;
        break;
      }
    }
    
    if (stepId) {
      // Set flag and redirect IMMEDIATELY - no delays
      sessionStorage.setItem('codelab_redirect', 'true');
      window.location.replace('/blockly/codelabs/' + category + '/' + stepId);
    }
  }
  
  // Listen for hash changes - use capture phase for earliest possible interception
  // hashchange only fires on window, not document
  window.addEventListener('hashchange', handleHashChangeOnTransformedUrl, true);
})();
      `.trim();

      return {
        headTags: [
          {
            tagName: 'script',
            innerHTML: scriptContent,
            attributes: {
              type: 'text/javascript',
            },
          },
        ],
      };
    },
  };
}

module.exports = codelabRoutesPlugin;
