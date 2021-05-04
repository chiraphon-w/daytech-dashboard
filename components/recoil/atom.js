import { atom } from 'recoil'; //useState

export const nameState = atom({
  key: 'nameState',
  default: '',
});

export const todoState = atom({
  key: 'todo',
  default: [],
});

export const editState = atom({
  key: 'edit',
  default: false,
});

export const inputSearchState = atom({
  key: 'inputSearch',
  default: '',
});

export const isSelectState = atom({
  key: 'isSelect',
  default: '',
});

export const setTimerState = atom({
  key: 'setTimer',
  default: false,
});
