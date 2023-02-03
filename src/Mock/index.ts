import {TAccount} from '@/Store/Profile/types';
import {TProductCard} from '@/Types';
import {TBank} from '@/Store/Payments/types';
import {TTransaction} from '@/Store/Payments/types';

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

export const productCards: TProductCard[] = [
  {text: 'Product\nOne', icon: 'Attention'},
  {text: 'Product &\nTwo', icon: 'Eye'},
  {text: 'Product\nThree', icon: 'Bank'},
  {text: 'Product\nFour', icon: 'CreditCard'},
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

export const transactions: TTransaction[] = [
  {
    id: '0',
    amount: 140.15,
    date: 1672666264477,
    isIncoming: true,
    recipient: '',
  },
  {
    id: '1',
    amount: 1100,
    date: 1672666264477,
    isIncoming: false,
    recipient: '0000000001',
  },
  {
    id: '2',
    amount: 1402.02,
    date: 1672666294001,
    isIncoming: true,
    recipient: '',
  },
  {
    id: '3',
    amount: 10,
    date: 1672666303040,
    isIncoming: false,
    recipient: '0000000002',
  },
  {
    id: '4',
    amount: 1.5,
    date: 1672666303040,
    isIncoming: false,
    recipient: '0000000003',
  },
  {
    id: '5',
    amount: 110,
    date: 1672666303040,
    isIncoming: false,
    recipient: '0000000004',
  },
  {
    id: '6',
    amount: 200,
    date: 1672666303040,
    isIncoming: false,
    recipient: '0000000005',
  },
  {
    id: '7',
    amount: 300.15,
    date: 1672666303040,
    isIncoming: true,
    recipient: '',
  },
  {
    id: '8',
    amount: 97,
    date: 1672666303040,
    isIncoming: false,
    recipient: '0000000006',
  },
  {
    id: '9',
    amount: 14,
    date: 1672666303040,
    isIncoming: false,
    recipient: '0000000007',
  },
];
