import SearchLogo from "./logos/SearchLogo";

export default function Search(){
    return (
        <div className="flex items-center w-full h-10 border-full rounded-full">
            <SearchLogo/>
            <input type="search" name="" id="" className="flex-1 outline-none text-slate-300 h-full bg-transparent" placeholder="Pesquisar..." />
        </div>
    )
}