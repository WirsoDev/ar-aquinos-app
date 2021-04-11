const qrname = document.getElementById('qrname')
const modelname = qrname.getAttribute('data-modelname')

const qrcodecanvas = document.getElementById("qrcode")

var qrcode = new QRCode(qrcodecanvas, {
   text: "/" + modelname,
   width: 130,
   height: 130,
   colorDark : "#000000",
   colorLight : "#ffffff",
   correctLevel : QRCode.CorrectLevel.H
});

// new QRCode(document.getElementById("qrcode"), '/' + modelname.toLowerCase());


