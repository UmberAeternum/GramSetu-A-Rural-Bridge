/**
 * Photo Toggle Removal Configuration
 * 
 * This script ensures the village photo background is ALWAYS displayed.
 * The toggle option at the bottom right is removed/hidden, and the 
 * village scene renders with photo enabled by default.
 * 
 * CHANGES APPLIED:
 * 1. Remove or hide any UI toggle buttons for photo on/off
 * 2. Force `showPhoto = true` by default
 * 3. Prevent any toggle functionality from working
 */

// Call this after your main initialization code loads
export function initializePhotoPermanent() {
  // Force photo display to always be ON
  window.showPhoto = true;
  window.villagePhotoEnabled = true;

  // Prevent any toggle buttons from being functional
  const toggleButtons = document.querySelectorAll(
    '[data-toggle="photo"],' +
    '[id*="photo-toggle"],' +
    '[class*="photo-toggle"],' +
    'button[aria-label*="photo"],' +
    'button[title*="photo"]'
  );

  toggleButtons.forEach(btn => {
    // Hide the toggle button
    btn.style.display = 'none';
    
    // Remove any click handlers
    btn.onclick = null;
    btn.disabled = true;
    
    // Prevent any event listeners from working
    const newBtn = btn.cloneNode(true);
    btn.parentNode.replaceChild(newBtn, btn);
  });

  // Monitor for any attempts to change the photo state
  const handler = {
    set: (target, property, value) => {
      if (property === 'showPhoto' || property === 'villagePhotoEnabled') {
        // Always keep it true
        return true; // Silently ignore attempts to change
      }
      target[property] = value;
      return true;
    }
  };

  // If there's a global state object, protect it
  if (window.state) {
    window.state = new Proxy(window.state, handler);
  }

  console.log('✓ Village photo is now permanently enabled');
}

// Auto-initialize on DOM ready
document.addEventListener('DOMContentLoaded', initializePhotoPermanent);
document.addEventListener('load', initializePhotoPermanent);

// Also initialize immediately if script loads after DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializePhotoPermanent);
} else {
  initializePhotoPermanent();
}
