const snap = document.getElementById("snap");
const url = document.getElementById("url");

const Capture = () => {
    window.location.assign("cam.html")
  } 

  
const Snapshot = () => {
    canvas.getContext('2d').drawImage(webcamVid, 0, 0, canvas.width, canvas.height);
    let data_url = canvas.toDataURL('image/jpeg');
    url.value = data_url;
}