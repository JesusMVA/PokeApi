import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Footer from '../components/Footer'
import OffcanvasExample from '../components/Navbar'

const CharacterDetail = () => {

    const{url}=useParams()
    const[character, setCharacter]=useState([])

    useEffect(()=>{
        async function detail(){
            const data = await fetch (`https://pokeapi.co/api/v2/pokemon/${url}`)
            const detalle = await data.json()
            setCharacter(detalle)
        }
        detail()
    })

  return (
    <div>
        <OffcanvasExample/>
        <div className="pokeD">
            <div className="pokeDetail">
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${url}.png`}></img>
            <h1 className="text-danger">{character.name}</h1>
            <p>Peso: {character.weight} kl</p>
            <p>Altura {character.height} cm</p>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default CharacterDetail