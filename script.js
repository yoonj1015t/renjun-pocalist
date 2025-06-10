
const enterBtn = document.getElementById("enter-btn");
const mainScreen = document.getElementById("main-screen");
const categoryScreen = document.getElementById("category-screen");
const albumScreen = document.getElementById("album-screen");
const photocardScreen = document.getElementById("photocard-screen");

const data = {
  dream: {
    "ISTJ": ["ISTJ-A", "ISTJ-B"],
    "DREAM()SCAPE": ["SCAPE-A", "SCAPE-B"],
  },
  others: {
    "Season's Greetings 2024": ["SG2024-A", "SG2024-B"]
  }
};

enterBtn.addEventListener("click", () => {
  mainScreen.classList.add("hidden");
  categoryScreen.classList.remove("hidden");
});

categoryScreen.addEventListener("click", (e) => {
  if (e.target.classList.contains("category")) {
    const category = e.target.dataset.category;
    showAlbums(category);
  }
});

function showAlbums(category) {
  categoryScreen.classList.add("hidden");
  albumScreen.innerHTML = "";
  albumScreen.classList.remove("hidden");

  const albums = data[category];
  for (const album in albums) {
    const btn = document.createElement("button");
    btn.textContent = album;
    btn.addEventListener("click", () => showPhotocards(album, albums[album]));
    albumScreen.appendChild(btn);
  }
}

function showPhotocards(albumName, versions) {
  albumScreen.classList.add("hidden");
  photocardScreen.innerHTML = `<h2>${albumName}</h2>`;
  photocardScreen.classList.remove("hidden");

  const container = document.createElement("div");
  container.className = "photocard-container";

  versions.forEach((version) => {
    const img = document.createElement("img");
    img.src = `images/${version}.jpg`;
    img.alt = version;

    img.addEventListener("click", () => {
      img.classList.toggle("checked");
    });

    container.appendChild(img);
  });

  photocardScreen.appendChild(container);
}
