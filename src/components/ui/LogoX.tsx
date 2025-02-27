import Image from "next/image"
type Props = {
    carregar?: boolean;
    size: number;
    position: 1 | 2
}
export default function LogoX({carregar, size, position}:Props){
    return (
        <div className={`flex items-center 
        ${position === 1 && 'justify-start'}
        ${position === 2 && 'justify-center'}`}>
           <Image src={'/twitter.png'} alt="Twitter-X" width={size} height={size} />
        </div>
    )
}