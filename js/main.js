(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();


    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 45) {
            $('.navbar').addClass('sticky-top shadow-sm');
        } else {
            $('.navbar').removeClass('sticky-top shadow-sm');
        }
    });


    // Dropdown on mouse hover
    const $dropdown = $(".dropdown");
    const $dropdownToggle = $(".dropdown-toggle");
    const $dropdownMenu = $(".dropdown-menu");
    const showClass = "show";

    $(window).on("load resize", function () {
        if (this.matchMedia("(min-width: 992px)").matches) {
            $dropdown.hover(
                function () {
                    const $this = $(this);
                    $this.addClass(showClass);
                    $this.find($dropdownToggle).attr("aria-expanded", "true");
                    $this.find($dropdownMenu).addClass(showClass);
                },
                function () {
                    const $this = $(this);
                    $this.removeClass(showClass);
                    $this.find($dropdownToggle).attr("aria-expanded", "false");
                    $this.find($dropdownMenu).removeClass(showClass);
                }
            );
        } else {
            $dropdown.off("mouseenter mouseleave");
        }
    });


    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
        return false;
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: true,
        margin: 24,
        dots: true,
        loop: true,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            }
        }
    });

})(jQuery);

/*My script*/


// Function to handle horizontal scrolling
function scrollHorizontal(direction, containerId) {
    const container = document.getElementById(containerId);
    const scrollAmount = 1117; // Adjust the scroll amount as needed
    container.scrollBy({
        top: 0,
        left: direction * scrollAmount,
        behavior: 'smooth'
    });
}

// Add event listener to each prev button
const prevBtns = document.querySelectorAll('.prev-btn');
prevBtns.forEach(btn => {
    btn.addEventListener('click', function () {
        const containerId = this.dataset.container;
        scrollHorizontal(-1, containerId);
    });
});

// Add event listener to each next button
const nextBtns = document.querySelectorAll('.next-btn');
nextBtns.forEach(btn => {
    btn.addEventListener('click', function () {
        const containerId = this.dataset.container;
        scrollHorizontal(1, containerId);
    });
});
// Set titles
window.onload = function () {
    var elements = document.querySelectorAll('.hotel-header');
    elements.forEach(function (element) {
        element.setAttribute('title', element.textContent.trim());
    });
}

document.addEventListener("DOMContentLoaded", function () {
    const carousels = document.querySelectorAll('.carousel-inner');
    for (let i = 0; i < carousels.length; i++) {
        const components = carousels[i].querySelectorAll('.component');
        for (let j = 0; j < components.length; j++) {
            showSlides(i,j, 1);
        }
    }
});

let slideIndex = [];

function showSlides(carouselsIndex,componentIndex, n) {
    const carousels = document.querySelectorAll('.carousel-inner')[carouselsIndex];
    const component = carousels.querySelectorAll('.component')[componentIndex];
    const slides = component.getElementsByClassName("mySlides");
    const dots = component.getElementsByClassName("demo");
    if (!slideIndex[componentIndex]) {
        slideIndex[componentIndex] = 1;
    }
    if (n > slides.length) { slideIndex[componentIndex] = 1; }
    if (n < 1) { slideIndex[componentIndex] = slides.length; }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex[componentIndex] - 1].style.display = "block";
    dots[slideIndex[componentIndex] - 1].className += " active";
}

function plusSlides(carouselsIndex,componentIndex, n) {
    showSlides(carouselsIndex, componentIndex, slideIndex[componentIndex] += n);
}

function currentSlide(carouselsIndex,componentIndex, n) {
    showSlides(carouselsIndex, componentIndex, slideIndex[componentIndex] = n);
}


document.addEventListener("DOMContentLoaded", function() {
    // Smooth scroll function
    function scrollToSection(offset) {
        window.scrollTo({
            top: offset - window.innerHeight / 5.5, // Adjusted scroll position
            behavior: "smooth" // Smooth scrolling
        });
    }

    // Event listener for clicking on any <a> tag
    document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
        anchor.addEventListener("click", function(event) {
            event.preventDefault(); // Prevent default link behavior
            var targetId = this.getAttribute("href").substring(1); // Get target section id
            var targetSection = document.getElementById(targetId); // Get target section element
            if (targetSection) {
                var offset = targetSection.offsetTop; // Calculate the offset of the target section
                scrollToSection(offset); // Call the scroll function with adjusted offset
            }
        });
    });
});

function myFunction() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1 && filter != "") {//change here
            li[i].style.display = "";
            li[i].style.visibility = "visible";//change here
        } else {
            li[i].style.display = "none";
        }
    }
}