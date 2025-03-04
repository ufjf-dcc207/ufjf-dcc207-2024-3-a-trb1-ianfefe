import { useReducer, useEffect, useRef } from "react";
import Filme, { FilmeProps } from "./Filme";
import axios from "axios";

interface EstadoFilmes {
  carregando: boolean;
  filmes: FilmeProps[];
  erro: string | null;
}

const estadoInicial: EstadoFilmes = {
  carregando: false,
  filmes: [],
  erro: null,
};

type AcaoFilme =
  | { type: "SOLICITACAO" }
  | { type: "SOLICITACAO_SUCESSO"; payload: FilmeProps[] }
  | { type: "SOLICITACAO_ERRO"; payload: string };

const filmeReducer = (estado: EstadoFilmes, acao: AcaoFilme): EstadoFilmes => {
  switch (acao.type) {
    case "SOLICITACAO":
      return { ...estado, carregando: true, erro: null };
    case "SOLICITACAO_SUCESSO":
      return { ...estado, carregando: false, filmes: acao.payload };
    case "SOLICITACAO_ERRO":
      return { ...estado, carregando: false, erro: acao.payload };
    default:
      return estado;
  }
};

export default function ListaDeFilmes() {
  const [estado, despachar] = useReducer(filmeReducer, estadoInicial);
  const campoBusca = useRef<HTMLInputElement>(null);

  useEffect(() => {
    buscarFilmes();
  }, []);

  const buscarFilmes = () => {
    despachar({ type: "SOLICITACAO" });

    axios({
      method: "get",
      url: "https://api.themoviedb.org/3/discover/movie",
      params: {
        api_key: "e57452851ab15819803da405a3a5578e",
        language: "pt-br",
      },
    })
      .then((resposta) => {
        despachar({ type: "SOLICITACAO_SUCESSO", payload: resposta.data.results });
      })
      .catch((erro) => {
        despachar({ type: "SOLICITACAO_ERRO", payload: erro.message });
      });
  };

  const handleBuscar = () => {
    const consulta = campoBusca.current?.value;
    if (consulta) {
      axios
        .get("https://api.themoviedb.org/3/search/movie", {
          params: {
            api_key: "e57452851ab15819803da405a3a5578e",
            language: "pt-br",
            query: consulta,
          },
        })
        .then((resposta) => {
          despachar({ type: "SOLICITACAO_SUCESSO", payload: resposta.data.results });
        })
        .catch((erro) => {
          despachar({ type: "SOLICITACAO_ERRO", payload: erro.message });
        });
    }
  };

  if (estado.carregando) {
    return <p>Carregando...</p>;
  }

  if (estado.erro) {
    return <p>{estado.erro}</p>;
  }

  return (
    <div>
      <input
        ref={campoBusca}
        type="text"
        placeholder="Pesquisar filmes..."
        onChange={handleBuscar}
      />
      {estado.filmes.map((filme) => (
        <Filme
          key={filme.title}
          genres={filme.genres}
          title={filme.title}
          poster_path={`https://image.tmdb.org/t/p/original${filme.poster_path}`}
        />
      ))}
    </div>
  );
}
