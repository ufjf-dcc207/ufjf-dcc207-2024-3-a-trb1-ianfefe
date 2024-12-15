import '../src/css/Filme.css'

export interface FilmeProps {
    key: string;
    title: string;
    genres: number[];
    poster_path: string;
}

export default function Filme(filme: FilmeProps) {
    return (
        <>
        <div className="filme">
            <img className="imagem" src={filme.poster_path} alt={"Capa de " + filme.title}></img>
            <div className="titulo">{filme.title}</div>
        </div>
        </>
    )
}