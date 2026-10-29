const hidden = document.querySelector("#hidden");
const liFu = document.querySelector("#liFu");

const quFu = document.querySelector("#quFu");
const liQu = document.querySelector("#liQu");

function show(obj) {
  if (obj.style.display === "none") {
    obj.style.display = "block";
  } else {
    obj.style.display = "none";
  }
}
liQu.addEventListener("click", () => show(quFu));

liFu.addEventListener("click", () => show(hidden));
