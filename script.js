window.addEventListener("DOMContentLoaded", start);

function start() {
  console.log("start script");

  async function getData() {
    const responsActors = await fetch("actors.json");
    actors = await responsActors.json();

    console.log(actors);
    viewActorsList();
  }

  getData();
}

function viewActorsList() {
  const container = document.querySelector("#actor_li");
  const temp = document.querySelector("template");

  actors.forEach((actor) => {
    let clon = temp.cloneNode(true).content;
    // document.querySelector(".image").innerHTML += `<img src="${movie.svg}" alt="movie icon">`;
    clon.querySelector(".fullname").textContent = actor.fullname;
    clon.querySelector(".movie").textContent = actor.movie;
    container.appendChild(clon);
  });
}
