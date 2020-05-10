import { getApiHooksCreator } from '../helpers';
import { profiles } from './moked/DB';

export type Profile = {
    id: string;
    name: string;
    birthday: Date;
    description: string;
    avatar: string;
};

export async function getProfile(id: string): Promise<Profile | undefined> {
    return profiles.get(id);
}

export const useGetProfile = getApiHooksCreator(getProfile);
