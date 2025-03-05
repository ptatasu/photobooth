const startBtn= document.getElementById("start");
const styleBtn1 = document.getElementById("style_1");
const styleBtn2 = document.getElementById("style_2");

const Start = () => {
  startBtn.style.opacity = "0%";
  startBtn.style.cursor = "default"
  startBtn.style.zIndex = "-999";
  startBtn.style.transform = "translateY(-400px)";
  styleBtn1.style.opacity = "100%";
  styleBtn2.style.opacity = "100%";
  styleBtn1.style.cursor = "pointer";
  styleBtn2.style.cursor = "pointer";
};
