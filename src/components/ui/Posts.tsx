import Image from "next/image"
import ThreePounts from "./logos/ThreePounts";
import HeartLogo from "./logos/HeartLogo";
import CommentLogo from "./logos/CommentLogo";
import FavoritoLogo from "./logos/FavoritoLogo";
type Props = {
    pub: string;
    imagemProfile: string;
    imagem?: string;
    size: number;
    sizeProfile: number;
    nome: string;
    title: string;
    titlePost: string;
    descricao: string;

}
export default function Posts({pub, descricao, imagem, imagemProfile, size, sizeProfile, title, nome, titlePost}:Props){
    return(
        <div className="flex flex-col lg:px-10 px-5 py-10 border-bottom space-y-5">
            <div className="flex justify-between">
                        <div className={`flex cursor-pointer space-x-2 items-start`}>
                            <div className="size-11 rounded-full overflow-hidden">
                            <Image className="object-cover h-full w-full" src={imagemProfile} width={500} height={500}  alt={title} />
                            </div>
                            <div className="flex flex-col">
                                <h2 className="text-white text-base font-semibold">{nome}</h2>
                                <span className="text-slate-500 text-xs">{descricao}</span>
                            </div>
                        </div>
                <ThreePounts />
            </div>
           
            {/* Texto */}
            <div className="text-white">
                <p>{pub}</p>
            </div>
            <div className="">
                <Image src ={imagem} className="w-full rounded-xl" width={500} height={32} priority alt={titlePost} />
            </div>
            <div className="flex justify-between">
                <div className="flex items-center space-x-3">
                    <button className="text-slate-200 hover:text-rose-700">
                    <HeartLogo />
                    </button>
                    <button className="text-slate-200 hover:text-blue-500">
                        <CommentLogo />
                    </button>
                </div>
                <button className="text-slate-200 hover:text-blue-500">
                    <FavoritoLogo />
                </button>
            </div>
        </div>
    )
}