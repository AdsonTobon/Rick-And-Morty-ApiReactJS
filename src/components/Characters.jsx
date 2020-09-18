import React, { useEffect, useState } from 'react'

const Characters = () => {

    const [Characters, setCharacters] = useState([])


    useEffect(() => {
        CallCharacters();
       
    }, [])

    const CallCharacters = async ()=>{
        let personajes = await fetch('https://rickandmortyapi.com/api/character')
        let respuesta = await personajes.json()
        setCharacters(respuesta)
        console.log(respuesta)
    }


    return (
        <div>
            <div>
                {Characters.results?.map((data,i)=>{
                    return <div key={i}>
                        <div>{data.name}</div>
                <div><img src={data.image} alt={data.name} /></div>
                <div>{data.species}</div>
                    </div>
                })}
            </div>
        </div>
    )
}

export default Characters;
