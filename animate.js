//toggle navbar icon with hamburger menu

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

//Highlight current Scroll Sections on navbar
let Sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    Sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });

            //active sections on scroll
            sec.classList.add('show-animate');

        }

        else{
            sec.classList.remove('show-animate')
        }

    });

    // remove navbar icons after click on hamburger menu (small screen)

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
}

