var imgs = document.querySelectorAll("img.expand");
var img_array = [...imgs];

img_array.forEach((img) =>
  img.addEventListener("click", () => {
    expandImage(img);
  })
);

function expandImage(img) {
  img.classList.toggle("expanded");
}
