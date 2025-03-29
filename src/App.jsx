import "./App.css"; //Importação da folha de estilos globais

//Importação dos componentes
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import BasicInfos from "./components/basicInfos/BasicInfos";

function App() {
  return (
    <>
      <Navbar />
      <BasicInfos
        pequenoTitulo={"Seja bem-vindo"}
        titulo={"Resgatando Vidas"}
        paragrafo={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis iure alias placeat amet nam totam magnam similique cupiditate maiores, quis repudiandae laborum vitae pariatur minus veniam esse rerum. Accusantium, fuga!`}
      />
      <Footer />
    </>
  );
}

export default App;
