import { ReactNode } from "react";
import "../src/css/Filtro.css";

interface PropsExibicao {
  tipo?: string;
  children: ReactNode;
}

export default function Filtro(filtro: PropsExibicao) {
  return (
    <>
      <div className="cabecalho-genero">Gênero: {filtro.tipo}</div>
      <div className="filtro">{filtro.children}</div>
    </>
  );
}
