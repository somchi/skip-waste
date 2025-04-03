import { AppStore, Skip, StoreAction } from '../../utils/types';

export const SET_SELECTED_SKIP = 'SET_SELECTED_SKIP';

export const appReducer = (state: AppStore, action: StoreAction): AppStore => {
  switch (action.type) {
    case SET_SELECTED_SKIP:
      return { ...state, selected: action.payload.selected ?? ({} as Skip) };
    default:
      return state;
  }
};
