// Abba Modal window elements

const abbaModal = document.querySelector(".abba_modal");
const openModalBtn = document.querySelector(".open_modal_btn");
const closeModalBtn = document.querySelector(".btn_close");
//------------------>
// Open modal function
function openModal() {
  abbaModal.classList.remove("hidden_2");
}

openModalBtn.addEventListener("click", openModal);
//------------------>
// Close modal function
function closeModal() {
  abbaModal.classList.add("hidden_2");
}

closeModalBtn.addEventListener("click", closeModal);
//------------------>
