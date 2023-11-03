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
let inCue = 'b'

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
    inCue = 'b';
  }
  // move b from cue to play
  else {
    bStatusBox.after(aStatusBox);
    djImage.style.transform = 'scaleX(-1)';
    inCue = 'a';
  }
}

/** Add song using form entry */
function addNextSong(event) {
  event.preventDefault();
  // update each field with form input value
  const idPrefixes = ['song', 'artist', 'bpm', 'key'];
  const formInputs = [songSelect.value, artistSelect.value,
    bpmSelect.value, keySelect.value];
  for (let i=0; i < formInputs.length; i++){
    let elementToUpdate = document.getElementById(`${idPrefixes[i]}-${inCue}`);
    if (formInputs[i].length == 0) formInputs[i] = '-';
    elementToUpdate.innerText = formInputs[i];
  }
  addSongResult.innerText = `Song added to Deck ${inCue.toUpperCase()}`
  // reset form
  form.reset()
}

