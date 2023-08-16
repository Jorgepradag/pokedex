const allCharacters = document.querySelector("#allCharacters");
let url = "https://rickandmortyapi.com/api/character/";



for(let i = 0; i <= 827; i++){
  fetch(url + i)
  .then((response) => response.json())
  .then(data => mostrarCharacters(data))
}


function primeraLetra(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

document.addEventListener("DOMContentLoaded", allCharacters);


const input = document.getElementById("characterName");

input.addEventListener("focus", () => {
  input.select();
})

input.addEventListener("input", function() {
  let inputValue = input.value;
  input.value = primeraLetra(inputValue);
});

input.addEventListener("keydown", (event) => {
  if (event.key === "Enter") { 
    searchCharacter2();
  }
});

function mostrarCharacters(data) {
  const div = document.createElement("div");
  div.classList.add("character");
  div.innerHTML = ` <div class="character">
  <div class="card">
      <div class="image">
      <figure class="image is-4by3">
      <img src="${data.image}" alt="${data.name}" id="image">
    </figure>
    </div>
    <div class="card-content">
      <div class="nombre-contenedor">
        <p class="subtitle is-6"><b>ID: </>${data.id}</p>
        <h2 class="title is-4"><b>Name: </>${data.name}</h2>
      </div>
      <div class="personaje-tipos">
        <p class="status"><b>Status: </>${data.status}</p>
        <p class="gender"><b>Gender: </>${data.gender}</p>
      </div>
    </div>
  </div>
</div>
`;
document.querySelector("#listaPersonajes").append(div)

}




const searchCharacter2 = async () => {
let character = document.querySelector("#characterName").value
const listas = await fetch(`${url}${character}`)


const infoCharacter = await listas.json()

console.log(infoCharacter);
document.querySelector("#listaPersonajes").innerHTML = "";

mostrarCharacters(infoCharacter);

 
}


 

let buttonSearch = document.getElementById("search")
buttonSearch.addEventListener("click", searchCharacter2)

