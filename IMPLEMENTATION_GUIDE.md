# Implementation Guide: Photo Toggle Removal & Mobile App Support

## Summary of Changes

This branch adds two major features to GramSetu:

### 1. ✅ Permanent Village Photo Display
- **Removed**: Toggle button at bottom-right that switches village photo on/off
- **Result**: Village scene now ALWAYS displays with beautiful photo background
- **Files Modified**:
  - `src/photo-toggle-removal.js` - Core logic to disable toggle and enforce photo display
  - `index.html` - Include the photo toggle removal script

### 2. ✅ Native Mobile App Support (iOS & Android)
- **Framework**: Capacitor (wraps web app as native)
- **Support**: iOS (via Xcode) and Android (via Android Studio)
- **Files Added**:
  - `capacitor.config.ts` - Capacitor configuration
  - `package.json` - Updated with Capacitor and build scripts
  - `MOBILE_APP_SETUP.md` - Complete setup instructions
  - `.env.example` - Mobile-specific configuration

## How to Implement

### Step 1: Include Photo Toggle Removal in index.html

Find the closing `</body>` tag in `index.html` and add:

```html
<script type="module">
  import { initializePhotoPermanent } from './src/photo-toggle-removal.js';
  
  // Initialize after your main app code loads
  document.addEventListener('DOMContentLoaded', initializePhotoPermanent);
</script>
```

Or if using existing script loader, add to your main initialization:

```javascript
import { initializePhotoPermanent } from './src/photo-toggle-removal.js';
initializePhotoPermanent();
```

### Step 2: Install Mobile App Dependencies

```bash
npm install
npm install @capacitor/core @capacitor/cli --save-dev
```

### Step 3: Build and Test Locally

```bash
npm run build
```

### Step 4: Add Mobile Platforms

**For Android:**
```bash
npm run cap:add:android
npm run cap:open:android
```

**For iOS:**
```bash
npm run cap:add:ios
npm run cap:open:ios
```

### Step 5: Deploy to Device

See `MOBILE_APP_SETUP.md` for detailed iOS/Android deployment steps.

## Configuration

### Photo Toggle Behavior

The `src/photo-toggle-removal.js` script:
- ✅ Hides all photo toggle buttons (display: none)
- ✅ Disables click handlers on toggle elements
- ✅ Sets `window.showPhoto = true` permanently
- ✅ Intercepts any attempts to change photo state
- ✅ Logs confirmation when activated

### Mobile App Permissions

The app requests these permissions on first launch:

**Android & iOS:**
- **Location** (GPS) - For capturing exact complaint location
- **Camera** - For photo evidence upload
- **Microphone** - For voice-to-text in 22 Indian languages

Users can grant/revoke these in device settings at any time.

## Verification Checklist

- [ ] Photo toggle button is hidden from UI
- [ ] Village scene displays photo background
- [ ] No toggle functionality works (bottom-right area)
- [ ] Android app builds and runs in Android Studio
- [ ] iOS app builds and runs in Xcode
- [ ] GPS capture works on mobile devices
- [ ] Camera photo capture works on mobile
- [ ] Voice input works on mobile
- [ ] PWA install option still available (Android Chrome)

## Rollback (if needed)

To revert to original with toggle:
1. Revert the `photo-toggle-removal.js` import from `index.html`
2. Restore the original HTML that contains the toggle button UI
3. The toggle code will work again

## Next Steps

1. **Merge** this branch to main after testing
2. **Build APK/IPA** for distribution:
   - Android: Use Android Studio's signed build process
   - iOS: Use Xcode's archive and App Store upload
3. **Test on real devices** (emulators miss some permissions)
4. **Deploy to app stores**:
   - Google Play Store (Android)
   - Apple App Store (iOS)

## Support

For questions about:
- **Photo toggle removal**: See `src/photo-toggle-removal.js` comments
- **Mobile app setup**: See `MOBILE_APP_SETUP.md`
- **Capacitor**: https://capacitorjs.com/docs

---

**Branch**: `feature/remove-photo-toggle-and-mobile-app`  
**Status**: Ready for testing and merge
