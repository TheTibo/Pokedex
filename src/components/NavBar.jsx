
function NavBar ({PokemondIndex,setPokemonIndex, pokemonList} ){ 

  
const handleClick = () => {
 setPokemonIndex(PokemondIndex + 1)
}

const BeforeClick = () => {
  setPokemonIndex(PokemondIndex - 1 )
}
return (
<div>
    {PokemondIndex > 0 ? <button onClick={BeforeClick}>Précédent</button> : null}
    {PokemondIndex < pokemonList.length -1 ? <button onClick={handleClick}>Suivant</button> : null}
</div>)
}


   export default NavBar