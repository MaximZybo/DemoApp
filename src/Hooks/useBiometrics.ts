import {useEffect, useState} from 'react';
import ReactNativeBiometrics from 'react-native-biometrics';

export const useBiometrics = () => {
  const [isSensorAvailable, setIsSensorAvailable] = useState(false);
  const [isSensorLoading, setIsSensorLoading] = useState(true);

  useEffect(() => {
    const rnBiometrics = new ReactNativeBiometrics();

    rnBiometrics
      .isSensorAvailable()
      .then(({available}) => {
        setIsSensorAvailable(available);
      })
      .catch(() => {
        // send error report
      })

      .finally(() => {
        setIsSensorLoading(false);
      });
  }, []);

  return {isSensorAvailable, isSensorLoading};
};
