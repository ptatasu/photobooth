// $(document).ready(function () {
// $("#download").on("click", function () {
// if (window.localStorage.type == '1') {
//   domtoimage
//   .toBlob(document.querySelector(".img-container-1"))
//   .then(function (blob) {
//     window.saveAs(blob, "image.png");
//   });
// } else {
//   domtoimage
//   .toBlob(document.querySelector(".img-container-2"))
//   .then(function (blob) {
//     window.saveAs(blob, "image.png");
//   });
// }
//   });
// });

let body = document.getElementById("body");
let img1 = document.querySelector(".img-container-1");
let img2 = document.querySelector(".img-container-2");
let dateChkbox = document.getElementById("customDate");
let titleChkbox = document.getElementById("customTitle");
let dateInput = document.getElementById("customDateInt");
let titleInput = document.getElementById("customTitleInt");
let title = document.querySelector(".title");
let title2 = document.querySelector(".title_2");
let date = document.querySelector(".date");
let date2 = document.querySelector(".date_2");
let bg1 = document.querySelector(".background1");
let bg2 = document.querySelector(".background2");
const icon = document.getElementById("dsn");
const iconRight = document.getElementById("dsn-right");
const iconLeft = document.getElementById("dsn-left");
const iconTop = document.getElementById("dsn-top");
const icon2 = document.getElementById("dsn_2");
const iconRight2 = document.getElementById("dsn-right_2");
const iconLeft2 = document.getElementById("dsn-left_2");
const iconTop2 = document.getElementById("dsn-top_2");
const cnm = document.getElementById("cnm");
const food = document.getElementById("food");
const none = document.getElementById("none");
let sticker = "none";
let color = "default";
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const d = new Date();
let month = months[d.getMonth()];

