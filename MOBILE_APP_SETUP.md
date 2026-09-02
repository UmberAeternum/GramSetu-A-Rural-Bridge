# Mobile App Setup Guide

GramSetu now supports native mobile apps for iOS and Android using Capacitor.

## Prerequisites

- Node.js and npm installed
- For iOS: macOS with Xcode installed
- For Android: Android Studio installed with SDK tools

## Installation

1. Install dependencies:
```bash
npm install
```

2. Build the web app:
```bash
npm run build
```

## Android Setup

```bash
# Add Android platform
npm run cap:add:android

# Open Android Studio
npm run cap:open:android
```

In Android Studio:
1. Select your device or emulator
2. Click the **Run** button (green play icon)
3. APK will be built and deployed to device

## iOS Setup

```bash
# Add iOS platform (macOS only)
npm run cap:add:ios

# Open Xcode
npm run cap:open:ios
```

In Xcode:
1. Select your iPhone simulator or connected device
2. Click the **Run** button
3. App will build and launch

## After Making Changes

Whenever you modify the web code:

```bash
npm run build
npm run cap:sync
```

Then rebuild in Xcode/Android Studio.

## Features Enabled

- ✅ Geolocation (GPS capture with permission)
- ✅ Camera access for photo capture
- ✅ Web Speech API for voice input
- ✅ Supabase integration
- ✅ Progressive Web App features
- ✅ Installable on home screen (both iOS & Android)

## Build for Release

### Android:
```bash
npm run cap:build:android
```
Then in Android Studio: Build → Generate Signed Bundle/APK

### iOS:
```bash
npm run cap:build:ios
```
Then in Xcode: Product → Archive → Distribute App

## Troubleshooting

**Geolocation not working:** Ensure location permission is granted in device settings.

**Camera not working:** Check camera permissions in Settings → Apps → GramSetu.

**Changes not reflecting:** Run `npm run cap:sync` after building.

## Support

For more info on Capacitor: https://capacitorjs.com/docs
