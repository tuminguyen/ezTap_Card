(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
var saveBtn = document.getElementById('save');

saveBtn.onclick = function() {
    // WITHOUT SCALE
    var card = document.getElementById('preview'); 
    var options = {
        margin: 10,
        filename: 'ezTap-card-download(by_tuminguyen).pdf',
        image: { type: 'jpeg', quality: 1},
        html2canvas: {dpi: 300, logging:true, scale: 0.5},
        jsPDF: {format: 'a4', orientation:'portrait', unit:'mm'} // a4 size: 210x297mm

    };
    var exporter = new html2pdf(card, options);
} 


    
},{}]},{},[1]);
