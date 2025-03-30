import "./App.css"; //Importação da folha de estilos globais

//Importação dos componentes
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import BasicInfos from "./components/basicInfos/BasicInfos";

function App() {
  return (
    <>
      <Navbar />
      <section className="p-40 bg-[url()]" id="inicio">
        <BasicInfos
          pequenoTitulo={"Seja bem-vindo"}
          titulo={"Resgatando Vidas"}
          paragrafo={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis iure alias placeat amet nam totam magnam similique cupiditate maiores, quis repudiandae laborum vitae pariatur minus veniam esse rerum. Accusantium, fuga!`}
        />
      </section>

      <section className="p-40 flex flex-col gap-30 items-center justify-center lg:flex-row lg:gap-60" id="quemSou">
        <figure className="min-w-82 min-h-82 rounded-full bg-gray-300 flex items-center justify-center relative md:mb-2.5 md:ml-15">
          <img
            src=""
            alt="Foto do Giovane Goulart"
            className="w-full h-full rounded-full object-cover"
          />
        </figure>
        <BasicInfos
          pequenoTitulo={"Quem sou"}
          titulo={"Giovane Goulart"}
          paragrafo={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit minima quis quia, ullam dolorum eius aperiam quaerat laudantium aliquid ratione saepe, facere tempora dolores ea non maxime autem debitis officiis. Delectus, sapiente quibusdam! Aliquid, voluptate tempore! Accusamus dolorem porro facere impedit quia enim at ullam alias qui magni suscipit, dicta, minus, voluptatem in temporibus eaque placeat corporis aperiam. Commodi, rem.`}
        />
      </section>

      <Footer />
    </>
  );
}

export default App;
