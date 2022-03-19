const targetDiv = document.getElementById("contentHide");
const btn = document.getElementById("myAnchor");
let test =document.getElementById("footercontent");
btn.onclick = function () {
  if (targetDiv.style.display !== "none") {
    targetDiv.style.display = "none";
  } else {
    targetDiv.style.display = "block";
    btn.style.display = "none";
  }
};

test.onmouseover = function () {
  targetDiv.style.display = "none";
  btn.style.display = "block";
};
