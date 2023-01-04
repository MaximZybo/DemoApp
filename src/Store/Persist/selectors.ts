import type {RootState} from '../index';

export const getIsBiometryEnabled = (state: RootState) =>
  state.persist.isBiometryEnabled;
