export interface FilmeProps {
    titulo: string;
    descricao: string;
    duracao: number;
    classificacao: number;
    genero: string[];
    imagem: string;
}

export default function Filme(filme: FilmeProps) {
    return (
        <>
        <div className="filme">
            <div className="titulo">{filme.titulo}</div>
            <div className="descricao">{filme.descricao}</div>
            <div className="duracao">{filme.duracao}</div>
            <div className="classificacao">{filme.classificacao}</div>
            <img className="imagem" src={filme.imagem} alt={filme.titulo}></img>
            <div className="genero">{filme.genero}</div>
        </div>
        </>
    )
}