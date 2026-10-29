const selbstverb = document.querySelector("#selbstverben");

const selbsttabelle = document.querySelector("#selbsttabelle");

const selbstbtn = document.querySelector("#selbstbtn");

const selbstinput = document.querySelectorAll(".selbstinput");

const selbstwörter = document.querySelectorAll(".selbstwörter");

const correct = document.querySelector("#correct");

const cancel = document.querySelector("#cancel");

function abr(wörter, input, btn, korrekt, abruch) {
  wörter.forEach((wort) => {
    wort.style.display = "block";
  });
  input.forEach((element) => {
    element.style.display = "none";
    element.value = "";
    element.style.backgroundColor = "white";
  });
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

  input.forEach((element, index) => {
    let correctWord = wörter[index].textContent.toLowerCase(); // oder .value, je nachdem was für Elemente das sind
    console.log("etwas");
    if (element.value.toLowerCase() === correctWord) {
      element.style.backgroundColor = "lightgreen";
      btn.style.display = "none";
    } else {
      element.style.backgroundColor = "lightcoral";
    }
  });
}

function enter(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    korrigieren(selbstinput, selbstwörter, selbstbtn, cancel);
  }
}

correct.addEventListener("click", () =>
  korrigieren(selbstinput, selbstwörter, selbstbtn, cancel),
);

selbstverb.addEventListener("click", () =>
  showtabelle(selbsttabelle, selbstbtn),
);

selbstbtn.addEventListener("click", (eve) => {
  eve.stopPropagation();

  clickFragen(selbstinput, correct, cancel, selbstwörter, selbstbtn);

  selbstinput.forEach((element) => {
    element.addEventListener("keydown", enter);
  });
});

cancel.addEventListener("click", (eve) => {
  eve.stopPropagation();
  abr(selbstwörter, selbstinput, selbstbtn, correct, cancel);
  selbstinput.removeEventListener("keydown", () => enter);
});
