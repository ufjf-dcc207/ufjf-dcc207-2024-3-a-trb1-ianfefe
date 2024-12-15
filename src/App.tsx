import "../src/css/App.css";
import NavBar from "./NavBar";
import Footer from "./Footer";
import ListaDeFilmes from "./ListaDeFilmes";

export default function App() {
  return (
    <div className="app">
      <header>
        <NavBar></NavBar>
      </header>
      
      <ListaDeFilmes></ListaDeFilmes>

      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
}
