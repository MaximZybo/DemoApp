import {createSlice} from '@reduxjs/toolkit';
import {TPersistState} from './types';

const initialState: TPersistState = {
  isBiometryEnabled: false,
};

const persistSlice = createSlice({
  name: 'persist',
  initialState,
  reducers: {
    setIsBiometryEnabled: state => {
      state.isBiometryEnabled = true;
    },
    setIsBiometryDisabled: state => {
      state.isBiometryEnabled = false;
    },
  },
});

export const {setIsBiometryEnabled, setIsBiometryDisabled} =
  persistSlice.actions;

export default persistSlice.reducer;
