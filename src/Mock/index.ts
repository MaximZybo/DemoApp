import {TBank} from '@/Store/Payments/types';
import {TAccount} from '@/Store/Profile/types';

export const accounts: TAccount[] = [
  {
    balance: 100,
    isActive: true,
    type: 'Saving',
    number: '1111111111',
  },
  {balance: 2000.15, isActive: true, type: 'Current', number: '2222222222'},
  {balance: 500.95, isActive: false, type: 'Saving', number: '3333333333'},
];

export const banks: TBank[] = [
  {code: '1', name: 'Bank 1'},
  {code: '2', name: 'Bank 2'},
  {code: '3', name: 'Bank 3'},
  {code: '4', name: 'Bank 4'},
  {code: '5', name: 'Bank 5'},
  {code: '6', name: 'Bank 6'},
  {code: '7', name: 'Bank 7'},
  {code: '8', name: 'Bank 8'},
  {code: '9', name: 'Bank 9'},
  {code: '10', name: 'Bank 10'},
  {code: '11', name: 'Bank 11'},
  {code: '12', name: 'Bank 12'},
  {code: '13', name: 'Bank 13'},
  {code: '14', name: 'Bank 14'},
  {code: '15', name: 'Bank 15'},
  {code: '16', name: 'Bank 16'},
];
