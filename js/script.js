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
};

const Capture = () => {
  window.location.assign("cam.html");
};

const reset = () => {
  snap.style.opacity = "100%";
}

const Snapshot = () => {
  snap.onclick = 'null';
  snap.style.opacity = "20%";
  let time = document.getElementById("text").value;
  countdown.innerHTML = `${time}`;
  time--;
  const interval = setInterval(function () {
    console.log(time);
  // console.log(time);
    countdown.innerHTML = `${time}`;
    time--;
    if (time == -1) {
      canvas
        .getContext("2d")
        .drawImage(webcamVid, 0, 150, canvas.width, canvas.height, 0, 0, canvas.width, canvas.height);
      clearInterval(interval);
      countdown.innerHTML = ``;
      let data_url = canvas.toDataURL("image/jpeg");
      images[count] = data_url;
      console.log(JSON.stringify(images));
      if (count == 0) {
        image_1.src = data_url;
        image_1.style.border = "2px solid black"
        setTimeout(() => {Snapshot()}, 2000);
        // reset();
      } else if (count == 1) {
        image_2.src = data_url;
        image_2.style.border = "2px solid black"
        setTimeout(() => {Snapshot()}, 2000);
        // reset();
      } else if (count == 2) {
        image_3.src = data_url;
        image_3.style.border = "2px solid black"
        setTimeout(() => {Snapshot()}, 2000);
        // reset();
      } else if (count == 3) {
        image_4.src = data_url;
        image_4.style.border = "2px solid black"
        nextBtn.style.display = "block";
        snap.style.display = "none";
      }
      count++;
    }
  }, 1000);
  // setTimeout(reset(), 3000)
};
// snap.onclick = Snapshot();

const retake = () => {};
const next = () => {
  window.location.assign("done.html");
  // Save(JSON.stringify(images));
};
const Camera = () => {
  navigator.mediaDevices
  .getUserMedia({ video: {facingMode: "user"} })
  .then((stream) => {
    webcamVid.srcObject = stream;
  })
  .catch((e) => {
    console.log(e);
  });
};
