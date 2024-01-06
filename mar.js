var bnt = document.getElementsByTagName("button")[0];
var image = document.getElementsByTagName("img");
var image1 = document.getElementsByClassName("mmm")[0];
var arr = [image[0], image[1], image[2], image[3], image[4], image[5], image1];
image1.style.visibility = "hidden"
image[0].style.visibility = "hidden"
image[7].style.visibility = "hidden"

var counter = 0;
bnt.addEventListener("click", function (e) {
   x= setInterval(function () {
        if (counter < 6) {
            image[counter].src = image[7].src
            counter++
            image[counter].src = arr[6].src

        }
        else if (counter >= 5) {
            counter = 0;
        }
    }, 300);
})

image[1].addEventListener("mouseenter", function (e) {
        clearTimeout(x);
});
image[2].addEventListener("mouseenter", function (e) {
        clearTimeout(x);
});
image[3].addEventListener("mouseenter", function (e) {
        clearTimeout(x);
});
image[4].addEventListener("mouseenter", function (e) {
        clearTimeout(x);
});
image[5].addEventListener("mouseenter", function (e) {
        clearTimeout(x);
});



