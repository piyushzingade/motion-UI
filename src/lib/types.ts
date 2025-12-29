
export interface Profile {
    id: string;
    name: string;
    age: number;
    bio: string;
    image: string;
    distance: string;
    matchScore: number;
}

export enum AppScreen {
    Splash = 'splash',
    Discover = 'discover',
    Matches = 'matches',
    Profile = 'profile'
}

export interface UserState {
    currentScreen: AppScreen;
    likedProfiles: string[];
    dislikedProfiles: string[];
}
