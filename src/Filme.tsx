import './Filme.css'

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
            <img className="imagem" src={filme.imagem} alt={filme.titulo}></img>
            <div className="titulo">{filme.titulo}</div>
        </div>
        </>
    )
}