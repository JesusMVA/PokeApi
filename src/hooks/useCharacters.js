import { useEffect, useState } from "react"

const useCharacters = () => {

    const[characters, setCharacters]=useState([]);
    const[page, setPage]=useState(0)

    function prev(){
        if(page <=0){
            page(0)
        }else{
            setPage(page -1)
        }
    }

    function next(){
        if(page >=57){
            page(57)
        }else{
            setPage(page +1)
        }
    }

    useEffect(()=>{
        async function getAllCharacters(){
            const peticion = await fetch (`https://pokeapi.co/api/v2/pokemon/?limit=21&offset=${page * 20} `)
            const datos = await peticion.json()
            setCharacters(datos.results)
        }
        getAllCharacters()
    },[page])

  return {
    characters,
    page,
    prev,
    next
  }
}

export default useCharacters