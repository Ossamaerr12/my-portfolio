        // JavaScript لإظهار أو إخفاء القائمة عند الضغط على زر burger menu
        document.getElementById('burger-menu').addEventListener('click', function() {
            const navMenu = document.getElementById('nav-menu').querySelector('ul');
            navMenu.classList.toggle('active');
        });

// مصفوفة العبارات التي ستظهر بشكل متتابع
const texts = ["Web Developer", "Designer","Freelancer","Mobile Developer", "Desktop app Developer"];
let index = 0;
const dynamicText = document.querySelector(".dynamic-text");

// دالة لتغيير النصوص تلقائيًا
function changeText() {
    dynamicText.classList.remove("show"); // إخفاء النص قبل التغيير
    setTimeout(() => {
        dynamicText.textContent = texts[index]; // تحديث النص
        dynamicText.classList.add("show"); // إظهار النص الجديد
        index = (index + 1) % texts.length; // الانتقال إلى العبارة التالية
    }, 500); // الانتظار نصف ثانية قبل عرض العبارة الجديدة
}
// إظهار السهم عند تمرير الصفحة
window.onscroll = function() {showArrow()};

function showArrow() {
    var arrow = document.getElementById("scroll-to-top");
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        arrow.style.display = "block"; // عرض السهم
    } else {
        arrow.style.display = "none"; // إخفاء السهم
    }
};


// عند النقر على السهم، إظهار الفوتر
document.querySelector('.scroll-to-top').addEventListener('click', function() {
    document.querySelector('footer').classList.toggle('show-footer');
});

// تغيير النص كل 3 ثواني
setInterval(changeText, 2000);


particlesJS("particles-js", {
    "particles": {
        "number": {
            "value": 300,
            "density": {
                "enable": true,
                "value_area": 800
            }
        },
        "color": {
            "value": "#242323"
        },
        "shape": {
            "type": "circle",
            "stroke": {
                "width": 0,
                "color": "#fff"
            },
            "polygon": {
                "nb_sides": 5
            },
            "image": {
                "src": "img/github.svg",
                "width": 100,
                "height": 100
            }
        },
        "opacity": {
            "value": 0.5,
            "random": false,
            "anim": {
                "enable": false,
                "speed": 1,
                "opacity_min": 0.1,
                "sync": false
            }
        },
        "size": {
            "value": 3,
            "random": true,
            "anim": {
                "enable": false,
                "speed": 40,
                "size_min": 0.1,
                "sync": false
            }
        },
        "line_linked": {
            "enable": true,
            "distance": 150,
            "color": "#242323",
            "opacity": 0.4,
            "width": 1
        },
        "move": {
            "enable": true,
            "speed": 6,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 1200
            }
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": true,
                "mode": "repulse"
            },
            "onclick": {
                "enable": true,
                "mode": "push"
            },
            "resize": true
        },
        "modes": {
            "grab": {
                "distance": 400,
                "line_linked": {
                    "opacity": 1
                }
            },
            "bubble": {
                "distance": 400,
                "size": 40,
                "duration": 2,
                "opacity": 8,
                "speed": 3
            },
            "repulse": {
                "distance": 200,
                "duration": 0.4
            },
            "push": {
                "particles_nb": 4
            },
            "remove": {
                "particles_nb": 2
            }
        }
    },
    "retina_detect": true
});

