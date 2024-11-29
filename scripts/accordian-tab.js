var tabs = document.querySelectorAll("h2.toggle");
var tab_array = [...tabs];

tab_array.forEach((tab) =>
  tab.addEventListener("click", () => {
    expandTab(tab);
  })
);

function expandTab(tab) {
  document.getElementById(tab.dataset.tab).classList.toggle("hide");

  document
    .getElementById(tab.dataset.tab + "arrow")
    .classList.toggle("fa-chevron-down");
  document
    .getElementById(tab.dataset.tab + "arrow")
    .classList.toggle("fa-chevron-right");
  alignFooter();
}
