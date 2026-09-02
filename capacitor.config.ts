import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.gramsetu.app',
  appName: 'GramSetu',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 0,
      launchAutoHide: true,
    },
    Geolocation: {
      timeoutMs: 10000,
    },
    Camera: {
      permissions: ['photos', 'camera']
    }
  }
};

export default config;
