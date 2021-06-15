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
    <h3>${photographers[i].name}</h3>
    <p>${photographers[i].city}, ${photographers[i].country}</p>
    <p>${photographers[i].tagline}</p>
    <p>${photographers[i].price}/jour</p>
    <p>${photographers[i].tags}</p>
    `;
    mainGallery.appendChild(div);
  }
}
