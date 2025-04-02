import { useContext } from 'react';
import { Skip } from '../utils/types';
import { Checkbox } from './Checkbox';
import { AppContext } from '../context/app.context';
import { SET_SELECTED_SKIP } from '../context/reducers/app.reducer';

type Props = {
  skipItem: Skip;
};

export default function SkipCard({ skipItem }: Props) {
  const { state, dispatch } = useContext(AppContext);

  const handleClick = () => {
    const active = state.selected.id === skipItem.id ? ({} as Skip) : skipItem;
    dispatch({ type: SET_SELECTED_SKIP, payload: { selected: active } });
  };
  console.log(state);
  return (
    <div
      className={`flex items-center bg-gray-gray-800 border rounded-lg 
      shadow-sm md:flex-row w-full md:w-[390px] hover:bg-gray-700 bg-gray-800 h-[250px]  ${
        state.selected.id && state.selected.id === skipItem.id
          ? 'border-blue-500 border-2'
          : 'border-gray-700'
      } `}
    >
      <div className="flex rounded-lg w-1/3 h-full bg-[url('./image.png')] relative">
        <div className="z-50 flex w-full p-4">
          <Checkbox
            checked={
              state.selected.id && state.selected.id === skipItem.id
                ? true
                : false
            }
            handleChange={handleClick}
          />
        </div>
        <div className="absolute inset-0 bg-black bg-opacity-20 pointer-events-none transition-opacity"></div>
      </div>

      <div className="flex flex-col justify-between p-3 md:p-4 leading-normal w-2/3 gap-y-12">
        <div className="flex flex-col">
          <div className="flex justify-between">
            <h1 className="text-xl font-bold">6 Yard Skip</h1>
            <div className="flex items-center bg-blue-500 rounded-full px-2 py-0">
              <span className="text-xs font-semibold">6 Yards</span>
            </div>
          </div>
          <div className="grid justify-start">
            <span className="text-gray-400">14 days hire period</span>
          </div>
        </div>
        <div className="flex flex-col gap-4 justify-start">
          <p className="text-start">
            <strong className="text-blue-500 font-bold text-2xl">£269</strong>
            <span className="text-sm text-gray-400"> / per week</span>
          </p>
          <button
            className={`text-white rounded-full px-4 py-2 shadow-lg w-40 ${
              state.selected.id && state.selected.id === skipItem.id
                ? 'bg-blue-500 '
                : 'bg-zinc-600 border-gray-500 border'
            }`}
            onClick={handleClick}
          >
            {state.selected.id && state.selected.id === skipItem.id
              ? 'Selected'
              : 'Select this skip'}
          </button>
        </div>
      </div>
    </div>
  );
}
