import "./styles/style.scss";
import pokemonArray from "./data/pokemon";

const cardContainer = document.querySelector<HTMLElement>(".card-container");

if (!cardContainer){
    throw new Error ("Issue with the selector of our container")
}

const displayPokemon = (pokemon : Pokemon) => {
    const card = document.createElement("div");
    card.classList.add("pokemon-card");

    card.innerHTML = `
    <img class="card__image" src="${pokemon.sprite}" alt="${pokemon.name}">
    <div class="card__content">
    <h2 style=text-transform:capitalize class="card__heading">${pokemon.name}</h2>
    <p class="card__text"> ${pokemon.name} is a ${pokemon.types.join(" & ")} type pokemon. </p>
    </div>
    `;

    cardContainer.appendChild(card);

    card.style.backgroundColor = "#ffb7b7";
}

pokemonArray.forEach(displayPokemon)