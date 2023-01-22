document.querySelector("#search").addEventListener("click", traerPokemon);

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function lowerCaseName(string) {
    return string.toLowerCase();
}

function traerPokemon(e) {
    const name = document.querySelector("#pokemonName").value;
    const pokemonName = lowerCaseName(name);

    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
        .then((response) => response.json())
        .then((data) => {
            document.querySelector(".pokemonBox").innerHTML = `
      <div>
        <img
          src="${data.sprites.other["official-artwork"].front_default}"
          alt="Pokemon name"
        />
      </div>
      <div class="pokemonInfos">
        <h1>${capitalizeFirstLetter(data.name)}</h3>
        <p>Peso: ${data.weight}</p>
        <p>Altura: ${data.height}</p>
        <p>Experiencia: ${data.base_experience}</p>
        <p>Habilidades: ${data.abilities[0].ability.name}</p>
        <p>Tipo: ${data.types[0].type.name}</p>
      </div>`;
        })
        .catch((err) => {
            document.querySelector(".pokemonBox").innerHTML = `
      <h4>Pokemon no encontrado 😞</h4>
      `;
            console.log("no encontrado", err);
        });

    e.preventDefault();
}



