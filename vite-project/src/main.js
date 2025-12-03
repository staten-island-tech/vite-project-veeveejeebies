import './style.css'
const movies = [
  { name: "It", category: "Horror", image: "img/It.jpg", alt: "It" },
  {
    name: "Five Night at Freddy's",
    category: "Horror",
    image: "img/fnaf2.jpg",
    alt: "Five Night at Freddy's",
  },
  {
    name: "Annabelle",
    category: "Horror",
    image: "img/annabelle.jpg",
    alt: "Annabelle",
  },
  {
    name: "Weapons",
    category: "Horror",
    image: "img/weapons.webp",
    alt: "Weapons",
  },
  {
    name: "Raya and the Last Dragon",
    category: "Disney",
    image: "img/raya.jpg",
    alt: "Raya and the Last Dragon",
  },
  {
    name: "Zootopia",
    category: "Disney",
    image: "img/zootopia.jpg",
    alt: "Zootopia",
  },
  {
    name: "Zootopia 2",
    category: "Disney",
    image: "img/zoo2.jpg",
    alt: "Encanto",
  },
  {
    name: "Wreck It Ralph",
    category: "Disney",
    image: "img/ralph.jpg",
    alt: "Wreck It Ralph",
  },
  {
    name: "Inside Out",
    category: "Pixar",
    image: "img/inside.jpg",
    alt: "Inside Out",
  },
  {
    name: "Inside Out 2",
    category: "Pixar",
    image: "img/inside2.webp",
    alt: "Inside Out 2",
  },
  {
    name: "Turning Red",
    category: "Pixar",
    image: "img/turning.jpg",
    alt: "Turning Red",
  },
  { name: "Luca", category: "Pixar", image: "img/luca.jpg", alt: "Luca" },
  {
    name: "Spiderman: Homecoming",
    category: "Superhero",
    image: "img/hoco.jpg",
    alt: "Spiderman: Homecoming",
  },
  {
    name: "Iron Man",
    category: "Superhero",
    image: "img/ironman.jpg",
    alt: "Iron Man",
  },
  {
    name: "Avengers: Infinity War",
    category: "Superhero",
    image: "img/infinity.webp",
    alt: "Avengers: Infinity War",
  },
  {
    name: "Avengers: Endgame",
    category: "Superhero",
    image: "img/endgame.webp",
    alt: "Avengers: Endgame",
  },
];

const container = document.querySelector(".container");

function displayItems(list) {
  container.innerHTML = "";
  list.forEach((movie) => {
    container.insertAdjacentHTML(
      "beforeend",
      `
  <div class="item">
      <h1 class="title">${movie.name}</h1>

      <img src="${movie.image}" alt="${movie.alt}" class="poster">

      <div class="buttons">
        <button class="addMovie">Add to Watchlist</button>
        <button class="addMovie">Already Watched</button>
      </div>
  </div>
  `
    );
  });
}

const addWatch = document.querySelector("addMovie");
displayItems(movies);
function filter(category) {
  const filtered = movies.filter((movie) => movie.category === category);
  displayItems(filtered);
}
function showAll() {
  displayItems(movies);
}
