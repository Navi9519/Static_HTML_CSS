// Abba Modal window elements

const abbaModal = document.querySelector(".abba_modal");
const openModalBtn = document.querySelector(".open_modal_btn");
const closeModalBtn = document.querySelector(".btn_close");

// Open modal function
function openModal() {
  console.log("Ivan");
  abbaModal.classList.remove("hidden");
}

openModalBtn.addEventListener("click", openModal);

// Close modal function
function closeModal() {
  console.log("hshdhshsd");
  abbaModal.classList.add("hidden");
}

closeModalBtn.addEventListener("click", closeModal);
