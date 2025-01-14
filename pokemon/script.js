const pokeTypeURL = 'https://pokeapi.co/api/v2/type/';
const pokedex = document.getElementById('pokedex');
const pokemonSearchInput = document.getElementById('pokemon-search-input');
const pokemonTypeFilter = document.querySelector('.type-filter');

let pokemonArray = [];
let uniqueTypes = new Set();

// Fetch Pokemon data
const fetchPokemon = async () => {
    try {
        const promises = [];
        for(let i = 1; i <= 151; i++) {
            const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
            promises.push(fetch(url).then(response => response.json()));
        }

        const allPokemon = await Promise.all(promises);
        pokemonArray = allPokemon.map(pokemon => ({
            frontImage: pokemon.sprites['front_default'],
            pokemon_id: pokemon.id,
            name: pokemon.name,
            type: pokemon.types[0].type.name,
            abilities: pokemon.abilities.map(ability => ability.ability.name).join(', ')
        }));

        createPokemonCards(pokemonArray);
        generateTypes();
    } catch (error) {
        console.error('Error fetching Pokemon:', error);
    }
};

// Search functionality
pokemonSearchInput.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const filteredPokemon = pokemonArray.filter(pokemon => 
        pokemon.name.toLowerCase().includes(searchTerm)
    );
    clearPokedex();
    createPokemonCards(filteredPokemon);
});

// Type filter functionality
pokemonTypeFilter.addEventListener('change', (e) => {
    const selectedType = e.target.value.toLowerCase();
    const filteredPokemon = selectedType 
        ? pokemonArray.filter(pokemon => pokemon.type === selectedType)
        : pokemonArray;
    clearPokedex();
    createPokemonCards(filteredPokemon);
});

function clearPokedex() {
    pokedex.innerHTML = '';
}

function createPokemonCards(pokemons) {
    pokemons.forEach(pokemon => {
        createPokemonCard(pokemon);
    });
}

function createPokemonCard(pokemon) {
    const flipCard = document.createElement("div");
    flipCard.classList.add("flip-card");
    flipCard.id = pokemon.name;

    const flipCardInner = document.createElement("div");
    flipCardInner.classList.add("flip-card-inner");
    flipCardInner.id = pokemon.type;

    // Front card
    const frontCard = document.createElement("div");
    frontCard.classList.add('front-pokemon-card');

    const frontImage = document.createElement('img');
    frontImage.src = pokemon.frontImage;
    frontImage.classList.add("front-pokemon-image");

    const frontPokeName = document.createElement('h2');
    frontPokeName.textContent = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);

    const frontPokeID = document.createElement('p');
    frontPokeID.textContent = `#${pokemon.pokemon_id}`;
    frontPokeID.classList.add("front-poke-id");

    const frontPokeType = document.createElement('p');
    frontPokeType.textContent = pokemon.type.toUpperCase();
    frontPokeType.classList.add("front-pokemon-type");

    frontCard.append(frontImage, frontPokeID, frontPokeName, frontPokeType);

    // Back card
    const backCard = document.createElement("div");
    backCard.classList.add('back-pokemon-card');

    const backPokeID = document.createElement('p');
    backPokeID.textContent = `#${pokemon.pokemon_id}`;
    backPokeID.classList.add("back-poke-id");

    const backPokeName = document.createElement('h2');
    backPokeName.textContent = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
    backPokeName.classList.add("back-pokemon-name");

    const backPokeAbilities = document.createElement("p");
    backPokeAbilities.innerHTML = `<strong>Abilities:</strong><br>${pokemon.abilities}`;
    backPokeAbilities.classList.add("back-pokemon-abilities");

    backCard.append(backPokeID, backPokeName, backPokeAbilities);
    
    flipCardInner.append(frontCard, backCard);
    flipCard.append(flipCardInner);
    pokedex.append(flipCard);

    uniqueTypes.add(pokemon.type);
}

function generateTypes() {
    uniqueTypes.forEach(type => {
        const typeOption = document.createElement('option');
        typeOption.textContent = type.charAt(0).toUpperCase() + type.slice(1);
        typeOption.value = type;
        pokemonTypeFilter.append(typeOption);
    });
}

// Initialize the app
fetchPokemon();