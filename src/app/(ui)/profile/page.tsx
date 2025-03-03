import Button from "../../../components/ui/Button";
import CardProfile from "../../../components/ui/CardProfile";

export default function Page() {
  return (
  <main className="mx-auto flex-1 flex w-full flex-col ">
          <header className="bg-black lg:px-10 px-5 backdrop-blur-md text-white border-bottom sticky flex items-center top-0 h-16 w-full">
          <CardProfile nomeProfile="Gildo Henriques" />
        
      </header>
    <section className="bg-[#25282b] w-full h-52"></section>
    <div className="absolute top-52 lg:px-10 px-5">
    <CardProfile size={2} title="profile" nomeProfile="Gildo Henriques" estilo={4} imagem="/shelby.jpg" />
   
    </div>
    <div className="w-full flex justify-end h-20 py-5 px-10 items-center">
        <Button size={5}>
            Editar
        </Button>
    </div>
  </main>
  )
}
