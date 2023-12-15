import { useState } from 'react';
import './App.css'
import PokemonCard from './components/PokemonCard'
import NavBar from './components/NavBar';


 function App() {
    const [selectedPokemon, setSelectedPokemon] = useState(pokemonList[0]);
  
    const handlePokemonSelection = (pokemon) => {
      setSelectedPokemon(pokemon);
    };

  return (
    <div>

      <PokemonCard pokemon={selectedPokemon} />
         <NavBar
        pokemonList={pokemonList}
        handlePokemonSelection={handlePokemonSelection}
      />
    </div>
  );
}
const pokemonList = [

{

    name: "bulbasaur",

    imgSrc:

      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",

  },

  {

    name: "charmander",

    imgSrc:

      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",

  },

  {

    name: "squirtle",

    imgSrc:

      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",

  },

  {

    name: "pikachu",

    imgSrc:

      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",

  },

  {

    name: "mew",

  },

];

export default App
