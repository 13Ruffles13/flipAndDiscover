import React from "react";
import { useAxios } from "./hooks";
import PokemonSelect from "./PokemonSelect";
import PokemonCard from "./PokemonCard";
import "./PokeDex.css";

/**
 * Component that renders a list of Pokemon cards.
 * It uses the useAxios hook to fetch and manage the Pokemon data.
 */
function PokeDex() {
  const [pokemon, addPokemon] = useAxios("https://pokeapi.co/api/v2/pokemon/");

  /**
   * Function to handle adding a new Pokemon.
   * It calls the addPokemon function from useAxios to fetch a new Pokemon by name.
   */
  const handleAddPokemon = async (name) => {
    await addPokemon(name);
  };

  return (
    <div className="PokeDex">
      <div className="PokeDex-buttons">
        <h3>Please select your Pokemon:</h3>
        <PokemonSelect add={handleAddPokemon} />
      </div>
      <div className="PokeDex-card-area">
        {pokemon.map((cardData) => (
          <PokemonCard
            key={cardData.id}
            front={cardData.sprites.front_default || ""}
            back={cardData.sprites.back_default || ""}
            name={cardData.name}
            stats={cardData.stats.map((stat) => ({
              value: stat.base_stat,
              name: stat.stat.name,
            }))}
          />
        ))}
      </div>
    </div>
  );
}

export default PokeDex;
