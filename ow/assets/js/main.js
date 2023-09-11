/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
  navToggle = document.getElementById('nav-toggle'),
  navClose = document.getElementById('nav-close');

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu');
  });
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if (navClose) {
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu');
  });
}

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link');

function linkAction() {
  const navMenu = document.getElementById('nav-menu');
  // when we click on each nav__link, we remove the show-menu class
  navMenu.classList.remove('show-menu');
}

navLink.forEach((n) => n.addEventListener('click', linkAction));

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
// get all sections that have an id defined
const sections = document.querySelectorAll('section[id]');

// add an event listener listening for scroll
window.addEventListener('scroll', navHighlighter);

function navHighlighter() {
  // get current scroll position
  let scrollY = window.pageYOffset;
  // Now we loop through sections to get height, top and ID values for each
  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 10,
      sectionId = current.getAttribute('id');
    /* - If our current scroll position enters the space where current section on screen is, add .active class to corresponding navigation link, else remove it
    - To know which link needs an active class, we use sectionId variable we are getting while looping through sections as an selector */
    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector('.nav__menu a[href*=' + sectionId + ']')
        .classList.add('active-link');
    } else {
      document
        .querySelector('.nav__menu a[href*=' + sectionId + ']')
        .classList.remove('active-link');
    }
  });
}

/*==================== CHANGE BACKGROUND HEADER ====================*/
function scrollHeader() {
  const header = document.getElementById('header');
  // when the scroll is greater than 80 viewport height, add the scroll-header class to header tag
  if (this.scrollY >= 80) header.classList.add('scroll-header');
  else header.classList.remove('scroll-header');
}

window.addEventListener('scroll', scrollHeader);

/*==================== SHOW SCROLL UP ====================*/
function scrollUp() {
  const scrollUp = document.getElementById('scroll-up');
  // when the scroll is greater than 350 viewport height, add the show-scroll class to scrool-top class
  if (this.scrollY >= 350) scrollUp.classList.add('show-scroll');
  else scrollUp.classList.remove('show-scroll');
}

window.addEventListener('scroll', scrollUp);

/*==================== ABOUT TABS ====================*/
const tabs = document.querySelectorAll('[data-target]'),
  tabContents = document.querySelectorAll('[data-content]');

tabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    const target = document.querySelector(tab.dataset.target);

    tabContents.forEach((tabContent) => {
      tabContent.classList.remove('tab__active');
    });

    target.classList.add('tab__active');

    tabs.forEach((tab) => {
      tab.classList.remove('tab__active');
    });

    tab.classList.add('tab__active');
  });
});

const contactForm = document.getElementById('contact-form');
const btn = document.querySelector('.btn'); // Assuming you have a button with the class "btn"

contactForm.addEventListener('submit', function (event) {
  event.preventDefault();

  btn.value = 'Sending...';

  const serviceID = 'service_h1m0lbh'; // Replace with your actual EmailJS service ID
  const templateID = 'template_2gq6inp'; // Replace with your actual EmailJS template ID

  emailjs.sendForm(serviceID, templateID, this).then(
    () => {
      btn.value = 'Submit'; // Change back the button text
      alert('Message sent successfully!'); // You can replace this with your custom success message
    },
    (error) => {
      btn.value = 'Submit'; // Change back the button text
      alert('Oops! Something went wrong. Please try again later.'); // You can replace this with your custom error message
      console.error('EmailJS error:', error);
    }
  );

  contactForm.reset();
});



const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
    } else {
      entry.target.classList.remove('in-view');
    }
  });
}, {
  root: null,
  rootMargin: '0px',
  threshold: 0.2,
});

const servicesItems = document.querySelectorAll('.services__item');

servicesItems.forEach((item) => {
  observer.observe(item);
});
const observ = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
    } else {
      entry.target.classList.remove('in-view');
    }
  });
}, {
  root: null,
  rootMargin: '0px',
  threshold: 0.2,
});

const portfolioItems = document.querySelectorAll('.portfolio__item');

portfolioItems.forEach((item) => {
  observ.observe(item);
});
var loader = document.getElementById("preloader");
      window.addEventListener("load", function(){
        loader.style.display = "none";      
      });



