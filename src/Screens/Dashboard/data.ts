import {TAccount} from '@/Store/Profile/types';

export const cards: TAccount[] = [
  {
    balance: 100,
    isActive: true,
    type: 'Saving',
    number: '1111111111',
  },
  {balance: 2000.15, isActive: true, type: 'Current', number: '2222222222'},
  {balance: 500.95, isActive: false, type: 'Saving', number: '3333333333'},
];
