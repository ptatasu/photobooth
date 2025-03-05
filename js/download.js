// $(document).ready(function(){

//     const element = $(".img-container");

//     $("#download").on('click', function(){
    //         html2canvas(element, {
        //             dpi: 700,
        //             onrendered: function(canvas) {
            //             var imageData = canvas.toDataURL("image/jpg");
            //             var newData = imageData.replace(/^data:image\/jpg/, "data:application/octet-stream");
            //    1200x3855         $("#download").attr("download", "image.jpg").attr("href", newData);
            //           }
            //         });
            //     });
            // });
            
$("#download").on('click', function(){
        domtoimage.toBlob(document.querySelector('.img-container'))
        .then(function (blob) {
            window.saveAs(blob, 'image.png');
        });
});

// document.getElementById("download").onmousedown(save()); 1442 2192
