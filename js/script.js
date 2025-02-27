  const snap = document.getElementById("snap");
  // const url = document.getElementById("url");
  const webcamVid = document.getElementById("webcamVid");
  let count = 0;
  const body = document.getElementById("body");
  const image_1 = document.querySelector("#image_1");
  const image_2 = document.getElementById("image_2");
  const image_3 = document.getElementById("image_3");
  const image_4 = document.getElementById("image_4");
  let images = {};

  const Save = (e) => {
    console.log(e);
    
    window.localStorage.setItem("images", e);
  }

  const Load = () => {
    images = JSON.parse(window.localStorage.images);
    image_1.src = images[0];
    image_3.src = images[1];
    image_2.src = images[2];
    image_4.src = images[3];
  }

  const Capture = () => {
      window.location.assign("cam.html")
    } 

    
  const Snapshot = () => {
    canvas.getContext('2d').drawImage(webcamVid, 0, 0, canvas.width, canvas.height);
    let data_url = canvas.toDataURL('image/jpeg');
    // url.value = data_url;
    images[count] = data_url;
    console.log(images);
    // image.src = images[count] /// dito ko natapos
    count++
    if (count > 3 ) {
      Save(JSON.stringify(images));
      window.location.assign("done.html");
    }
  }

  const Camera = () => {
    navigator.mediaDevices.getUserMedia({video: true}).then((stream) => {
        webcamVid.srcObject = stream;
    }).catch((e) => {
        console.log(e);
    })
  }