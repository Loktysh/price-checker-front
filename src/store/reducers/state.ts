import { store } from '../store';

const storageState = JSON.parse(localStorage.getItem('state')!);

export const initialState = storageState
  ? storageState
  : {
      logged: false,
      userLogin: '',
      userToken: '',
      userRenewToken: '',
    };

window.addEventListener('beforeunload', () => {
  const persistState = store.getState();
  localStorage.setItem('state', JSON.stringify(persistState));
});
