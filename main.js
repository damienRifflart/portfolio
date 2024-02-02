//Smooth Automatic Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
          e.preventDefault();
  
          document.querySelector(this.getAttribute('href')).scrollIntoView({
              behavior: 'smooth'
          });
      });
});

let lastScrollTop = 0;

window.addEventListener('scroll', () => {
    const st = window.scrollY;
    const direction = st > lastScrollTop ? 'down' : 'up';
    lastScrollTop = st;

    const sections = document.querySelectorAll('.section');
    sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
            if (direction === 'down') {
                section.classList.add('scrollEffect'); 
            } else {
                section.classList.remove('scrollEffect');
            }
        }
    });
});