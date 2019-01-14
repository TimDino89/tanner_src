'use strict';

// Viewport Checker 
new WOW().init();

// Preloader
var preloader = document.querySelector('.js-preloader');
var scale = document.querySelector('.loader__fill');
var images = document.querySelectorAll('img');
var imagesTotalCount = images.length;
var imagesTotalLoaded = 0;
var percentage = document.querySelector('.loader__perc'); 

for (var i = 0; i < imagesTotalCount; i++) {
    var imageClone = new Image();
        imageClone.onload = imageLoaded;
        imageClone.onerror = imageLoaded;
        imageClone.src = images[i].src;
}

function imageLoaded() {
    imagesTotalLoaded++;

    var perc = Math.round((100 / imagesTotalCount) * imagesTotalLoaded) + '%';

    percentage.innerHTML = perc;
    scale.style.width = perc;

    if (imagesTotalLoaded >= imagesTotalCount) {
        setTimeout(function() {
                    if (!preloader.classList.contains('done')) {
                        preloader.classList.add('done');
                    }
                }, 1000);
    }
};

