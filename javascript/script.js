// City info background elements
const cityDayImg = document.querySelector(".city_info");
const cityNightImg = document.querySelector(".city_info_night");
const imgBtn = document.querySelector(".btn_night");
//------------------>
// Change img functions

function changeImg() {
  if (imgBtn.textContent === "Stockholm by day") {
    cityDayImg.classList.remove("hidden");
    cityNightImg.classList.add("hidden");
    imgBtn.textContent = "Stockholm by night";
  } else {
    cityDayImg.classList.add("hidden");
    cityNightImg.classList.remove("hidden");
    imgBtn.textContent = "Stockholm by day";
  }
}

imgBtn.addEventListener("click", changeImg);
//------------------>

// // City info elements
// const infoCityModal = document.querySelector(".info_city_modal");
// const openModalBtn = document.querySelector(".open_city_btn");
// const closeModalBtn = document.querySelector(".close_info_btn");
// //------------------>
// // Open City info modal function
// function openCityInfoModal() {
//   infoCityModal.classList.remove("hidden_2");
//   console.log("dsdsdsds");
// }

// infoCityModal.addEventListener("click", openCityInfoModal);
// //------------------>
// // Close city info modal function
// function closeModalbtn() {
//   infoCityModal.classList.add("hidden_2");
// }

// closeModalBtn.addEventListener("click", closeModal);
