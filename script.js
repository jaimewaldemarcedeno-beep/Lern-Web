const selbstverb = document.querySelector("#selbstverben");

const selbsttabelle = document.querySelector("#selbsttabelle");

const selbstbtn = document.querySelector("#selbstbtn");

const selbstinput = document.querySelector("#selbstinput");

const selbstwörter = document.querySelectorAll(".selbstwörter");

const slbstwort = selbstwörter.textContent;

const correct = document.querySelector("#correct");

const cancel = document.querySelector("#cancel");

function clickAbfrage(input, korekt, abr, wörter, btn) {
  input.style.display = "block";
  korekt.style.display = "block";
  abr.style.display = "block";
  wörter.style.display = "none";
  btn.style.display = "none";
}

function showtabelle(tabelle, btn) {
  if (tabelle.style.display === "none") {
    tabelle.style.display = "block";
    btn.style.display = "block";
  } else if (tabelle.style.display === "block") {
    tabelle.style.display = "none";
    btn.style.display = "none";
  }
}

selbstverb.addEventListener("click", () =>
  showtabelle(selbsttabelle, selbstbtn),
);

selbstbtn.addEventListener("click", (eve) => {
  eve.stopPropagation();

  clickAbfrage(selbstinput, correct, cancel, selbstwörter, selbstbtn);
});
