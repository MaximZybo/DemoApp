export type TTransaction = {
  id: string;
  recipient: string;
  amount: number;
  date: number;
  isIncoming: boolean;
};

export type TBank = {
  code: string;
  name: string;
};
