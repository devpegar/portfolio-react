import NavBar from "./components/NavBar";
import About from "./components/About";
import Proyectos from "./components/Proyectos";
import Skills from "./components/Skills";
import Contacto from "./components/Contacto";
import Separador from "./tools/Separador";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="bg-normal">
      <NavBar />
      <About />
      <Separador />
      <Proyectos />
      <Separador />
      <Skills />
      <Separador />
      <Contacto />
      <Separador />
      <Footer />
    </div>
  );
}
export default App;
