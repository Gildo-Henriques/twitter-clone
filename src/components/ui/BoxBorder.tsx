type Props = {
  children: React.ReactNode;
};
export default function BoxBorder({ children }: Props) {
  return (
    <div className="flex flex-col p-5 border-full rounded-xl">
        <h2 className="text-lg font-semibold text-white">Quem seguir</h2>
        {children}
        </div>
  );
}
