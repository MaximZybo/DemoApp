import {createSlice} from '@reduxjs/toolkit';
import {TProfileState} from './types';

const initialState: TProfileState = {
  isSignedIn: false,
};

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setIsSignedIn: state => {
      state.isSignedIn = true;
    },
    setIsSignedOut: state => {
      state.isSignedIn = false;
    },
  },
});

export const {setIsSignedIn, setIsSignedOut} = profileSlice.actions;

export default profileSlice.reducer;
