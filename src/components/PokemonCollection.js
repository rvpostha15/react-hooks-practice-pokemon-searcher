import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({pokemon}) {

  const renderPokemon = pokemon.map((poke, index) => (
    <PokemonCard 
      poke={poke}
      key={index}
    />
  ))

  return (
    <>
    <h1>Hello From Pokemon Collection</h1>
      <Card.Group itemsPerRow={6}>
        {renderPokemon}
      </Card.Group>
    </>
  );
}

export default PokemonCollection;
