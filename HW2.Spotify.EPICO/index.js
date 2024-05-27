/* alt + 096 fa i backseat --> `` */

const url = "https://striveschool-api.herokuapp.com/api/deezer/search?q=";

async function fetchQuery(nomeArtista) {
  const artista = await fetch(`${url}${nomeArtista}`);
  const { data: songs } = await artista.json();
  return songs;
}
/* console.log(fetchQuery("eminem")); */

async function albumEminem() {
  const eminem = await fetchQuery("eminem");
  /* console.log(eminem); */
  let div = document.getElementById("eminemSection");
  eminem.slice(0, 4).forEach((e) => {
    /* console.log(e); */
    div.innerHTML += `<div><img src="${e.album.cover_xl}" alt= "${e.album.title}">
    </div>`;
  });
}
async function albumMetallica() {
  const eminem = await fetchQuery("metallica");
  /* console.log(eminem); */
  let div = document.getElementById("metallicaSection");
  eminem.slice(0, 4).forEach((e) => {
    /*   console.log(e); */
    /* console.log(e.album); */
    div.innerHTML += `<div><img src="${e.album.cover_xl}" alt= "${e.album.title}">
      </div>`;
  });
}
async function albumQueen() {
  const eminem = await fetchQuery("queen");
  /* console.log(eminem); */
  let div = document.getElementById("queenSection");
  eminem.slice(0, 4).forEach((e) => {
    /* console.log(e); */
    div.innerHTML += `<div><img src="${e.album.cover_xl}" alt= "${e.album.title}">
      </div>`;
  });
}

async function titoli() {
  let arrayTitoli = [];
  const eminem = await fetchQuery("eminem");
  const metallica = await fetchQuery("metallica");
  const queen = await fetchQuery("queen");
  eminem.slice(0, 4).forEach((e) => {
    arrayTitoli.push(e.album.title);
  });

  metallica.slice(0, 4).forEach((e) => {
    arrayTitoli.push(e.album.title);
  });

  queen.slice(0, 4).forEach((e) => {
    arrayTitoli.push(e.album.title);
  });
  let ul = document.getElementById("lista");
  arrayTitoli.forEach((e) => {
    ul.innerHTML += `<li>${e}</li>`;
  });
}

window.onload = async () => {
  await albumEminem();
  await albumMetallica();
  await albumQueen();
  await titoli();
};
