export const Checkbox = ({
  checked,
  handleChange,
}: {
  checked: boolean;
  handleChange: () => void;
}) => {
  return (
    <label className="flex cursor-pointer shadow">
      <input
        type="checkbox"
        className="sr-only peer"
        checked={checked}
        onChange={handleChange}
        // disabled
      />
      <div
        className="w-6 h-6 flex items-center justify-center border-2 border-gray-400 
      rounded-full peer-checked:border-4 peer-checked:bg-blue-500 
      transition-all"
      >
        <svg
          className="w-4 h-4 text-white hidden peer-checked:block"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          viewBox="0 0 24 24"
        >
          <polyline points="20 6 9 17 4 12" />
        </svg>
      </div>
    </label>
  );
};
