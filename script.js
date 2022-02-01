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
    clon.querySelector(".image").addEventListener("click", () => showDetails(actor));
    container.appendChild(clon);
  });
}

document.querySelector("#popup button").addEventListener("click", closePopup);

function closePopup() {
  document.querySelector("#popup").style.display = "none";
}

function showDetails(actorDetails) {
  console.log("popup open");

  const popup = document.querySelector("#popup");
  popup.style.display = "block";
  popup.querySelector(".fullname").textContent = actorDetails.fullname;
  popup.querySelector(".movie").textContent = actorDetails.movie;
}
