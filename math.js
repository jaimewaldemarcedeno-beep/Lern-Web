const hidden = document.querySelector("#hidden");
const liFu = document.querySelector("#liFu");

const quFu = document.querySelector("#quFu");
const liQu = document.querySelector("#liQu");

function show(obj) {
  if (!obj) return;
  if (obj.style.display === "none") {
    obj.style.display = "block";
  } else {
    obj.style.display = "none";
  }
}

if (liQu && quFu) {
  liQu.addEventListener("click", () => show(quFu));
}
if (liFu && hidden) {
  liFu.addEventListener("click", () => show(hidden));
}
