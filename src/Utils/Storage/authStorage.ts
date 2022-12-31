import EncryptedStorage from 'react-native-encrypted-storage';

const key = 'credentials';

type TCredentials = {
  userId: string;
  password: string;
};

export const setCredentials = async ({userId, password}: TCredentials) => {
  return await EncryptedStorage.setItem(
    key,
    JSON.stringify({userId, password}),
  );
};

export const getCredentials = async (): Promise<TCredentials | undefined> => {
  const res = await EncryptedStorage.getItem(key);
  return res ? JSON.parse(res) : undefined;
};

export const removeCredentials = async () => {
  return await EncryptedStorage.removeItem(key);
};
