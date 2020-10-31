"use strict";

const expand = document.querySelectorAll(".expand");
const hidden = document.querySelector(".hidden");
console.log(expand);
for (let i = 0; i < expand.length; i++) {
  expand[i].addEventListener("click", function () {
    hidden.classList.remove("hidden");
    console.log(expand[i]);
  });
}
