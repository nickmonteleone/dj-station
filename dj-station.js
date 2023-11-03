// add event listener for swap button
const swapButton = document.getElementById("swap-button");
swapButton.addEventListener("click", swapDecks);

// add event listener for song entry
const form = document.querySelector("form");
form.addEventListener("submit", addNextSong);
// entries for song
const songSelect = document.getElementById("song-select");
const artistSelect = document.getElementById("artist-select");
const bpmSelect = document.getElementById("bpm-select");
const keySelect = document.getElementById("key-select");
const addSongResult = document.getElementById("add-song-result");

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

/** Add song using form entry */
function addNextSong(event) {
  event.preventDefault();
  console.log('adding song');
  // if no song then don't proceed
  if (songSelect.value.length == 0){
    console.log('no song name entered');
    addSongResult.innerText = "No song provided."
    return;
  }
  for (let item of [songSelect, artistSelect, bpmSelect, keySelect]){
    console.log(item.value);
  }
}

