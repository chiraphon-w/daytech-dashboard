import { atom } from 'recoil'; //useState

export const resetAllTimerState = atom({
  key: 'resetAllTimer',
  default: false,
});
