import "./styles/style.scss";
import pokemonArray from "./data/pokemon";

console.log(pokemonArray)

const cardContainer = document.querySelector<HTMLElement>(".card-container");

if (!cardContainer){
    throw new Error ("Issue with the selector of our container")
}

const displayPokemon = (pokemon) => {
    const card = document.createElement("div");
    card.classList.add("pokemon-card");

    card.innerHTML = `
    <p>${pokemon.id}</p>
    <p>${pokemon.name}</p>
    <p> ${pokemon.types.join(",")}</p>
    <img src="${pokemon.sprite}" alt="${pokemon.name}">
    `;

    cardContainer.appendChild(card);
}

pokemonArray.forEach(displayPokemon)