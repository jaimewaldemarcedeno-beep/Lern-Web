const selbstverb = document.querySelector("#selbstverben");

const selbsttabelle = document.querySelector("#selbsttabelle");

selbstverb.addEventListener("click", function () {
  console.log("selbstverb clicked");
  if (selbsttabelle.style.display === "none") {
    selbsttabelle.style.display = "block";
  } else if (selbsttabelle.style.display === "block") {
    selbsttabelle.style.display = "none";
  }
});
