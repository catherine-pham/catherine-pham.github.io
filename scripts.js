function stickyNav() {
    var miniHeader = document.getElementById("miniHeader");
    var navTop = 0;
    console.log('stickyNav loaded');


    window.addEventListener('scroll', function () {
        if (window.scrollY >= navTop) {
            miniHeader.classList.add("sticky");
        } else {
            miniHeader.classList.remove("sticky");
        }
    });
}

function reactNav() {
    var x = document.getElementById("miniNavBar");
    if (x.classList.contains('responsive')) {
        x.classList.remove("responsive");
    } else {
        x.classList.add("responsive");
    }
}

function activeBar() {
    var about = document.getElementById("aboutBtn");
    var edu = document.getElementById("eduBtn");
    var pub = document.getElementById("pubBtn");
    var research = document.getElementById("researchBtn");

    var osAbout = $('#about').offset().top;
    var osEdu = $('#edu').offset().top;
    var osPub = $('#pub').offset().top;
    var osResearch = $('#research').offset().top;

    var navTop = window.scrollY;

    /*
    console.log('stickyNav loaded');
    console.log(navTop);
    console.log(osAbout);
    console.log(osEdu);
    console.log(osPub);
    console.log(osResearch);
    */

    window.addEventListener('scroll', function () {
        if (window.scrollY >= 0 && window.scrollY < osEdu) {
            about.classList.add("active");
        } else {
            about.classList.remove("active");
        }
        if (window.scrollY >= osEdu && window.scrollY < osPub) {
            edu.classList.add("active");
        } else {
            edu.classList.remove("active");
        }
        if (window.scrollY >= osPub && window.scrollY < osResearch) {
            pub.classList.add("active");
        } else {
            pub.classList.remove("active");
        }
        if (window.scrollY >= osResearch) {
            research.classList.add("active");
        } else {
            research.classList.remove("active");
        }
    })
};


function init() {
    activeBar();
    setActive();
}

$(window).resize(function () {
    activeBar();
});



function setActive() {
    var about = document.getElementById("aboutBtn");
    var edu = document.getElementById("eduBtn");
    var pub = document.getElementById("pubBtn");
    var research = document.getElementById("researchBtn");

    var osAbout = $('#about').offset().top;
    var osEdu = $('#edu').offset().top;
    var osPub = $('#pub').offset().top;
    var osResearch = $('#research').offset().top;

    var navTop = window.scrollY;

    if (window.scrollY >= 0 && window.scrollY < osEdu) {
        about.classList.add("active");
    } else {
        about.classList.remove("active");
    }
    if (window.scrollY >= osEdu && window.scrollY < osPub) {
        edu.classList.add("active");
    } else {
        edu.classList.remove("active");
    }
    if (window.scrollY >= osPub && window.scrollY < osResearch) {
        pub.classList.add("active");
    } else {
        pub.classList.remove("active");
    }
    if (window.scrollY >= osResearch) {
        research.classList.add("active");
    } else {
        research.classList.remove("active");
    }
}