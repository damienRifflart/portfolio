//Smooth Scroll with anchor element
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
          e.preventDefault();
  
          document.querySelector(this.getAttribute('href')).scrollIntoView({
              behavior: 'smooth'
          });
      });
});

// Appearing Widgets Manager
width = document.body.clientWidth
height = document.body.clientHeight

let lastScrollTop = 0;
window.addEventListener('scroll', () => {
    const st = window.scrollY;
    const direction = st > lastScrollTop ? 'down' : 'up';
    lastScrollTop = st;

    const sections = document.querySelectorAll('.section');
    sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.top >= 0) {
            if (direction === 'down') {
                section.classList.add('scrollEffect'); 
            } else {
                section.classList.remove('scrollEffect');
            }

        }
    });
});

// Typing effect
const dynamicText = document.getElementById('animatedTxt')
const words = ["Bonjour !", "Hallo !", "Hello !", "Holla !"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
function typeEffect() {
    const currentWord = words[wordIndex];
    const currentChar = currentWord.substring(0, charIndex);
    dynamicText.textContent = currentChar;

    if (!isDeleting && charIndex < currentWord.length) {
        // If condition is true, type the next character
        charIndex++;
        setTimeout(typeEffect, 150);
    } else if (isDeleting && charIndex > 0) {
        // If condition is true, remove the previous character
        charIndex--;
        setTimeout(typeEffect, 100);
    } else {
        // Inverse the value of isDeleting
        // If isDeleting is false then type the next word, and if it's the last word, redo the list and type the first one.
        isDeleting = !isDeleting;
        wordIndex = !isDeleting ? (wordIndex + 1) % words.length : wordIndex;
        setTimeout(typeEffect, 200);
    }
}
typeEffect();

// Popup Manager
function openPopup(popupId) {
    var popup = document.querySelector(popupId);
    popup.classList.add('open');
    $(popup).show()
}

const closePopup = popup => setTimeout(() => $(popup).hide(), 100);

$(document).keydown(event => event.key === "Escape" && $('#popup').is(':visible') ? closePopup('#popup') : null);
