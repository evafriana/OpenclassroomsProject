fetch("./assets/data/fisheye_data.json")
  .then((response) => {
    return response.json();
  })
  .then((response) => {
    appendData(response);
  })
  .catch((err) => {
    console.log("error: " + err);
  });

function tags(tags) {
  return `${tags
    .map(function (tag) {
      return `<label>#${tag}</label>`;
    })
    .join("")}`;
}

function appendData({ photographers }) {
  const mainGallery = document.getElementById("photographers");
  for (let i = 0; i < photographers.length; i++) {
    const div = document.createElement("div");
    div.innerHTML = `
    <a><img
      id="photographers__profil"
      src="assets/images/photographers/${photographers[i].portrait}"
      alt="photo ${photographers[i].name}"
    /></a>
    <div id="photographers__info">
      <h2>${photographers[i].name}</h2>
      <h3>${photographers[i].city}, ${photographers[i].country}</h3>
      <p>${photographers[i].tagline}</p>
      <p id="photographers__price">${photographers[i].price}/jour</p> 
      ${tags(photographers[i].tags)}
    </div>
    `;
    mainGallery.appendChild(div);
  }
}
