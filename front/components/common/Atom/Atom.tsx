import { atom } from 'recoil';

export const searchQuery = atom({
  key: 'searchQuery',
  default: '',
});

export const searchOption = atom({
  key: 'searchOption',
  default: 'default',
});
