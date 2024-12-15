import "../src/css/App.css";
import NavBar from "./NavBar";
import Filtro from "./Filtro";
import Footer from "./Footer";
import ListaDeFilmes from "./ListaDeFilmes";

export default function App() {
  return (
    <div className="app">
      <header>
        <NavBar></NavBar>
      </header>

      <Filtro>
        <ListaDeFilmes></ListaDeFilmes>
      </Filtro>

      <Footer></Footer>
    </div>
  );
}
