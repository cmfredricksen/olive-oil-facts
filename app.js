"use strict";
const btnsShowModal = document.querySelectorAll(".show-modal");
const btnCloseModal = document.querySelector(".close-modal");
console.log(btnsShowModal);

const modal = document.querySelector(".modal");
const hidden = document.querySelector(".hidden");
const overlay = document.querySelector(".overlay");

let openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

let hideModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

for (let i = 0; i < btnsShowModal.length; i++) {
  btnsShowModal[i].addEventListener("click", openModal);
}

// btnCloseModal.addEventListener("click", hideModal);
// overlay.addEventListener("click", hideModal);
document.addEventListener("keydown", function (e) {
  console.log(e.key);
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    hideModal();
  }
});
