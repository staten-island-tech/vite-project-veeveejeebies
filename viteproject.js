import "./style.css";

const movies = [
    { 
        name: "It",
        category: "Horror",
        image: "img/it.jpg",
        alt: "It",
    },
    { 
        name: "Five Night at Freddy's",
        category: "Horror",
        image: "img/fnaf.jpg",
        alt: "Five Night at Freddy's",
    },
    { 
        name: "Annabelle",
        category: "Horror",
        image: "img/Annabelle.jpg",
        alt: "Annabelle",
    },
    { 
        name: "Weapons",
        category: "Horror",
        image: "img/weapons.jpg",
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
        image: "img/zotopia.jpg",
        alt: "Zootopia",
    },
    { 
        name: "Encanto",
        category: "Disney",
        image: "img/encanto.jpg",
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
        image: "img/inside 1.webp",
        alt: "Inside Out",
    },
    { 
        name: "Inside Out 2", 
        category: "Pixar",
        image: "img/inside 2.jpg",
        alt: "Inside Out 2",
    },
    { 
        name: "Turning Red",
        category: "Pixar",  
        image: "img/Turning Red.jpg",
        alt: "Turning Red",
    },
    { 
        name: "Luca",
        category: "Pixar",
        image: "img/luca.jpg",
        alt: "Luca",
    },
    { 
        name: "Spiderman: Homecoming",
        category: "Superhero",
        image: "img/hocop.jpg",
        alt: "Spiderman: Homecoming",
    },
    { 
        name: "Iron Man",
        category: "Superhero",
        image: "img/man.jpg",
        alt: "Iron Man",
    },
    { 
        name: "Avengers: Infinity War",
        category: "Superhero",
        image: "img/infinity.jpg",
        alt: "Avengers: Infinity War",
    },
    { 
        name: "Avengers: Endgame",
        category: "Superhero",
        image: "img/endgame.jpg",
        alt: "Avengers: Endgame",
    },
];

 const container = document.querySelector(".container");

    function displayItems(list) {
  container.innerHTML = ""; 
  list.forEach((movie) => {
    container.insertAdjacentHTML("beforeend", `
<div class="body">
 <img src="${movie.image}">
<h1>${movie.name}</h1>
<h2>$${movie.price}</h2>
<button class="addCart">To Read</button>
<button class="addCart">Already Read</button>
</div>
`);
  });
  addToCart();
}

displayItems(movies);

function filter(category) {
  const filtered = movies.filter(item => item.category === category);
  displayItems(filtered);
}

function showAll() {
  displayItems(movies);
}