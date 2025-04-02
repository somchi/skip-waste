import { useReducer } from 'react';
import { AppContext, InitialState } from '../app.context';
import { appReducer } from '../reducers/app.reducer';

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(appReducer, InitialState);
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};
