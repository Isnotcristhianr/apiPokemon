//mostrar todos lo pokemon de la api
function traerPokemons() {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
        .then((response) => response.json())
        .then((data) => {
            let pokemons = data.results;
            let pokemonsList = document.querySelector("#pokemonsList");
            pokemons.forEach((pokemon) => {
                let pokemonName = pokemon.name;
                let pokemonUrl = pokemon.url;
                pokemonsList.innerHTML += `
        <li><a href="${pokemonUrl}">${pokemonName}</a></li>
      `;
            });
        })
        .catch((err) => {
            console.log("Pokemon not found", err);
        });
}
