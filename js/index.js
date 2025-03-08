const startBtn= document.getElementById("start");
const styleBtn1 = document.getElementById("style_1");
const styleBtn2 = document.getElementById("style_2");
const sample1 = document.getElementById("sample1");
const sample2 = document.getElementById("sample2");
const cont = document.querySelector(".style-container");

const Start = () => {
  startBtn.style.opacity = "0%";
  startBtn.style.cursor = "default"
  startBtn.style.zIndex = "-999";
  startBtn.style.transform = "translateY(-400px)";
  styleBtn1.style.opacity = "100%";
  styleBtn2.style.opacity = "100%";
  sample1.style.opacity = "100%";
  sample2.style.opacity = "100%";
  cont.style.opacity = "100%";
  cont.style.transform = "translateY(60px)";
  styleBtn1.style.cursor = "pointer";
  styleBtn2.style.cursor = "pointer";
};
