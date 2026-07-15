import { useEffect, useState } from "react"; 
import axios from "axios"; 

    export function Consume() { 
    const [pokemons, setPokemons] = useState([]); 
    const [pokeType, setPokeType] = useState(""); 
    const [refresh, setRefresh] = useState(1); 
    
    useEffect(() => { 
    if (!pokeType) return; 
    axios 
    .get(`https://pokeapi.co/api/v2/type/${pokeType.toLowerCase()}`) 
    .then((response) => { 
    if (response.data && response.data.pokemon) { 

    const allPokemon = response.data.pokemon.map((p) => p.pokemon.name); 
    const fiveonly = allPokemon.slice(0, 5); 

    setPokemons(fiveonly); 

    } else { 
    setPokemons(["No Pokemon found for this type!"]); 
    }}) 

    .catch((error) => { 

    console.error(error); 

    setPokemons(["Start typing the correct types to display pokemon!"]); 

    }); 
    }, [refresh, pokeType]); 

    function handleRefresh() { 
    setRefresh((prev) => prev + 1); 
    } 

    return ( 
    <div> 
    <h1>Pokemon of type: {pokeType}</h1> 
    <ul> 
    {pokemons.map((p, i) => ( 
    <li key={i}>{p}</li> 
    ))} 
    </ul> 
    <h3>
        Enter Pokemon Type:{" "} 
        <input 
        type="text" 
        placeholder="fire, water, grass, etc." 
        onChange={(e) => setPokeType(e.target.value)} 
        /> 
    </h3> 
    <button onClick={handleRefresh}>Fetch Pokemon</button> 
    </div> 
    ); 
} 

export default Consume; 