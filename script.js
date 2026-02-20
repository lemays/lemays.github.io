/**
 * Lemays Valdés - Músico Instrumentista
 * Interactive functionality
 */

document.addEventListener('DOMContentLoaded', () => {
  // Elements
  const header = document.querySelector('.header');
  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('.section');

  // ========================================
  // Header scroll effect
  // ========================================
  function handleScroll() {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }

  window.addEventListener('scroll', handleScroll, { passive: true });

  // ========================================
  // Mobile menu toggle
  // ========================================
  menuToggle.addEventListener('click', () => {
    nav.classList.toggle('active');
    
    // Animate hamburger
    const spans = menuToggle.querySelectorAll('span');
    if (nav.classList.contains('active')) {
      spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
      spans[1].style.opacity = '0';
      spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
    } else {
      spans[0].style.transform = 'none';
      spans[1].style.opacity = '1';
      spans[2].style.transform = 'none';
    }
  });

  // Close mobile menu when clicking a link
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('active');
      const spans = menuToggle.querySelectorAll('span');
      spans[0].style.transform = 'none';
      spans[1].style.opacity = '1';
      spans[2].style.transform = 'none';
    });
  });

  // ========================================
  // Active nav link on scroll
  // ========================================
  function updateActiveNav() {
    const scrollPosition = window.scrollY + 100;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');

      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }

  window.addEventListener('scroll', updateActiveNav, { passive: true });

  // ========================================
  // Intersection Observer for fade-in animations
  // ========================================
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);

  // Observe all sections
  sections.forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    section.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    observer.observe(section);
  });

  // ========================================
  // Smooth scroll for anchor links
  // ========================================
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        const headerOffset = 80;
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  // ========================================
  // Instrument cards hover effect
  // ========================================
  const instrumentCards = document.querySelectorAll('.instrument-card');
  
  instrumentCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.style.transition = 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)';
    });
  });

  // ========================================
  // Typing effect for hero title
  // ========================================
  const heroTitle = document.querySelector('.hero-title');
  const heroPretitle = document.querySelector('.hero-pretitle');
  
  if (heroTitle && heroPretitle) {
    heroTitle.style.opacity = '0';
    heroPretitle.style.opacity = '0';
    
    setTimeout(() => {
      heroPretitle.style.transition = 'opacity 0.8s ease-out';
      heroPretitle.style.opacity = '1';
    }, 300);
    
    setTimeout(() => {
      heroTitle.style.transition = 'opacity 1s ease-out';
      heroTitle.style.opacity = '1';
    }, 600);
  }

  // ========================================
  // Console greeting
  // ========================================
  console.log('%c🎵 ¡Bienvenido! ', 'font-size: 24px; font-weight: bold; color: #c9a86c;');
  console.log('%cPortafolio de Lemays Valdés - Músico Instrumentista', 'font-size: 14px; color: #b8a89a;');
  console.log('%cContrabajo · Bajo Eléctrico · Piano', 'font-size: 12px; color: #7a6b5f;');
});
