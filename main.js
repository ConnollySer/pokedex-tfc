const URL = "https://pokeapi.co/api/v2/pokemon/";

// Esta variable es el input
const searchInput = document.getElementById("search");

// Esta constante es el div (pokedex)
const pokedexContainer = document.getElementById("pokedex");

// Función async/await para buscar un Pokémon
async function searchPokemon() {
    let pokemonBuscado = searchInput.value.toLowerCase();

    try {
        // Realiza la petición a la API
        let response = await fetch(URL + pokemonBuscado);

        // Verifica si la respuesta es válida
        if (!response.ok) {
            throw new Error(`No se encontró el Pokémon: ${pokemonBuscado}`);
        }

        // Convierte la respuesta a JSON
        let data = await response.json();

        // Actualiza el contenido del contenedor con los datos del Pokémon
        pokedexContainer.innerHTML = `
            <h2>${data.name.toUpperCase()}</h2>
            <img src="${data.sprites.front_default}" alt="${data.name}">
            <p>Número: ${data.id}</p>
            <p>Altura: ${data.height / 10} m</p>
            <p>Peso: ${data.weight / 10} kg</p>
        `;
    } catch (error) {
        console.error(error);
        pokedexContainer.innerHTML = `
            <p style="color: red;">Error: ${error.message}</p>
        `;
    }
}

// Agrega un evento al botón para buscar el Pokémon
document.getElementById("boton").addEventListener("click", searchPokemon);
