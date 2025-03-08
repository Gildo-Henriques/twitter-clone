type Props = {
  children: React.ReactNode;
  EventoClick?: () => void;
  size: 1 | 2 | 3 | 4 | 5 | 6 | 7;
};
export default function Button({ children, EventoClick, size}: Props) {
  return (
    <button
      onClick={EventoClick}
      className={`text-center rounded-lg text-black flex items-center justify-center  focus:outline-none focus:ring-opacity-40 space-x-2
        ${size === 1 && "w-full py-3 px-11 border focus:ring-blue-300  font-semibold bg-white"}
        ${size === 2 && "w-full py-1 px-5 border focus:ring-blue-300 bg-white"}
        ${
          size === 3 &&
          "w-full py-2 px-11 text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-600 focus:ring-opacity-50"
        }
         ${size === 4 && "px-2 py-1 border self-start focus:ring-blue-300 bg-white"}
         ${size === 5 && "py-2 px-5 border-full w-auto self-start focus:ring-blue-300 bg-transparent text-white"}
          ${size === 6 && "px-2 py-1 focus:ring-blue-300 bg-gradient-to-r text-white from-blue-500 to-violet-700"}
          ${
            size === 7 &&
            "py-2 px-5 text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-600 focus:ring-opacity-50"
          }`}
    >
      {children}
    </button>
  );
}
