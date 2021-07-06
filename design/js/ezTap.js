function openVisualization(evt, target) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
}
tablinks = document.getElementsByClassName("tablinks");
for (i = 0; i < tablinks.length; i++) {
  tablinks[i].className = tablinks[i].className.replace(" active", "");
}
document.getElementById(target).style.display = "block";
evt.currentTarget.className += " active";
}


/////////////////////////////////////////////////////////////////////////////////////////////////////////
// CUSTOMIZED NAME

// display name on on card
function makeName () {    
  var nameTxt = document.getElementById("name-txt"); // get text from input field
  document.getElementById('designed-name')
  if (!nameTxt.value) { // if empty string
    alert("Please fill in your name.");
    nameTxt.focus();
    return;
  }
  document.getElementById('designed-name').innerHTML = nameTxt.value;
}

makeName();

$("#name-txt").
on("blur", function (){ // if not on focus (click outside the field)
  makeName();
}).
on("keydown", function (e) {
  if (e.keyCode == 13) { // enter press
      makeName();
  }
});


//  change font size
var fSlider = document.getElementById("font-zoom");
var fOutput = document.getElementById("font-value");
fOutput.innerHTML = "Font size: " + fSlider.value; // Display the default slider value

var displayedName = document.getElementById('designed-name');
fSlider.oninput = function() {
  fOutput.innerHTML = "Font size: " + this.value;
  displayedName.style.fontSize = "" + this.value+ "px";
} 


/////////////////////////////////////////////////////////////////////////////////////////////////////////
// BACKGROUND CHANGE

function readBackground(input) {
  if (input.files && input.files[0]) {
      var reader = new FileReader();

      reader.onload = function (e) {
          $('.preview-card').css('background-image', 'url("' + e.target.result + '")');
      };

      reader.readAsDataURL(input.files[0]);
  }
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////
// QR GENERATOR

// create QR code
var qrcode = new QRCode("qr-code");
var displayedQR = new QRCode('qr-scan');

function makeCode () {    
  var qrTxt = document.getElementById("qr-text"); // get text from input field
  if (!qrTxt.value) { // if empty string
    alert("QR text can not be empty. Please fill in a message or provide a link.");
    qrTxt.focus();
    return;
  }
  qrcode.makeCode(qrTxt.value);
  displayedQR.makeCode(qrTxt.value);
}

makeCode(); // make code for the initial text value

$("#qr-text").
  on("blur", function (){ // if not on focus (click outside the field)
    makeCode();
  }).
  on("keydown", function (e) {
    if (e.keyCode == 13) { // enter press
        makeCode();
    }
  });


// change QR image size
var qrSlider = document.getElementById("qr-zoom");
var qrOutput = document.getElementById("qr-zoom-value");
qrOutput.innerHTML = "Zoom percent: " + qrSlider.value; // Display the default slider value

qrSlider.oninput = function() {
  qrOutput.innerHTML = "Zoom percent: " + this.value;
  fixWidth = 128;
  newWidth = parseInt(this.value/100 * fixWidth);
  $('#qr-scan').width(newWidth);
} 

/////////////////////////////////////////////////////////////////////////////////////////////////////////
// LOGO SLIDER


$('.logo-slider').owlCarousel({
  autoplay: true,
  autoplayTimeout: 3000,
  autoplayHoverPause: false,
  loop:true,
  nav:true,
  dots: false,
  autoHeight: false,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:3
      },
      1000:{
          items:5
      }
  }
});