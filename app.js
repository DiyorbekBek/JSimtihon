const API = "https://countries-api-v7sn.onrender.com/countries?limit=200";

const boDy = document.querySelector("body");
const darkBtn = document.getElementById("dark-mode");
const lightBtn = document.getElementById("light-mode");
const modelLocal = localStorage.getItem("mode");

const cardTitle = document.getElementById("card-title");
const mainCard = document.getElementById("main-card");
// ----------------------------------------

if (modelLocal) {
  boDy.classList.add("dark-mode-color");
  darkBtn.classList.toggle("hidden");
  lightBtnBtn.classList.toggle("hidden");
}

// ---------------------------------------
const toggleModeBtn = () => {
  darkBtn.classList.toggle("hidden");
  lightBtn.classList.toggle("hidden");
  boDy.classList.toggle("dark-mode-color");
};

darkBtn.addEventListener("click", () => {
  toggleModeBtn();
  localStorage.setItem("mode", dark - mode - color);
});

lightBtn.addEventListener("click", () => {
  localStorage.setItem("mode", "");
  toggleModeBtn();
});

function uptadeUI(todos) {
  mainCard.innerHTML = "";
  todos.data.forEach((todo) => {
    console.log(todo);
    mainCard.innerHTML += `<div class="card" id="card">
    <img
      src="${todo.flags.png}"
      alt=""
      class="card-img"
      id="card-img"
      width="265"
      height="160"
    />
    <div class="card-title">
      <h3 class="card-header-title" id="card-title">${todo.name.common}</h3>
      <span class="card-population">
        Population: ${todo.population}
      </span>
      <span class="card-population">
        Region:
        <a class="p-common" id="region" href="">${todo.region}</a>
      </span>
      <span class="card-population">
        Capital:
        <a class="p-common" id="capital" href="">${todo.capital}</a>
      </span>
    </div>
  </div>`;
  });
}

const getData = (url) => {
  fetch(url)
    .then((data) => {
      return data.json();
    })
    .then((data) => {
      uptadeUI(data);
    })
    .catch((err) => {
      console.log(err);
    });
};

getData(API);
