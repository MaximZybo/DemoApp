import type {RootState} from '../index';

export const getIsSignedIn = (state: RootState) => state.profile.isSignedIn;
