import { Profile } from '../getProfile';
import { getMockedProfile } from './profile';

export const profiles = new Map<string, Profile>();

export function initializeMockedDB() {
    for (let i = 0; i < 100; i++) {
        const profile = getMockedProfile(String(i));
        profiles.set(profile.id, profile);
    }
}
