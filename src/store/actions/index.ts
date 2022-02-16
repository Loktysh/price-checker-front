import { initTrackedItems, loginUser, logoutUser, setUserLogin } from '../slices';
import { store } from '../store';

export const logUser = (login: string, items: string[]) => {
  store.dispatch(loginUser());
  store.dispatch(setUserLogin(login));
  store.dispatch(initTrackedItems(items));
};

export const unlogUser = () => {
  store.dispatch(logoutUser());
  store.dispatch(setUserLogin(''));
  store.dispatch(initTrackedItems([]));
};
