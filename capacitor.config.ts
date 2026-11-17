import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'fr.lesanctuaire.oracles.v3',
  appName: 'Le Sanctuaire',
  webDir: 'dist',
  bundledWebRuntime: false,
  android: {
    backgroundColor: '#090813'
  },
  plugins: {
    CapacitorHttp: { enabled: true }
  }
};

export default config;
