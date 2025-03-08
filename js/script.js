const snap = document.getElementById("snap");
const nextBtn = document.getElementById("nextBtn");
const canvas = document.getElementById("canvas");
const webcamVid = document.getElementById("webcamVid");
let count = 0;
const countdown = document.getElementById("countdown");
const image_1 = document.querySelector(".image_1");
const image_2 = document.querySelector(".image_2");
const image_3 = document.querySelector(".image_3");
const image_4 = document.querySelector(".image_4");
const image_1_1 = document.querySelector(".image_1_1");
const image_2_2 = document.querySelector(".image_2_2");
const image_3_3 = document.querySelector(".image_3_3");
const image_4_4 = document.querySelector(".image_4_4");
// const timeout = setTimeout(function(e){console.log(e)}, 3000);
// const canvas = document.getElementById(canvas)
let images = {};

const Save = (e) => {
  console.log(e);
  window.localStorage.setItem("images", e);
};

const Load = () => {
  images = JSON.parse(window.localStorage.images);
  image_1.src = images[0];
  image_3.src = images[1];
  image_2.src = images[2];
  image_4.src = images[3];
  image_1_1.src = images[0];
  image_3_3.src = images[1];
  image_2_2.src = images[2];
  image_4_4.src = images[3];
};

const Capture = () => {
  window.location.assign("cam.html");
};

const Snapshot = (e) => {
  // const interval = setInterval(function () {
  //   console.log(e);
  //   countdown.innerHTML = `${e}`;
  //   e--;
  //   if (e == -1) {
      canvas
        .getContext("2d")
        .drawImage(webcamVid, 0, 150, canvas.width, canvas.height, 0, 0, canvas.width, canvas.height);
      // clearInterval(interval);
      countdown.innerHTML = ``;
      let data_url = canvas.toDataURL("image/jpeg");
      images[count] = data_url;
      console.log(JSON.stringify(images));
      if (count == 0) {
        image_1.src = data_url;
      } else if (count == 1) {
        image_2.src = data_url;
      } else if (count == 2) {
        image_3.src = data_url;
      } else if (count == 3) {
        image_4.src = data_url;
        nextBtn.style.display = "block";
      }
      count++;
    }
  // }, 1000);
// };

const retake = () => {};
const next = () => {
  window.location.assign("done.html"); //dito ko natapos Snapshot(3)
  // Save(JSON.stringify(images));
};

const Camera = () => {
  navigator.mediaDevices
    .getUserMedia({ video: true })
    .then((stream) => {
      webcamVid.srcObject = stream;
    })
    .catch((e) => {
      console.log(e);
    });
};
