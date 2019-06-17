let smileyBtn = document.getElementById('toSmiley');
let angryBtn = document.getElementById('toAngry');

function allSmiles(a) {
  document.getElementById('indexPic').src = a;
}

function longFace(b) {
  document.getElementById('indexPic').src = b;
}

smileyBtn.onclick = function () {
  allSmiles("images/smiley_blue.png");
};

angryBtn.onclick = function () {
  longFace("images/angry_blue.png");
};
