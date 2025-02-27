"use client"
import { useRouter } from "next/navigation";
import Button from "../ui/Button";
import LogoX from "../ui/LogoX";
import Image from "next/image"
export default function SignInForm(){
    const router = useRouter()
    function handleEnterButton(){
      router.replace('/signout')
    }
    return (
        <form action="" className="flex flex-col">
            <LogoX position={1} size={50} />
            <h1
            className="mt-3 text-2xl font-semibold capitalize sm:text-3xl text-white"
          >
            sign In
          </h1>
          <div className="mt-8">
          <Button size={1}>
            <Image src={'/google.png'} width={25} height={25} alt="google logo" />
            <span>Inscrever-se com Google</span>
          </Button>
          </div>
          <div className="mt-4">
          <Button size={1}>
          <Image src={'/apple.png'} width={20} height={20} alt="google logo" />
          <span>Inscrever-se com Apple</span>
            
          </Button>
          </div>
          <span className="text-white mt-3 text-center text-xs">ou</span>
          <div className="mt-3">
          <Button size={3} EventoClick={handleEnterButton}>
            Criar Conta
          </Button>
          </div>
          <div className="mt-6 text-center">
              <p className="text-slate-400 text-left text-xs">
              Ao se inscrever, você concorda com os <a href="" className="text-cyan-600">Termos de Serviço</a> e a <a href="" className="text-cyan-600">Política de Privacidade</a>, incluindo o <a href="" className="text-cyan-600">Uso de Cookies.</a>
              </p>
            </div>
            <div className="relative flex items-center mt-8">
            <h2 className="text-lg text-white font-semibold">Já tem uma conta?</h2>
          </div>
            <div className="relative flex items-center mt-8">
            <a href="" className="w-full px-6 py-3 text-sm font-medium tracking-wide capitalize transition-colors duration-300 transform text-center border border-slate-500 text-cyan-500 rounded-lg focus:outline-none focus:ring focus:ring-cyan-600 focus:ring-opacity-50">
                Entrar
            </a>
          </div>
        </form>
    )
}