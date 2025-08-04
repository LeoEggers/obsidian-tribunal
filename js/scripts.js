/*!
* Start Bootstrap - Grayscale v7.0.6 (https://startbootstrap.com/theme/grayscale)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-grayscale/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Initialize audio elements
    const backgroundMusic = new Audio('./assets/sounds/ambient.mp3'); // Replace with your music file
    backgroundMusic.loop = true;
    backgroundMusic.volume = 0.3; // 30% volume

    const clickSound = new Audio('./assets/sounds/click.mp3'); // Replace with your click sound
    clickSound.volume = 0.5;

    // Play background music (with user interaction requirement)
    document.body.addEventListener('click', function initAudio() {
        backgroundMusic.play().catch(e => console.log("Audio playback failed:", e));
        document.body.removeEventListener('click', initAudio);
    }, { once: true });

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }
    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link, .btn, a[href^="#"]')
    );
    
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            // Play click sound
            clickSound.currentTime = 0; // Rewind to start if already playing
            clickSound.play().catch(e => console.log("Click sound failed:", e));
            
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    // Add sound to form submission
    const submitButton = document.getElementById('submitButton');
    if (submitButton) {
        submitButton.addEventListener('click', () => {
            const submitSound = new Audio('assets/sounds/submit.mp3');
            submitSound.volume = 0.7;
            submitSound.play().catch(e => console.log("Submit sound failed:", e));
        });
    }

});