import { ReactNode } from "react"

interface ExibicaoProps {
    tipo?: string;
    children: ReactNode;
} 

export default function Filtro(filtro: ExibicaoProps){
    return (
        <>
            <div className="filtro">{filtro.children}</div>
        </>
    )
}