import Posts from "../../../components/ui/Posts";
import TextAreaPost from "../../../components/ui/TextAreaPost";
export default function Page() {
  return (
    <main className="mx-auto flex-1 flex w-full flex-col ">
      <header className="bg-black/50  backdrop-blur-md text-white border-bottom sticky flex items-center top-0 h-16 w-full">
        <div className="flex-1 hover:bg-[#797878]/20 flex justify-center items-center h-full">
          <a href="">Para Você</a>
        </div>
        <div className="flex-1 flex justify-center hover:bg-[#797878]/20 items-center h-full">
          <a href="">Seguir a</a>
        </div>
      </header>
      {/* POST */}
      <TextAreaPost />
      <section className="flex flex-col">
        <Posts
        imagemProfile="/gildo.jpeg"
        sizeProfile={45}
          imagem="/batman-a.jpg"
          size={5000}
          title="imagem do perfil"
          titlePost="imagem do post"
          nome="Gildo Cabeto"

          descricao="20 de agosto"
          pub="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit assumenda ipsum excepturi culpa provident, consequuntur qui reprehenderit sunt officiis nisi quo natus quaerat, dicta cum nostrum ad illo porro similique?"
        />
         
         <Posts
        imagemProfile="/Mara.jpg"
        sizeProfile={45}
          imagem="/04.jpg"
          size={500}
          title="imagem do perfil"
          titlePost="imagem do post"
          nome="Mara Muta"

          descricao="20 de agosto"
          pub="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit assumenda ipsum excepturi culpa provident, consequuntur qui reprehenderit sunt officiis nisi quo natus quaerat, dicta cum nostrum ad illo porro similique?"
        />
        
        <Posts
        imagemProfile="/Vera.jpeg"
        sizeProfile={45}
          imagem="/06.jpg"
          size={500}
          title="imagem do perfil"
          titlePost="imagem do post"
          nome="Vera Mota"

          descricao="20 de agosto"
          pub="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit assumenda ipsum excepturi culpa provident, consequuntur qui reprehenderit sunt officiis nisi quo natus quaerat, dicta cum nostrum ad illo porro similique?"
        />

<Posts
        imagemProfile="/Mara.jpg"
        sizeProfile={45}
          imagem="/01.jpg"
          size={500}
          title="imagem do perfil"
          titlePost="imagem do post"
          nome="Mara Muta"

          descricao="20 de agosto"
          pub="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit assumenda ipsum excepturi culpa provident, consequuntur qui reprehenderit sunt officiis nisi quo natus quaerat, dicta cum nostrum ad illo porro similique?"
        />
<Posts
        imagemProfile="/Mara.jpg"
        sizeProfile={45}
          imagem="/03.jpg"
          size={500}
          title="imagem do perfil"
          titlePost="imagem do post"
          nome="Mara Muta"

          descricao="20 de agosto"
          pub="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit assumenda ipsum excepturi culpa provident, consequuntur qui reprehenderit sunt officiis nisi quo natus quaerat, dicta cum nostrum ad illo porro similique?"
        />
      </section>
    </main>
  );
}
