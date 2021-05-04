import { atom } from 'recoil'; //useState

export const setTimerState = atom({
  key: 'setTimer',
  default: false,
});
