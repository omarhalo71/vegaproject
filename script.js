const div2vid = document.getElementById("div2vids");
const vid2 = document.getElementById("ide2");
const biggercontainer = document.getElementById("biggercontainer");
const x22 = document.getElementById("x22");

div2vid.addEventListener("click", function () {
    idee2.classList.add("db");
    idee2.classList.remove("dn");
    
   
});
x22.addEventListener("click", function () {
    idee2.classList.add("dn");
    idee2.classList.remove("db");
    
   
});




const sliders = {
    slider1: {
        slideIndex: 1
    },
    slider2: {
        slideIndex: 1
    }
  };
  
  function showSlides(n, sliderId) {
    let i;
    let slider = document.getElementById(sliderId);
    let slides = slider.getElementsByClassName("mySlides");
    let dots = document.querySelectorAll(`#${sliderId} ~ div .dot`);
    if (n > slides.length) { sliders[sliderId].slideIndex = 1 }    
    if (n < 1) { sliders[sliderId].slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[sliders[sliderId].slideIndex - 1].style.display = "block";  
    dots[sliders[sliderId].slideIndex - 1].className += " active";
  }
  
  function plusSlides(n, sliderId) {
    showSlides(sliders[sliderId].slideIndex += n, sliderId);
  }
  
  function currentSlide(n, sliderId) {
    showSlides(sliders[sliderId].slideIndex = n, sliderId);
  }
  
 
  document.addEventListener("DOMContentLoaded", function() {
    showSlides(1, 'slider1');
    showSlides(1, 'slider2');
  });
  const question1 = document.getElementById("question1");
  const question1text = document.getElementById("question1text");
  const downicon = document.getElementById("downicon");
  const upicon = document.getElementById("topicon");
  
  
  const question2 = document.getElementById("question2");
  const question1text2 = document.getElementById("question1text2");
  const downicon2 = document.getElementById("downicon2");
  const upicon2 = document.getElementById("topicon2");
  
  
  const question3 = document.getElementById("question3");
  const question1text3 = document.getElementById("question1text3");
  const downicon3 = document.getElementById("downicon3");
  const upicon3 = document.getElementById("topicon3");
  
  
  
  question1.addEventListener("click", (params) => {
    question1text.classList.toggle("questiondn");
    downicon.classList.toggle("qdn");
    upicon.classList.toggle("qdn");
  
  });
  question2.addEventListener("click", (params) => {
    question1text2.classList.toggle("questiondn");
    downicon2.classList.toggle("qdn");
    upicon2.classList.toggle("qdn");
  
  });
  question3.addEventListener("click", (params) => {
    question1text3.classList.toggle("questiondn");
    downicon3.classList.toggle("qdn");
    upicon3.classList.toggle("qdn");
  
  });
  
  // تفعيل القائمة عند الضغط على الزر x2
document.getElementById('x2').addEventListener('click', function() {
    // إضافة الفئات للأجزاء المختلفة عند الضغط على الزر
    document.querySelector('nav').classList.add('nav-active');
    document.querySelector('.cloce').classList.add('cloce-active');
    document.querySelector('.adivs').classList.add('adivs-active');
    document.querySelector('.navlogo').classList.add('navlogo-active');
    
    // إضافة الفئات لكل div باستخدام className
    let divs = document.querySelectorAll('.adivs > div');
    divs.forEach(div => {
      div.classList.add('adiv-active');
    });
  });
  
  // إعادة الوضع الأصلي عند الضغط على الزر x3
  document.getElementById('x3').addEventListener('click', function() {
    // إزالة الفئات للأجزاء المختلفة عند الضغط على الزر
    document.querySelector('nav').classList.remove('nav-active');
    document.querySelector('.cloce').classList.remove('cloce-active');
    document.querySelector('.adivs').classList.remove('adivs-active');
    document.querySelector('.navlogo').classList.remove('navlogo-active');
    
    // إزالة الفئات لكل div باستخدام className
    let divs = document.querySelectorAll('.adivs > div');
    divs.forEach(div => {
      div.classList.remove('adiv-active');
    });
  });


  const x1 = document.getElementById("x2");
  const x2 = document.getElementById("x3");
  const adivs = document.getElementById("adivs");
  const navlogo = document.getElementById("navlogo");
  x1.addEventListener("click", (params) => {
    x2.classList.remove("ldn");
    x2.classList.add("ldb");
    x1.classList.add("ldn");
    x1.classList.remove("ldb");
    x1.classList.remove("xdn");
    adivs.classList.add("ldbm");
    navlogo.classList.add("ldn");
    navlogo.classList.remove("ldb");
  
  });
  
  x2.addEventListener("click", (params) => {
    x2.classList.add("ldn");
    x2.classList.remove("ldb");
    x1.classList.remove("ldn");
    x1.classList.add("ldb");
    adivs.classList.remove("ldbm");
    navlogo.classList.remove("ldn");
    navlogo.classList.add("ldb");
    x1.classList.add("xdn");
  
  });
  
