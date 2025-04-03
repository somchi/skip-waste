import { useContext } from 'react';
import { Skip } from '../utils/types';
import { Checkbox } from './Checkbox';
import { AppContext } from '../context/app.context';
import { SET_SELECTED_SKIP } from '../context/reducers/app.reducer';
import { WarningIcon } from '../assets/Warning';
import { DangerIcon } from '../assets/Danger';

type Props = {
  skipItem: Skip;
};

export default function SkipCard({ skipItem }: Props) {
  const { state, dispatch } = useContext(AppContext);

  const handleClick = () => {
    const active = state.selected.id === skipItem.id ? ({} as Skip) : skipItem;
    dispatch({ type: SET_SELECTED_SKIP, payload: { selected: active } });
  };

  return (
    <div
      className={`flex items-center bg-gray-gray-800 border rounded-lg relative
      shadow-sm hover:bg-gray-700 bg-gray-800 h-[250px]  ${
        state.selected.id && state.selected.id === skipItem.id
          ? 'border-blue-500 border-2'
          : 'border-gray-700'
      } `}
      data-testid="card"
    >
      <div className="flex flex-col px-2 py-4 justify-between rounded-lg w-1/2 h-full bg-[url('./image.png')] relative">
        <div className="z-50 flex w-full">
          <Checkbox
            checked={
              state.selected.id && state.selected.id === skipItem.id
                ? true
                : false
            }
            handleChange={handleClick}
          />
        </div>
        <div className="flex flex-col gap-2 z-10">
          {!skipItem.allowed_on_road && (
            <div className="flex gap-x-1 bg-black rounded-full items-center p-[5px]">
              <WarningIcon />
              <span className="text-xs text-start text-yellow-500 font-semibold flex mt-[-2px]">
                Private property only
              </span>
            </div>
          )}
          {!skipItem.allows_heavy_waste && (
            <div className="flex gap-x-1 bg-black items-center rounded-full p-[3px]">
              <DangerIcon />
              <span className="text-xs text-start text-red-500 font-semibold mt-[-2px] flex">
                Not for heavy waste
              </span>
            </div>
          )}
        </div>
        <div className="absolute inset-0 bg-black bg-opacity-20 pointer-events-none transition-opacity"></div>
      </div>

      <div className="flex flex-col justify-between p-3 md:p-4 leading-normal w-2/3 gap-y-12">
        <div className="flex flex-col">
          <div className="flex justify-between">
            <h1 className="text-md md:text-xl font-bold">
              {skipItem.size} Yard Skip
            </h1>
            <div className="flex items-center bg-blue-500 rounded-full px-1 py-0">
              <span className="text-[10px] font-semibold">
                {skipItem.size} {skipItem.size > 1 ? 'Yards' : 'Yard'}
              </span>
            </div>
          </div>
          <div className="grid justify-start">
            <span className="text-gray-400">
              {skipItem.hire_period_days}{' '}
              {skipItem.hire_period_days > 1 ? 'days' : 'day'} hire period
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-4 justify-start">
          <p className="text-start">
            <strong className="text-blue-500 font-bold text-2xl">
              £{skipItem.price_before_vat}
            </strong>
            <span className="text-sm text-gray-400"> / per week</span>
          </p>
          <button
            className={`text-white rounded-full px-2 md:px-4 py-2 shadow-lg ${
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
      {!skipItem.allows_heavy_waste && (
        <div
          className="absolute inset-0 rounded-lg hover:bg-transparent bg-black
        bg-opacity-45 pointer-events-none transition-opacity"
        ></div>
      )}
    </div>
  );
}
