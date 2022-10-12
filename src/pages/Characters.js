import React from 'react'
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import OffcanvasExample from '../components/Navbar'
import useCharacters from '../hooks/useCharacters'

const Characters = () => {

    const{characters,page,prev,next}=useCharacters();

  return (
    <div>
        <OffcanvasExample/>
        <div className="characters"> 
        {characters.map(poke=>(
            <div className="pokeC">
                <center>
                <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${poke.url.split('/')[6]}.png`}></img>
                <p>{poke.name}</p>
                <Link className='btn btn-outline-danger'  to={`/Characters/${poke.url.split("/")[6]}`}>Ver detalle</Link>
                </center>
            </div>
        ))}
        </div>
        <div className="pagination">
        <button className="btn btn-danger" onClick={prev} >prev</button>
        <p>{page}</p>
        <button className="btn btn-danger" onClick={next}>next</button>
        </div>
        <Footer/>
    </div>
  )
}

export default Characters