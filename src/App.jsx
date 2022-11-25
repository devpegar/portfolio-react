import NavBar from "./components/NavBar";
import About from "./components/About";
import Proyectos from "./components/Proyectos";
import Skills from "./components/Skills";
import Contacto from "./components/Contacto";
import Separador from "./tools/Separador";
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
    </div>
  );
}
export default App;
