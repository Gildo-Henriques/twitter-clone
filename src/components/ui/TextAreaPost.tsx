import Button from "./Button";
import CardProfile from "./CardProfile";
import Fotos from "./logos/Fotos";
import Mundo from "./logos/TodosRespondemLogo";
export default function ProfileCard() {
  return (
    <div className="flex w-full flex-col items-center lg:px-10 px-2 border-bottom ">
      <div className="w-full pb-5 pt-10">
        <div className="flex w-full">
          <CardProfile
            imagem="/shelby.jpg"
            title="Imagem do usuário"
            size={1}
            estilo={3}
          />

          <div className="flex flex-col flex-1 space-y-3 px-5">
          <div className="border-bottom flex flex-col flex-1">
            <textarea
              name=""
              id=""
              className="text-[#b3b3b3] resize-none min-h-20 h-auto overflow-hidden bg-transparent text-xl  outline-none"
              placeholder="O que está acontecendo"
            ></textarea>
            <span className="*:text-blue-500 flex space-x-1 items-center border-bottom pb-5">
              <span>
                <Mundo />
              </span>
              <span className="text-sm font-semibold">
                Todos podem responder
              </span>
            </span>
          </div>
          <div className="flex items-center justify-between">
        <span className="cursor-pointer">

             <Fotos />
        </span>
         <div className="flex">
            <Button size={2}>
                Post
            </Button>
         </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}
