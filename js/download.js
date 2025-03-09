$(document).ready(function () {
  $("#download").on("click", function () {
    domtoimage
      .toBlob(document.querySelector(".img-container-1"))
      .then(function (blob) {
        window.saveAs(blob, "image.png");
      });
  });
});

let title = document.querySelector(".title");
let date = document.querySelector(".date");
const icon = document.getElementById("dsn");
const iconRight = document.getElementById("dsn-right");
const iconBottom = document.getElementById("dsn-bottom");
const cnm = document.getElementById("cnm");
const food = document.getElementById("food");
const none = document.getElementById("none");
let sticker = "none";

const checkStick = () => {
    console.log(sticker); 
    if (sticker == "none") {
    icon.style.opacity = "0";
    iconRight.style.opacity = "0";
    iconBottom.style.opacity = "0";
} else if (sticker == "cnm"){
    icon.style.opacity = "100%";
    iconRight.style.opacity = "100%";
    iconBottom.style.opacity = "100%";
    icon.classList.add = "cnm-icon";
    iconRight.className.add = "cnm-icon-right";
    iconBottom.className.add = "cnm-icon-bottom";
} else {
    icon.style.opacity = "100%";
    iconRight.style.opacity = "100%";
    iconBottom.style.opacity = "100%";
    icon.className.add = "food-icon";
    iconRight.className.add = "food-icon-right";
    iconBottom.className.add = "food-icon-bottom";
}
}
