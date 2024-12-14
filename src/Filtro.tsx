import './Filtro.css'

import { ReactNode } from "react"

interface ExibicaoProps {
    tipo?: string;
    children: ReactNode;
} 

export default function Filtro(filtro: ExibicaoProps){
    return (
        <>
        <div className='cabecalho-genero'>Gênero:{filtro.tipo}</div>
        <div className="filtro">{filtro.children}</div>
        </>
    )
}