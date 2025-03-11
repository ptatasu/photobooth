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
let bg1 = document.querySelector(".background1");
let bg2 = document.querySelector(".background2");
const icon = document.getElementById("dsn");
const iconRight = document.getElementById("dsn-right");
const iconLeft = document.getElementById("dsn-left");
const iconTop = document.getElementById("dsn-top");
const cnm = document.getElementById("cnm");
const food = document.getElementById("food");
const none = document.getElementById("none");
let sticker = "none";
let color = "default";
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const d = new Date();
let month = months[d.getMonth()];

const checkStick = () => {
  console.log(sticker);
    if (sticker == "none") {
      icon.style.opacity = "0";
    iconRight.style.opacity = "0";
    iconLeft.style.opacity = "0";
    iconTop.style.opacity = "0";
} else if (sticker == "cnm"){
    icon.style.opacity = "100%";
    icon.src = "img/assets/cnm-icon.png";
    iconRight.style.opacity = "100%";
    iconRight.src = "img/assets/cnm-right.png";
    iconLeft.style.opacity = "100%";
    iconLeft.src = "img/assets/cnm-left.png";
    iconTop.style.opacity = "100%";
    iconTop.src = "img/assets/cnm-bottom.png";
    icon.classList.add("cnm-icon");
    iconRight.classList.add("cnm-icon-right");
    iconLeft.classList.add("cnm-icon-left");
    iconTop.classList.add("cnm-icon-top");
    icon.classList.remove("gdtm-icon");
    iconRight.classList.remove("gdtm-icon-right");
    iconLeft.classList.remove("gdtm-icon-left");
    iconTop.classList.remove("gdtm-icon-top");
  } else if (sticker == "gdtm") {
    icon.style.opacity = "100%";
    icon.src = "img/assets/gdtm-bottom.png";
    iconRight.style.opacity = "100%";
    iconRight.src = "img/assets/gdtm-right.png";
    iconLeft.style.opacity = "100%";
    iconLeft.src = "img/assets/gdtm-left.png";
    iconTop.style.opacity = "100%";
    iconTop.src = "img/assets/gdtm-top.png";
    icon.classList.add("gdtm-icon");
    iconRight.classList.add("gdtm-icon-right");
    iconLeft.classList.add("gdtm-icon-left");
    iconTop.classList.add("gdtm-icon-top");
    icon.classList.remove("cnm-icon");
    iconRight.classList.remove("cnm-icon-right");
    iconLeft.classList.remove("cnm-icon-left");
    iconTop.classList.remove("cnm-icon-top");
}
}
const checkColor = () => {
  console.log(color);
  if (color == "default" || color == "black") {
    bg1.style.backgroundColor = "#131211";
    bg2.style.backgroundColor = "#131211";
  } else if (color == "blue") {
    bg1.style.backgroundColor = "#94C4D5";
    bg2.style.backgroundColor = "#94C4D5";
  } else if (color == "green") {
    bg1.style.backgroundColor = "#71B5AA";
    bg2.style.backgroundColor = "#71B5AA";
  } else if (color == "orange") {
    bg1.style.backgroundColor = "#CD835C";
    bg2.style.backgroundColor = "#CD835C";
  } else if (color == "pink") {
    bg1.style.backgroundColor = "#E3C1C2";
    bg2.style.backgroundColor = "#E3C1C2";
  } else if (color == "red") {
    bg1.style.backgroundColor = "#CA6C60";
    bg2.style.backgroundColor = "#CA6C60";
  } else if (color == "violet") {
    bg1.style.backgroundColor = "#8E96B6";
    bg2.style.backgroundColor = "#8E96B6";
  } else {
    bg1.style.backgroundColor = "#E5DC8A";
    bg2.style.backgroundColor = "#E5DC8A";
  }
}
const checkDate = () => {
  date.innerHTML = `${month} ${d.getDate()}, ${d.getFullYear()}`
}
