const qrcodecanvas = document.getElementById("qrcode")

const url = window.location.href

var qrcode = new QRCode(qrcodecanvas, {
   text: url,
   width: 130,
   height: 130,
   colorDark : "#000000",
   colorLight : "#ffffff",
   correctLevel : QRCode.CorrectLevel.H
});

// new QRCode(document.getElementById("qrcode"), '/' + modelname.toLowerCase());


