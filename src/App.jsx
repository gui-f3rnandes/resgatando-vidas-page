import "./App.css"; //Importação da folha de estilos globais

//Importação dos componentes
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import BasicInfos from "./components/basicInfos/BasicInfos";
import About from "./components/About";
import Welcome from "./components/Welcome";
import TypeService from "./components/TypeService";
import Location from "./components/Location";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <Navbar />

      <Welcome />
  
      <About />

      <TypeService />

      <Location />

      <Contact />

      <Footer />
    </>
  );
}

export default App;
