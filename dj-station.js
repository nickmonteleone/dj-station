// add event listener for swap button
const swapButton = document.getElementById("swap-button");
swapButton.addEventListener("click", swapDecks);

// get variables for status
const aStatus = document.getElementById("a-status");
const bStatus = document.getElementById("b-status");
// get status bar boxes
const aStatusBox = document.getElementById("a-status-box");
const bStatusBox = document.getElementById("b-status-box");
// elements for body background and dj image
const djImage = document.getElementById('dj-image');

// global variables for cue deck, start at B
let bInCue = true;
let aInCue = false;

/** Swap status text and change order of status bars */
function swapDecks() {
  let prevAstatus = aStatus.innerText;
  let prevBstatus = bStatus.innerText;
  aStatus.innerText = prevBstatus;
  bStatus.innerText = prevAstatus;
  // move a from cue to play
  if (prevAstatus == "In the cue:"){
    aStatusBox.after(bStatusBox);
    djImage.style.transform = 'scaleX(1)'
  }
  // move b from cue to play
  else {
    bStatusBox.after(aStatusBox);
    djImage.style.transform = 'scaleX(-1)';
  }
  // flip cue statuses
  aInCue = !aInCue;
  bInCue = !bInCue;
}