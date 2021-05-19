"use strict";

const btn = document.querySelector(".buttons");
const selectedSize = document.getElementById("selected_size");
const cartList = document.getElementById("cart");

function onButtonClick(event) {
  const dataset = event.target.dataset;
  const value = dataset.value;
  selectedSize.innerHTML = createdHTMLString(value);
}

function createdHTMLString(value) {
  return `
        ${value}
    `;
}

function init() {
  btn.addEventListener("click", (event) => onButtonClick(event));
}

init();

$(document).ready(function () {
  $("#myCart").click(function () {
    $(this).toggleClass("on");
  });
});
