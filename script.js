
document.addEventListener('DOMContentLoaded', function() {
  if (document.getElementById('particles-js')) {
    particlesJS('particles-js', {
      "particles": {
        "number": {
          "value": 80,
          "density": {
            "enable": true,
            "value_area": 800
          }
        },
        "color": {
          "value": "#ffffff"
        },
        "shape": {
          "type": "circle",
          "stroke": {
            "width": 0,
            "color": "#000000"
          },
          "polygon": {
            "nb_sides": 5
          }
        },
        "opacity": {
          "value": 0.2,
          "random": true,
          "anim": {
            "enable": true,
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
          "color": "#ffffff",
          "opacity": 0.1,
          "width": 1
        },
        "move": {
          "enable": true,
          "speed": 2,
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
            "mode": "grab"
          },
          "onclick": {
            "enable": true,
            "mode": "push"
          },
          "resize": true
        },
        "modes": {
          "grab": {
            "distance": 140,
            "line_linked": {
              "opacity": 0.3
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
  }

  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', function() {
      hamburger.classList.toggle('active');
      navLinks.classList.toggle('active');
      
      // Prevent body scrolling when menu is open
      if (document.body.style.overflow === 'hidden') {
        document.body.style.overflow = '';
      } else {
        document.body.style.overflow = 'hidden';
      }
    });
  
    const navLinksArray = document.querySelectorAll('.nav-links a');
    navLinksArray.forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
        document.body.style.overflow = '';
      });
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
      if (navLinks.classList.contains('active') && 
          !navLinks.contains(event.target) && 
          !hamburger.contains(event.target)) {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
    
    // Add touch event handler for mobile swipe to close menu
    let touchstartX = 0;
    navLinks.addEventListener('touchstart', function(event) {
      touchstartX = event.changedTouches[0].screenX;
    });
    
    navLinks.addEventListener('touchend', function(event) {
      const touchendX = event.changedTouches[0].screenX;
      const difference = touchstartX - touchendX;
      
      // If swipe left (for RTL languages like English)
      if (difference > 50) {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  }

  const scrollElements = document.querySelectorAll('.mission, .about, .locations, .donate, .what-is-hacking, .github-setup, .ysws');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('scrolled');
      }
    });
  }, {
    threshold: 0.1
  });
  
  scrollElements.forEach(el => {
    observer.observe(el);
  });
  
  scrollElements.forEach((el) => {
    const rect = el.getBoundingClientRect();
    if (rect.top <= window.innerHeight * 0.8) {
      el.classList.add('scrolled');
    }
  });

  const mainDonateButton = document.querySelector('.donate-btn-main');
  
  if (mainDonateButton) {
    mainDonateButton.addEventListener('mouseenter', function() {
      const icon = this.querySelector('i');
      if (icon) {
        icon.style.transform = 'scale(1.2)';
      }
    });
    
    mainDonateButton.addEventListener('mouseleave', function() {
      const icon = this.querySelector('i');
      if (icon) {
        icon.style.transform = '';
      }
    });
  }

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      if(targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if(targetElement) {
        const highlightEffect = () => {
          targetElement.style.transition = 'box-shadow 0.5s ease-in-out';
          targetElement.style.boxShadow = '0 0 20px rgba(236, 55, 80, 0.3)';
          
          setTimeout(() => {
            targetElement.style.boxShadow = '';
            setTimeout(() => {
              targetElement.style.transition = '';
            }, 500);
          }, 800);
        };
        
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
        
        setTimeout(highlightEffect, 800);
      }
    });
  });

  const addHoverEffects = () => {
    document.querySelectorAll('.social-icon').forEach(icon => {
      icon.addEventListener('mouseenter', () => {
        icon.querySelector('i').style.transition = 'transform 0.3s ease';
        icon.querySelector('i').style.transform = 'scale(1.2)';
      });
      
      icon.addEventListener('mouseleave', () => {
        icon.querySelector('i').style.transform = '';
      });
    });

    document.querySelectorAll('.btn').forEach(btn => {
      btn.addEventListener('mouseenter', () => {
        if (btn.querySelector('i')) {
          btn.querySelector('i').style.transition = 'transform 0.3s ease';
          btn.querySelector('i').style.transform = 'translateX(3px)';
        }
      });
      
      btn.addEventListener('mouseleave', () => {
        if (btn.querySelector('i')) {
          btn.querySelector('i').style.transform = '';
        }
      });
    });
  };

  addHoverEffects();
  
  // Sidebar navigation for GitHub page
  const setupTabNavigation = () => {
    const sidebarLinks = document.querySelectorAll('.sidebar-link');
    
    if (sidebarLinks.length > 0) {
      sidebarLinks.forEach(link => {
        link.addEventListener('click', function(e) {
          e.preventDefault();
          
          // Update active tab
          sidebarLinks.forEach(l => l.classList.remove('active'));
          this.classList.add('active');
          
          // Scroll to section
          const targetId = this.getAttribute('href');
          const targetElement = document.querySelector(targetId);
          
          if (targetElement) {
            const offsetTop = targetElement.offsetTop - 100;
            window.scrollTo({
              top: offsetTop,
              behavior: 'smooth'
            });
          }
        });
      });
      
      // Update active sidebar item on scroll
      window.addEventListener('scroll', function() {
        const sections = document.querySelectorAll('.github-step, #github-intro');
        let currentSection = '';
        
        sections.forEach(section => {
          const sectionTop = section.offsetTop - 150;
          const sectionHeight = section.offsetHeight;
          
          if (window.pageYOffset >= sectionTop && window.pageYOffset < sectionTop + sectionHeight) {
            currentSection = '#' + section.getAttribute('id');
          }
        });
        
        if (currentSection) {
          sidebarLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === currentSection) {
              link.classList.add('active');
            }
          });
        }
      });
    }
  };
  
  // Call tab navigation setup
  setupTabNavigation();
});