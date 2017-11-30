var myIndex2 = 0;
carousel2();

function carousel2() {
    var i;
    var x = document.getElementsByClassName("mySlides2");
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";  
    }
    myIndex2++;
    if (myIndex2 > x.length) {myIndex2 = 1}    
    x[myIndex2-1].style.display = "block";  
    setTimeout(carousel2, 4000); // Change image every 2 seconds
}


var slideIndex2 = 1;
showSlides2(slideIndex2);
function plusSlides2(n) {
  showSlides2(slideIndex2 += n);
}
function currentSlide2(n) {
  showSlides2(slideIndex2 = n);
}

function showSlides2(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides2");
  if (n > slides.length) {slideIndex2 = 1} 
  if (n < 1) {slideIndex2 = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  slides[slideIndex2-1].style.display = "block"; 
  dots[slideIndex2-1].className += " active";
}