const hidden = document.querySelector("#hidden");
const liFu = document.querySelector("#liFu");

function show(obj) {
  if (obj.style.display === "none") {
    obj.style.display = "block";
  } else {
    obj.style.display = "none";
  }
}

liFu.addEventListener("click", show(hidden));
