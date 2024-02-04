// This is a component that renders a blue button.
export const Button = ({ handleSubmit, label }) => {
  return (
    <button
      className="w-full h-1/3 bg-blue-500 rounded-xl text-white"
      onClick={handleSubmit}
    >
      {label}
    </button>
  );
};
