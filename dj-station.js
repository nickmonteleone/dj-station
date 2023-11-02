// add event listener for swap button
const swapButton = document.getElementById("swap-button");
swapButton.addEventListener("click", swapDecks);

// get variables for status
const aStatus = document.getElementById("a-status");
const bStatus = document.getElementById("b-status");


function swapDecks() {
  let prevAstatus = aStatus.innerText;
  let prevBstatus = bStatus.innerText;
  aStatus.innerText = prevBstatus;
  bStatus.innerText = prevAstatus;
}