type Props = {
    imagem: React.ReactNode;
    nome: string;
    email?:string
}
export default function Profile({imagem, nome, email}:Props){
    return (
        <div className="flex">
            {imagem}
            <div className="flex flex-col">
            <h2 className="text-white font-semibold">{nome}</h2>
            <span className="text-slate-300 text-sm">{email}</span>
            </div>

        </div>
    )
}