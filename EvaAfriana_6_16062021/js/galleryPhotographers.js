export const init = () => {
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
};

const tags = (tags) => {
  const labels = tags.map(
    (tag) =>
      `<a><span class="tags" aria-label="Tag" tabindex="0">#${tag}</span></a>`
  );
  return `${labels.join("")}`;
};

const appendData = (response) => {
  const mainGallery = document.getElementById("photographers");
  response.photographers.forEach((photographer) => {
    const div = document.createElement("div");
    console.log(photographer.portrait);
    div.innerHTML = `
    <a tabindex="0">
      <img
        class="photographers__profil"
        src="assets/images/photographers/${photographer.portrait}"
        aria-label="${photographer.name}"
      />
      <h2>${photographer.name}</h2>
    </a>
    <div class=photographers__info>
      <h4>${photographer.city}, ${photographer.country}</h4>
      <p>${photographer.tagline}</p>
      <p class="photographers__price">${photographer.price}/jour</p> 
    <div>
    ${tags(photographer.tags)}
  `;
    mainGallery.appendChild(div);
  });
};
