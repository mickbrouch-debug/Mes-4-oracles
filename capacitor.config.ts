import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'fr.lesanctuaire.oracles.v2',
  appName: 'Le Sanctuaire',
  webDir: 'dist',
  bundledWebRuntime: false,
  android: {
    backgroundColor: '#090813'
  }
};

export default config;
