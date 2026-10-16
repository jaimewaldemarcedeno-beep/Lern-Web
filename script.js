const selbstverb = document.querySelector("#selbstverben");

const selbsttabelle = document.querySelector("#selbsttabelle");

const selbstbtn = document.querySelector("#selbstbtn");

const selbstinput = document.querySelectorAll(".selbstinput");

const selbstwörter = document.querySelectorAll(".selbstwörter");

const correct = document.querySelector("#correct");

const cancel = document.querySelector("#cancel");

function abr(wörter, input, btn, korrekt, abruch) {
  wörter.style.display = "block";
  input.style.display = "none";
  btn.style.display = "block";
  korrekt.style.display = "none";
  abruch.style.display = "none";
}

function clickFragen(input, korekt, abr, wörter, btn) {
  korekt.style.display = "block";
  abr.style.display = "block";

  wörter.forEach((wort) => {
    wort.style.display = "none";
  });

  input.forEach((element) => {
    element.style.display = "block";
  });

  btn.style.display = "none";
}

function showtabelle(tabelle, btn) {
  if (tabelle.style.display === "none") {
    tabelle.style.display = "block";
    btn.style.display = "block";
  } else if (
    tabelle.style.display === "block" &&
    btn.style.display === "block"
  ) {
    tabelle.style.display = "none";
    btn.style.display = "none";
  }
}

function korrigieren(input, wörter, btn, btn2) {
  btn2.textContent = "Abschließen!";

  input.forEach((element) => {
    let userInput = element.textContent;
  });
  wörter.forEach((wort) => {
    let correctWord = wort.textContent;
  });
  if (userInput === correctWord) {
    element.style.backgroundColor = "green";
    btn.style.display = "none";
  } else {
    element.style.backgroundColor = "red";
  }
}
selbstverb.addEventListener("click", () =>
  showtabelle(selbsttabelle, selbstbtn),
);

selbstbtn.addEventListener("click", (eve) => {
  eve.stopPropagation();

  clickFragen(selbstinput, correct, cancel, selbstwörter, selbstbtn);
});

cancel.addEventListener("click", (eve) => {
  eve.stopPropagation();
  abr(selbstwörter, selbstinput, selbstbtn, correct, cancel);
});
