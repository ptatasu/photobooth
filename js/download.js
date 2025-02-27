$(document).ready(function(){

    const element = $(".img-container");

    $("#download").on('click', function(){
        html2canvas(element, {
            dpi: 700,
            onrendered: function(canvas) {
            var imageData = canvas.toDataURL("image/jpg");
            var newData = imageData.replace(/^data:image\/jpg/, "data:application/octet-stream");
            $("#download").attr("download", "image.jpg").attr("href", newData);
          }
        });
    });
});