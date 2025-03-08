"use client"
import { useState } from "react"
import Button from "./Button"
import CardProfile from "./CardProfile"
import LogoX from "./LogoX"
import OpenNavbar from "./OpenNavbar"
export default function HeaderMobile(){
    const [isOpen, setIsOpen] = useState(false)
    return (
        <>
                <header className="bg-black/50 z-50 py-8 backdrop-blur-md px-5 text-white border-bottom sticky lg:hidden flex items-center justify-between top-0 h-16 w-full">
             <button onClick={()=> setIsOpen(!isOpen)}>
             <CardProfile
                        imagem="/shelby.jpg"
                        title="Imagem do usuário"
                        size={1}
                        estilo={3}
                      />
             </button>
            <LogoX position={1} size={20}/>
            <Button size={6}>
                Premium
            </Button>
            
        </header>
        <OpenNavbar estilo={`lg:sticky lg:hidden flex z-10 fixed transition-all duration-100 bg-black/50 px-5 backdrop-blur-md 2xl:w-96 lg:w-80 border-right py-8 h-screen top-0 flex lg:flex items-center lg:flex-col
                ${isOpen ? 'left-0' : '-left-full'}`} />
        </>

        
    )
}