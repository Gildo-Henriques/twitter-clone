type Props = {
  children: React.ReactNode;
  EventoClick?: () => void;
  size: 1 | 2 | 3;
};
export default function Button({ children, EventoClick, size}: Props) {
  return (
    <button
      onClick={EventoClick}
      className={`w-full   text-center rounded-lg text-black flex items-center justify-center  focus:outline-none focus:ring-opacity-40 space-x-2
        ${size === 1 && "py-3 px-11 border focus:ring-blue-300  font-semibold bg-white"}
        ${size === 2 && "py-3 px-5 border focus:ring-blue-300 bg-white"}
        ${
          size === 3 &&
          "py-2 px-11 text-white capitalize transition-colors duration-300 transform bg-cyan-600 rounded-lg hover:bg-cyan-700 focus:outline-none focus:ring focus:ring-cyan-600 focus:ring-opacity-50"
        }`}
    >
      {children}
    </button>
  );
}
