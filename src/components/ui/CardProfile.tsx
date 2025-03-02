import Image from "next/image"
type Props = {
    imagem: string;
    size: number;
    title: string;
    nome?: string;
    descricao?: string;
    estilo: 1 | 2 | 3;

}
export default function CardProfile({imagem, size, title, nome, descricao, estilo}:Props){
    return (
        <div className={`flex cursor-pointer space-x-2 
        ${estilo === 1 && 'hover:bg-[#1c1c1c] w-full py-3 px-5 rounded-full items-center '}
        ${estilo === 2 && 'items-start px-5'}
        ${estilo === 3 && 'items-start'}`}>
            <Image className="object-cover rounded-full" src={imagem} width={size} height={size} alt={title} />
            <div className="flex flex-col">
                <h2 className="text-white text-base font-semibold">{nome}</h2>
                <span className="text-slate-500 text-xs">{descricao}</span>
            </div>
        </div>
    )
}