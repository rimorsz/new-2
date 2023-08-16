const showModalBtn = document.querySelector(".show-modal");
const bottomSheet = document.querySelector(".bottom-sheet");
const sheetOverlay = document.querySelector(".bottom-sheet");

const showBottomSheet = () =>{
  bottomSheet.classList.add("show");
}

const hideBottomSheet = () =>{
  bottomSheet.classList.remove("show");
}

showModalBtn.addEventListener("click", showBottomSheet);
sheetOverlay.addEventListener("click", hideBottomSheet);