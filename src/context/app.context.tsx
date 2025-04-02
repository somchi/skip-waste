import { createContext } from 'react';
import { AppStore, Skip, StoreAction } from '../utils/types';

export const InitialState = {
  selected: {} as Skip,
};

export const AppContext = createContext<{
  state: AppStore;
  dispatch: React.Dispatch<StoreAction>;
}>({ state: InitialState, dispatch: () => null });
