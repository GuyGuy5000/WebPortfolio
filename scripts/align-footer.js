var footer = document.getElementById("footer");
const body = document.body;
const html = document.documentElement;

alignFooter();

addEventListener("resize", (e) => {
  alignFooter();
});

function alignFooter() {
  let maxHeight = Math.max(
    body.scrollHeight,
    body.offsetHeight,
    html.clientHeight,
    html.scrollHeight,
    html.offsetHeight
  );

  if (window.innerHeight < maxHeight) {
    footer.style.position = "relative";
    html.style.marginBottom = "0px";
  } else {
    footer.style.position = "fixed";
    html.style.marginBottom = "150px";
  }
}
