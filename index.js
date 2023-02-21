"use strict";

const bill = document.querySelector(".bill");
const people = document.querySelector(".people");
const custom = document.querySelector(".custom");
const tip = document.querySelectorAll(".tip");
const reset = document.querySelector(".reset");

const tipAmount = document.querySelector(".tip-amount");
const totalAmount = document.querySelector(".total-amount");
// console.log(tip);

function tipReset() {
  tip.forEach((e) => {
    e.style.color = "hsla(180, 37%, 97%, 0.884)";
    e.style.backgroundColor = "hsla(183, 100%, 15%, 0.945)";
  });
}

function init() {
  bill.value = "";
  people.value = "";
  custom.value = "";
  tipReset();
}

reset.addEventListener("click", () => {
  init();
});

function tipFunction() {
  tip.forEach((e) => {
    function calculate() {
      let sum = 0;
      if (people.value && Number(people.value) >= 1) {
        sum = (Number(bill.value) * Number(e.value)) / 100 / people.value;
        return sum.toFixed(2);
      } else {
        sum = (Number(bill.value) * Number(e.value)) / 100;
        return sum.toFixed(2);
      }
    }

    e.addEventListener("click", () => {
      tipReset();
      e.style.color = "hsla(183, 100%, 15%, 0.945)";
      e.style.backgroundColor = "#2bc3ae";
      custom.value = "";
      if (Number(bill.value) >= 1 && Number(people.value) > 0) {
        tipAmount.textContent = `$${calculate()}`;
        totalAmount.textContent = `$${(
          Number(bill.value) / Number(people.value) +
          Number(calculate())
        ).toFixed(2)}`;
      } else if (Number(bill.value) >= 1) {
        tipAmount.textContent = `$${calculate()}`;
        totalAmount.textContent = `$${(
          Number(bill.value) + Number(calculate())
        ).toFixed(2)}`;
      }
    });
  });
}

function customFunction() {
  custom.addEventListener("click", () => {
    tipReset();
  });

  custom.addEventListener("input", () => {
    let value = custom.value;

    function calculate() {
      let sum = 0;
      if (people.value && Number(people.value) >= 1) {
        sum = (Number(bill.value) * Number(value)) / 100 / people.value;
        return sum.toFixed(2);
      } else {
        sum = (Number(bill.value) * Number(value)) / 100;
        return sum.toFixed(2);
      }
    }
    if (Number(bill.value) >= 1 && Number(people.value) > 0) {
      tipAmount.textContent = `$${calculate()}`;
      totalAmount.textContent = `$${(
        Number(bill.value) / Number(people.value) +
        Number(calculate())
      ).toFixed(2)}`;
    } else if (Number(bill.value) >= 1) {
      tipAmount.textContent = `$${calculate()}`;
      totalAmount.textContent = `$${(
        Number(bill.value) + Number(calculate())
      ).toFixed(2)}`;
    }
  });
}
tipFunction();
customFunction();

reset.addEventListener("click", () => {
  init();
});
