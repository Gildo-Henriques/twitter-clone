
import Button from "./Button"
import Navbar from "./Navbar"
import CardProfile from "./CardProfile"
import LogoX from "./LogoX"
type Props={
    estilo: string;
}
export default function OpenNavbar({estilo}:Props){
    return (
        <section className={estilo}>
                    <div className="flex flex-col justify-between h-screen">
                      <div className="flex justify-start">
                        <LogoX size={35} position={1} />
                      </div>
                      <Navbar />
                      <div className="">
                        <Button size={1}>Hello</Button>
                      </div>

                    <CardProfile
                        imagem="/shelby.jpg"
                        title="Imagem do usuário"
                        descricao="gildo@gmail.com"
                        size={1}
                        nome="Gildo Henriques"
                        estilo={1}
                      />

                    </div>
                  </section>
    )
}