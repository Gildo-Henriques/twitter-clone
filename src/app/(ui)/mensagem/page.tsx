import Button from "../../../components/ui/Button"
import CardProfile from "../../../components/ui/CardProfile"
export default function Page(){
    return(
        <main className="mx-auto flex-1 flex w-full flex-col">
           <header className="bg-black lg:px-10 px-5 backdrop-blur-md text-white border-bottom sticky flex items-center top-0 h-16 w-full">
                     <CardProfile nomeProfile="Mensagens" />
                   
                 </header>
                 <section className="mt-10 space-y-5 text-white px-12">
                    <h2 className="text-white text-3xl font-semibold">Bem vindo a sua caixa de entrada</h2>
                    <p>Estará disponível brevemente</p>
                    <Button size={7}>Escreva uma mensagem</Button>
                 </section>
        </main>
    )
}