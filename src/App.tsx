import '../src/css/App.css'
import Filme from "./Filme"
import Filtro from "./Filtro"
import NavBar from "./NavBar"
import Footer from './Footer'
import EXIBICAO, { FilmesTuplaType } from "./exibicoes"

interface ListaFilmes {filmes: Array<FilmesTuplaType> };

export default function App() {
  return (
    <div className='app'>
      <header>
      <NavBar></NavBar>
    </header>
      {EXIBICAO.map((exibicao) => (
        <Filtro
          tipo={exibicao[0]}
        >
          <ListaFilmesProps filmes={exibicao[1]} />
        </Filtro>
      ))}
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
}

function ListaFilmesProps({filmes}:ListaFilmes) {
  return (
    <>
      {filmes.map((filme) => (
        <Filme
          titulo={filme[0]}
          descricao={filme[1]}
          duracao={filme[2]}
          classificacao={filme[3]}
          genero={filme[4]}
          imagem={filme[5]}
        />
      ))}
    </>
  );
}