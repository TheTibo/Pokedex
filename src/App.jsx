import { useState } from 'react';
import './App.css'
import PokemonCard from './components/PokemonCard'


function App() {
  const [PokemondIndex, setPokemonIndex] = useState(0);
const handleClick = () => {
 setPokemonIndex(PokemondIndex + 1)
}

const BeforeClick = () => {
  setPokemonIndex(PokemondIndex - 1 )
}

  return (
    
    <div>
      <PokemonCard pokemon = {pokemonList[PokemondIndex]} />
      {PokemondIndex > 0 ? <button onClick={BeforeClick}>Précédent</button> : null}
      {PokemondIndex < pokemonList.length -1 ? <button onClick={handleClick}>Suivant</button> : null}
    </div>
    
  )

  
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
