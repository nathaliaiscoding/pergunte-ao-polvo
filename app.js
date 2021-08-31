// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
const submit = document.getElementById("submit");
const back = document.getElementById("back");
const field = document.getElementById("field");
const heading = document.querySelector("h4");

function createRandomNumber() {
  let random = Math.floor(Math.random() * 100);
  return random;
}

function updateToAnswerForm() {
  field.value = "";
  submit.value = "Voltar";
  submit.setAttribute("id", "back");
}

function updateToQuestionForm() {
  submit.value = "Pergunte ao Polvo";
  submit.setAttribute("id", "submit");
  heading.innerHTML = "O que deseja saber?";
}

function writeAnswer() {
  if (field.value == "" || field.value == " ") {
    heading.innerHTML = "Faça uma pergunta no campo abaixo";
  } else {
    let random = createRandomNumber();
    if (random % 2) {
      heading.innerHTML = "Sim";
    } else {
      heading.innerHTML = "Não";
    }
  }
  updateToAnswerForm();
}

function submitClick() {
  if (submit.value == "Pergunte ao Polvo") {
    writeAnswer();
  } else {
    updateToQuestionForm();
    console.log("Formulário foi reiniciado");
  }
}
