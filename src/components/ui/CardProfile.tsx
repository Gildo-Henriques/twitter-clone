import Image from "next/image"
type Props = {
    imagem?: string;
    size?: 1 | 2;
    title?: string;
    nome?: string;
    nomeProfile?: string;
    descricao?: string;
    estilo?: 1 | 2 | 3 | 4;

}
export default function CardProfile({imagem, size, title, nome, nomeProfile, descricao, estilo}:Props){
    return (
        <div className={`flex cursor-pointer space-x-2 
        ${estilo === 1 && 'hover:bg-[#1c1c1c] w-full py-3 px-5 rounded-full items-center '}
        ${estilo === 2 && 'items-start px-5'}
        ${estilo === 3 && 'items-start'}
        ${estilo === 4 && 'flex-col justify-center items-center space-y-2'}`}>
            <div className={`bg-cover rounded-full overflow-hidden 
                ${size === 1 && 'size-11'}
                ${size === 2 && 'size-32'}`}>
            <Image className="object-cover h-full w-full" src={imagem} width={500} height={500} alt={title} />
            </div>
            <div className="flex flex-col">
                <h2 className={`text-white text-base font-semibold`}>{nome}</h2>
                <h2 className={`text-white text-xl font-semibold`}>{nomeProfile}</h2>
                <span className="text-slate-500 text-xs">{descricao}</span>
            </div>
        </div>
    )
}