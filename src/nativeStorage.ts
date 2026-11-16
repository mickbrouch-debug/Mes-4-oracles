import { Capacitor } from '@capacitor/core';
import { Preferences } from '@capacitor/preferences';

export async function readPersistentValue(key: string): Promise<string | null> {
  if (Capacitor.isNativePlatform()) {
    const stored = await Preferences.get({ key });
    if (stored.value !== null) return stored.value;
    const legacy = localStorage.getItem(key);
    if (legacy !== null) await Preferences.set({ key, value: legacy });
    return legacy;
  }
  return localStorage.getItem(key);
}

export async function writePersistentValue(key: string, value: string): Promise<void> {
  localStorage.setItem(key, value);
  if (Capacitor.isNativePlatform()) await Preferences.set({ key, value });
}

export async function removePersistentValue(key: string): Promise<void> {
  localStorage.removeItem(key);
  if (Capacitor.isNativePlatform()) await Preferences.remove({ key });
}
