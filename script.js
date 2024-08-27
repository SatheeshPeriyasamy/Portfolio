// Smooth Scrolling Effect for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // Active Link Highlight on Scroll
  window.addEventListener('scroll', function() {
    let navLinks = document.querySelectorAll('.nav-link');
    let fromTop = window.scrollY;
  
    navLinks.forEach(link => {
      let section = document.querySelector(link.hash);
  
      if (
        section.offsetTop <= fromTop &&
        section.offsetTop + section.offsetHeight > fromTop
      ) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  });
  
  // Dynamic Navbar Background Change on Scroll
  window.addEventListener('scroll', function() {
    let navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
  