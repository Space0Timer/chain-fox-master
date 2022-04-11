import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.chainfox',
  appName: 'ChainFox',
  webDir: 'www',
  bundledWebRuntime: false,
  plugins: {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    PushNotifications: {
      presentationOptions: ['badge', 'sound', 'alert']
    },
    Badge: {
      persist: true,
      autoClear: false,
    },
    SplashScreen: {
      launchAutoHide: false,
    }
  }
};



export default config;
