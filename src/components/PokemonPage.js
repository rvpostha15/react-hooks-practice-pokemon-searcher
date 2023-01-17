import React, {useState, useEffect, useDebugValue} from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";



function PokemonPage() {

  const [searchText, setSearchText]=useState('')

  const [pokemon, setPokemon]=useState([])



  useEffect(() => (
    fetch('http://localhost:3001/pokemon')
    .then(res=>res.json())
    .then((pokemonList)=>setPokemon(pokemonList))
    .catch(error => console.log(error))
  ),[])

 
  const filteredPoke = pokemon.filter(poke => (
    poke.name.includes (searchText) 
  ))

  const updatePokemon = (newPoke) => {
    setPokemon([...pokemon, newPoke])
  }

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm
        poke = {pokemon} 
        updatePokemon={updatePokemon}
      />
      <br />
      <Search
        setSearchText = {setSearchText} 
        text={searchText}
      />
      <br />
      <PokemonCollection 
        pokemon={filteredPoke}
      />
    </Container>
  );
}

export default PokemonPage;
