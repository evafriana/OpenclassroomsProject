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

const tags = (tags) => {
  const labels = tags.map(
    (tag) =>
      `<a><span class="tags" aria-label="Tag" tabindex="0">#${tag}</span></a>`
  );
  return `${labels.join("")}`;
};

const appendData = ({ photographers }) => {
  const mainGallery = document.getElementById("photographers");
  for (let i = 0; i < photographers.length; i++) {
    const div = document.createElement("div");
    div.innerHTML = `
      <a tabindex="0"><img
        id="photographers__profil"
        src="assets/images/photographers/${photographers[i].portrait}"
        aria-label="${photographers[i].name}"
      />
      <h2>${photographers[i].name}</h2>
      </a>
      <h4>${photographers[i].city}, ${photographers[i].country}</h4>
      <p>${photographers[i].tagline}</p>
    
      <p id="photographers__price">${photographers[i].price}/jour</p> 
      ${tags(photographers[i].tags)}
    `;
    mainGallery.appendChild(div);
  }
};
