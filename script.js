


searchForm = document.querySelector(".search-form");

document.querySelector("#search-btn").onclick = () => {
    searchForm.classList.toggle("active");
}

window.onscroll = () =>{
    searchForm.classList.remove("active");

    if(window.scrollY > 80){
        document.querySelector(".header .header-2").classList.add("active");
    }else{
        document.querySelector(".header .header-2").classList.remove("active");
    }
}

window.onload = () =>{

    if(window.scrollY > 80){
        document.querySelector(".header .header-2").classList.add("active");
    }else{
        document.querySelector(".header .header-2").classList.remove("active");
    }

    fadeOut();
}


function loader(){
    document.querySelector('.cargando-container').classList.add('active');
    }

function fadeOut(){
    setTimeout(loader, 600);
}


var swiper = new Swiper(".lib-slider", {
    loop:true,
    centeredSlides: true,
    autoplay: {
        delay: 2200,
        disableOnInteraction: false,
    },
    breakpoints: {
        0: {
        slidesPerView: 1,
        },
        768: {
        slidesPerView: 2,
        },
        1024: {
        slidesPerView: 3,
        },
    },
});

var swiper = new Swiper(".featured-slider", {
    spaceBetween: 10,
    loop:true,
    centeredSlides: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0: {
        slidesPerView: 1,
        },
        450: {
        slidesPerView: 2,
        },
        768: {
        slidesPerView: 3,
        },
        1024: {
        slidesPerView: 4,
        },
    },
});

var swiper = new Swiper(".article-slider", {
    spaceBetween: 10,
    loop:true,
    centeredSlides: true,
    autoplay: {
        delay: 3300,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0: {
        slidesPerView: 1,
        },
        768: {
        slidesPerView: 2,
        },
        1024: {
        slidesPerView: 3,
        },
    },
});

var swiper = new Swiper(".blogs-slider", {
    spaceBetween: 10,
    grabCursor:true,
    loop:true,
    centeredSlides: true,
    autoplay: {
        delay: 4500,
        disableOnInteraction: false,
    },
    breakpoints: {
        0: {
        slidesPerView: 1,
        },
        768: {
        slidesPerView: 2,
        },
        1024: {
        slidesPerView: 3,
        },
    },
});

var countDownDate = new Date("Feb 17,2024 00:00:00 ").getTime();
var x= setInterval(function(){
    var now = new Date().getTime();
    var distance = countDownDate - now;

    
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementsById("hours").innerHTML = hours;
    document.getElementsById("minutes").innerHTML = minutes;
    document.getElementsById("seconds").innerHTML = seconds;
},1000);

function showAlert() {
    var email = document.getElementById('email').value;

    
    setTimeout(function() {
        
        alert('Subscription information sent on ' + email);
    }, 1000); //  1-second delay
    return false; // 
}


function toggleDropdown() {
    var dropdownMenu = document.getElementById("userDropdown");
    dropdownMenu.classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.fas.fa-user')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}