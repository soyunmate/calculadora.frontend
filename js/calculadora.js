"use strict";

const operationText = document.querySelector(".secundario");
const resultado = document.getElementById("result");
const btnNumber = document.querySelectorAll(".btn-number");
const btnOperators = document.querySelectorAll(".btn-operator");
const equalBtn = document.getElementById("equals");
const clearBtn = document.getElementById("clear");
const delBtn = document.getElementById("borrar");
const puntoBtn = document.getElementById("punto");
const ansBtn = document.getElementById("ans");
const operadores = ["+", "-", "/", "*", "."];

const calculadora = function () {
  let ans = "";

  // add text buttons
  //number buttons
  btnNumber.forEach((btn) => {
    btn.addEventListener("click", function (e) {
      if (operationText.innerText.length < 12) {
        operationText.textContent += btn.textContent;
      }
    });
  });

  // operations buttons
  btnOperators.forEach((btn) => {
    btn.addEventListener("click", function (e) {
      let lastChar = operationText.textContent.split("").pop();
      let firstChar = operationText.textContent.split("").shift();
      if (firstChar === undefined)
        return alert("No se puede comenzar con un operador");
      if (!operadores.includes(lastChar)) {
        operationText.textContent += btn.textContent;
      } else {
        alert("Los operadores no pueden ser consecutivos");
      }
    });
  });

  // boton clear
  clearBtn.addEventListener("click", function (e) {
    operationText.textContent = "";
    resultado.textContent = "";
  });

  // boton delete
  delBtn.addEventListener("click", function (e) {
    let opArr = operationText.textContent.split("");
    opArr.pop();
    operationText.textContent = opArr.join("");
  });

  // boton igual
  equalBtn.addEventListener("click", () => {
    const operacion = operationText.textContent;
    const result = eval(operationText.textContent);
    ans = result;
    resultado.textContent = result;
    operationText.textContent = operacion;
  });

  //boton ans
  ansBtn.addEventListener("click", function () {
    let lastChar = operationText.textContent.split("").pop();
    if (!Number.isFinite(+lastChar)) {
      operationText.textContent += ans;
    }
  });

  // boton sorpresa
  document.getElementById("sorpresa").addEventListener("click", function () {
    alert("Hola Diego!");
  });
};

calculadora();
