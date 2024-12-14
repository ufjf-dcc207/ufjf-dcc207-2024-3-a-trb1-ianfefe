import React from 'react'
import './App.css'
import Filme, { FilmeProps } from "./Filme"
import NavBar from './NavBar'
import Footer from './Footer'

export default function App() {

  return (
    <>
    <NavBar></NavBar>
      <Filme titulo='a' descricao='b' duracao={10} classificacao={18}  genero={["comedia", "terror"]} imagem='https://a-static.mlcdn.com.br/1500x1500/poster-cartaz-moana-2-a-pop-arte-poster/poparteskins2/pos-03867-60x90cm/ed698c1aed8d6bee90cb3fb6fabd53ad.jpeg'>
      </Filme>
      <Footer></Footer>


      
    </>
  )
}