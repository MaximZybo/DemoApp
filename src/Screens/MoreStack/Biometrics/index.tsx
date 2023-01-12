import React, {useEffect} from 'react';
import {StyleSheet, Switch, View} from 'react-native';
import {useAppDispatch, useAppSelector} from '@/Hooks/redux';
import {useBiometrics} from '@/Hooks/useBiometrics';
import {getIsBiometryEnabled} from '@/Store/Persist/selectors';
import {
  setIsBiometryDisabled,
  setIsBiometryEnabled,
} from '@/Store/Persist/persistSlice';
import {Label} from '@/Components/Label';
import {AppScreen} from '@/Components/AppScreen';
import {MoreStackScreenProps} from '@/Navigation/types';

export const Biometrics = ({}: MoreStackScreenProps<'Biometrics'>) => {
  const dispatch = useAppDispatch();

  const isBiometryEnabled = useAppSelector(getIsBiometryEnabled);
  const {isSensorAvailable, isSensorLoading} = useBiometrics();

  useEffect(() => {
    if (!isSensorLoading && !isSensorAvailable) {
      dispatch(setIsBiometryDisabled());
    }
  }, [dispatch, isSensorAvailable, isSensorLoading]);

  const onSwitchPress = () => {
    isBiometryEnabled
      ? dispatch(setIsBiometryDisabled())
      : dispatch(setIsBiometryEnabled());
  };

  return (
    <AppScreen headerTitle="Biometrics">
      {!isSensorAvailable && (
        <Label>Biometrics are not available on this device</Label>
      )}
      <View style={styles.row}>
        <Label style={styles.rowLabel}>Use biometrics</Label>
        <Switch
          value={isBiometryEnabled}
          onChange={onSwitchPress}
          disabled={!isSensorAvailable}
        />
      </View>
    </AppScreen>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  rowLabel: {
    marginBottom: 0,
  },
});