const checkStick = () => {
  console.log(sticker);
  if (sticker == "none") {
    icon.style.opacity = "0";
    iconRight.style.opacity = "0";
    iconLeft.style.opacity = "0";
    iconTop.style.opacity = "0";
    icon2.style.opacity = "0";
    iconRight2.style.opacity = "0";
    iconLeft2.style.opacity = "0";
    iconTop2.style.opacity = "0";
    // icon2.classList.remove("cnm-icon_2");
    // iconRight2.classList.remove("cnm-icon-right_2");
    // iconLeft2.classList.remove("cnm-icon-left_2");
    // iconTop2.classList.remove("cnm-icon-top_2");
    // icon.classList.remove("cnm-icon");
    // iconRight.classList.remove("cnm-icon-right");
    // iconLeft.classList.remove("cnm-icon-left");
    // iconTop.classList.remove("cnm-icon-top");
    // icon.classList.remove("gdtm-icon");
    // iconRight.classList.remove("gdtm-icon-right");
    // iconLeft.classList.remove("gdtm-icon-left");
    // iconTop.classList.remove("gdtm-icon-top");
    // icon2.classList.remove("gdtm-icon_2");
    // iconRight2.classList.remove("gdtm-icon-right_2");
    // iconLeft2.classList.remove("gdtm-icon-left_2");
    // iconTop2.classList.remove("gdtm-icon-top_2");
  } else if (sticker == "cnm") {
    icon.style.opacity = "100%";
    icon.src = "img/assets/cnm-icon.png";
    iconRight.style.opacity = "100%";
    iconRight.src = "img/assets/cnm-right.png";
    iconLeft.style.opacity = "100%";
    iconLeft.src = "img/assets/cnm-left.png";
    iconTop.style.opacity = "100%";
    iconTop.src = "img/assets/cnm-bottom.png";
    icon2.style.opacity = "100%";
    icon2.src = "img/assets/cnm-icon.png";
    iconRight2.style.opacity = "100%";
    iconRight2.src = "img/assets/cnm-right.png";
    iconLeft2.style.opacity = "100%";
    iconLeft2.src = "img/assets/cnm-left.png";
    iconTop2.style.opacity = "100%";
    iconTop2.src = "img/assets/cnm-bottom.png";
    icon.classList.add("cnm-icon");
    iconRight.classList.add("cnm-icon-right");
    iconLeft.classList.add("cnm-icon-left");
    iconTop.classList.add("cnm-icon-top");
    icon2.classList.add("cnm-icon_2");
    iconRight2.classList.add("cnm-icon-right_2");
    iconLeft2.classList.add("cnm-icon-left_2");
    iconTop2.classList.add("cnm-icon-top_2");
    icon.classList.remove("gdtm-icon");
    iconRight.classList.remove("gdtm-icon-right");
    iconLeft.classList.remove("gdtm-icon-left");
    iconTop.classList.remove("gdtm-icon-top");
    icon2.classList.remove("gdtm-icon_2");
    iconRight2.classList.remove("gdtm-icon-right_2");
    iconLeft2.classList.remove("gdtm-icon-left_2");
    iconTop2.classList.remove("gdtm-icon-top_2");
  } else if (sticker == "gdtm") {
    icon.style.opacity = "100%";
    icon.src = "img/assets/gdtm-bottom.png";
    iconRight.style.opacity = "100%";
    iconRight.src = "img/assets/gdtm-right.png";
    iconLeft.style.opacity = "100%";
    iconLeft.src = "img/assets/gdtm-left.png";
    iconTop.style.opacity = "100%";
    iconTop.src = "img/assets/gdtm-top.png";
    icon2.style.opacity = "100%";
    icon2.src = "img/assets/gdtm-bottom.png";
    iconRight2.style.opacity = "100%";
    iconRight2.src = "img/assets/gdtm-right.png";
    iconLeft2.style.opacity = "100%";
    iconLeft2.src = "img/assets/gdtm-left.png";
    iconTop2.style.opacity = "100%";
    iconTop2.src = "img/assets/gdtm-top.png";
    icon.classList.add("gdtm-icon");
    iconRight.classList.add("gdtm-icon-right");
    iconLeft.classList.add("gdtm-icon-left");
    iconTop.classList.add("gdtm-icon-top");
    icon.classList.remove("cnm-icon");
    iconRight.classList.remove("cnm-icon-right");
    iconLeft.classList.remove("cnm-icon-left");
    iconTop.classList.remove("cnm-icon-top");
    icon2.classList.add("gdtm-icon_2");
    iconRight2.classList.add("gdtm-icon-right_2");
    iconLeft2.classList.add("gdtm-icon-left_2");
    iconTop2.classList.add("gdtm-icon-top_2");
    icon2.classList.remove("cnm-icon_2");
    iconRight2.classList.remove("cnm-icon-right_2");
    iconLeft2.classList.remove("cnm-icon-left_2");
    iconTop2.classList.remove("cnm-icon-top_2");
  }
};
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
};
const checkDate = () => {
  date.innerHTML = `${month} ${d.getDate()}, ${d.getFullYear()}`;
  date2.innerHTML = `${month} ${d.getDate()}, ${d.getFullYear()}`;
};
const customTitle = () => {
  if (titleChkbox.checked) {
    titleInput.style.opacity = "100%";
    titleInput.disabled = false;
  } else {
    titleInput.disabled = true;
    title.innerHTML = "";
    title2.innerHTML = "";
  }
};
const customDate = () => {
  if (dateChkbox.checked) {
    dateInput.style.opacity = "100%";
    dateInput.disabled = false;
    dateInput.value = "";
  } else {
    dateInput.disabled = true;
    dateInput.value = "2024-08-29";
    checkDate();
  }
};
const checkDateInput = () => {
  let dateVal = dateInput.value;
  let dateValYear = dateVal.slice(0, 4);
  let dateValMonth = dateVal.slice(6, 7) - 1;
  let dateValDay = dateVal.slice(8, 10);
  console.log(months[dateValMonth], dateValYear, dateValDay);
  date.innerHTML = `${months[dateValMonth]} ${dateValDay}, ${dateValYear}`;
  date2.innerHTML = `${months[dateValMonth]} ${dateValDay}, ${dateValYear}`;
};
const checkTitleInput = () => {
  let titleVal = titleInput.value;
  title.innerHTML = titleVal;
  title2.innerHTML = titleVal;
};

const CheckLayout = () => {
  if (window.localStorage.type == "1") {
    img1.style.display = "flex";
    body.style.zoom = "0.5";
  } else {
    img2.style.display = "flex";
    body.style.zoom = "0.3";
  }
};

const Down = () => {
  const scale = window.devicePixelRatio;
  if (window.localStorage.type == "1") {
    domtoimage
      .toJpeg(img1, {
        height: img1.offsetHeight * scale,
        width: img1.offsetWidth * scale,
        style: {
          transform: `scale(${scale})`,
          transformOrigin: "top left",
          width: `${img1.offsetWidth}px`,
          height: `${img1.offsetHeight}px`,
        },
      })
      .then(function (blob) {
        window.saveAs(blob, "image.png");
      })
      .catch((err) => {
        console.log(err);
      });
  } else {
    domtoimage
      .toBlob(img2, {
        height: img2.offsetHeight * scale,
        width: img2.offsetWidth * scale,
        style: {
          transform: `scale(${scale})`,
          transformOrigin: "top left",
          width: `${img2.offsetWidth}px`,
          height: `${img2.offsetHeight}px`,
        },
      })
      .then(function (blob) {
        window.saveAs(blob, "image.png");
      });
  }
};
