const images = [
  {
    source: "https://source.unsplash.com/600x600?sky",
    descr: "sky",
  },
  {
    source: "https://source.unsplash.com/600x600?beach",
    descr: "beach",
  },
  {
    source: "https://source.unsplash.com/600x600?mountain",
    descr: "mountain",
  },
  {
    source: "https://source.unsplash.com/600x600?nature",
    descr: "nature",
  },
  {
    source: "https://source.unsplash.com/600x600?night",
    descr: "night",
  },
  {
    source: "https://source.unsplash.com/600x600?desert",
    descr: "desert",
  },
  {
    source: "https://source.unsplash.com/600x600?road",
    descr: "road",
  },
  {
    source: "https://source.unsplash.com/600x600?trees",
    descr: "trees",
  },
  { source: "https://source.unsplash.com/600x600?sea", descr: "sea" },
];

const imgMarkup = images.map(({ source, descr }) => `<img src="${source}" alt="${descr}" />`).join("");

const boxRef = document.querySelector(".box");
boxRef.insertAdjacentHTML("beforeend", imgMarkup);

const lightbox = document.createElement("div");
lightbox.classList.add("lightbox");
boxRef.append(lightbox);

boxRef.addEventListener("click", onClick);

function onClick(e) {
  if (e.target === e.currentTarget || e.target === lightbox) return;
  lightbox.classList.add("active");
  const img = document.createElement("img");
  img.src = e.target.src;
  while (lightbox.firstChild) {
    lightbox.removeChild(lightbox.firstChild);
  }
  lightbox.append(img);
}

lightbox.addEventListener("click", (e) => {
  if (e.target !== e.currentTarget) return;
  lightbox.classList.remove("active");
});
