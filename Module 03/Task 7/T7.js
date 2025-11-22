
const ORIGINAL_IMAGE = "picA.jpg";
const HOVER_IMAGE = "picB.jpg";


const triggerElement = document.getElementById("trigger");
const targetImage = document.getElementById("target");

if (triggerElement && targetImage) {

    triggerElement.addEventListener("mouseover", function() {

        targetImage.src = HOVER_IMAGE;
    });


    triggerElement.addEventListener("mouseout", function() {

        targetImage.src = ORIGINAL_IMAGE;
    });
}