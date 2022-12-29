import {navigationRef} from '@/Navigation/Root';

export const wait = (delay: number) =>
  new Promise(resolve => setTimeout(resolve, delay));

export const emulateRequest = async (
  timeToWait: number,
  isSuccess: boolean = true,
) => {
  if (navigationRef?.current?.isReady()) {
    navigationRef.current?.navigate('LoadingModal');
    await wait(timeToWait);
    navigationRef.current?.goBack();
  }

  return new Promise((resolve, reject) => {
    isSuccess ? resolve('Success') : reject('Error');
  });
};
