document.addEventListener('DOMContentLoaded', () => {
  initMobileMenu();
  initProductCards();
  initCategoryTabs();
  initRecentlyViewedSlider();
  initWishlist();
  initSmoothScroll();
  initScrollAnimations();
  initHeaderScroll();
  initCartCounter();
});

function initMobileMenu() {
  const menuToggle = document.querySelector('.mobile-menu-toggle');
  const navMenu = document.querySelector('.nav-menu');

  if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
      navMenu.classList.toggle('active');
      menuToggle.classList.toggle('active');

      const spans = menuToggle.querySelectorAll('span');
      if (menuToggle.classList.contains('active')) {
        spans[0].style.transform = 'rotate(45deg) translateY(10px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translateY(-10px)';
      } else {
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
      }
    });

    navMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        menuToggle.classList.remove('active');
        const spans = menuToggle.querySelectorAll('span');
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
      });
    });
  }
}

function initProductCards() {
  const productCards = document.querySelectorAll('.product-card, .recent-product-card');

  productCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
    });

    card.addEventListener('click', (e) => {
      if (!e.target.closest('.wishlist-btn')) {
        const ripple = document.createElement('div');
        ripple.style.position = 'absolute';
        ripple.style.borderRadius = '50%';
        ripple.style.background = 'rgba(26, 58, 52, 0.3)';
        ripple.style.width = '20px';
        ripple.style.height = '20px';
        ripple.style.left = e.offsetX + 'px';
        ripple.style.top = e.offsetY + 'px';
        ripple.style.transform = 'translate(-50%, -50%)';
        ripple.style.animation = 'ripple 0.6s ease-out';

        card.style.position = 'relative';
        card.appendChild(ripple);

        setTimeout(() => ripple.remove(), 600);
      }
    });
  });

  const style = document.createElement('style');
  style.textContent = `
    @keyframes ripple {
      to {
        transform: translate(-50%, -50%) scale(20);
        opacity: 0;
      }
    }
  `;
  document.head.appendChild(style);
}

function initCategoryTabs() {
  const tabButtons = document.querySelectorAll('.tab-btn');

  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      tabButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const category = btn.dataset.category;
      animateProductsGrid();
    });
  });
}

function animateProductsGrid() {
  const grid = document.getElementById('bestseller-grid');
  const cards = grid.querySelectorAll('.product-card');

  cards.forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';

    setTimeout(() => {
      card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
      card.style.opacity = '1';
      card.style.transform = 'translateY(0)';
    }, index * 100);
  });
}

function initRecentlyViewedSlider() {
  const leftArrow = document.querySelector('.slider-arrow-left');
  const rightArrow = document.querySelector('.slider-arrow-right');
  const grid = document.querySelector('.recently-viewed-grid');

  if (!leftArrow || !rightArrow || !grid) return;

  let scrollAmount = 0;
  const cardWidth = 230;

  leftArrow.addEventListener('click', () => {
    grid.scrollBy({
      left: -cardWidth,
      behavior: 'smooth'
    });
    addArrowFeedback(leftArrow);
  });

  rightArrow.addEventListener('click', () => {
    grid.scrollBy({
      left: cardWidth,
      behavior: 'smooth'
    });
    addArrowFeedback(rightArrow);
  });

  grid.addEventListener('scroll', () => {
    const isAtStart = grid.scrollLeft === 0;
    const isAtEnd = grid.scrollLeft + grid.clientWidth >= grid.scrollWidth - 1;

    leftArrow.style.opacity = isAtStart ? '0.3' : '1';
    leftArrow.style.cursor = isAtStart ? 'not-allowed' : 'pointer';
    rightArrow.style.opacity = isAtEnd ? '0.3' : '1';
    rightArrow.style.cursor = isAtEnd ? 'not-allowed' : 'pointer';
  });

  let autoScrollInterval = setInterval(() => {
    if (grid.scrollLeft + grid.clientWidth >= grid.scrollWidth - 1) {
      grid.scrollTo({ left: 0, behavior: 'smooth' });
    } else {
      grid.scrollBy({ left: cardWidth, behavior: 'smooth' });
    }
  }, 4000);

  grid.addEventListener('mouseenter', () => {
    clearInterval(autoScrollInterval);
  });

  grid.addEventListener('mouseleave', () => {
    autoScrollInterval = setInterval(() => {
      if (grid.scrollLeft + grid.clientWidth >= grid.scrollWidth - 1) {
        grid.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        grid.scrollBy({ left: cardWidth, behavior: 'smooth' });
      }
    }, 4000);
  });
}

function addArrowFeedback(arrow) {
  arrow.style.transform = 'translateY(-50%) scale(0.9)';
  setTimeout(() => {
    arrow.style.transform = 'translateY(-50%) scale(1)';
  }, 150);
}

function initWishlist() {
  const wishlistBtns = document.querySelectorAll('.wishlist-btn');
  let wishlistCount = 0;

  wishlistBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();

      const svg = btn.querySelector('svg');
      const isActive = btn.classList.toggle('active');

      if (isActive) {
        svg.style.fill = '#d4af37';
        svg.style.stroke = '#d4af37';
        wishlistCount++;

        createFloatingHeart(e.clientX, e.clientY);
      } else {
        svg.style.fill = 'none';
        svg.style.stroke = 'currentColor';
        wishlistCount = Math.max(0, wishlistCount - 1);
      }

      btn.style.transform = 'scale(1.2)';
      setTimeout(() => {
        btn.style.transform = 'scale(1)';
      }, 200);
    });
  });
}

function createFloatingHeart(x, y) {
  const heart = document.createElement('div');
  heart.innerHTML = '❤️';
  heart.style.position = 'fixed';
  heart.style.left = x + 'px';
  heart.style.top = y + 'px';
  heart.style.fontSize = '24px';
  heart.style.zIndex = '9999';
  heart.style.pointerEvents = 'none';
  heart.style.animation = 'floatUp 1.5s ease-out forwards';

  document.body.appendChild(heart);

  setTimeout(() => heart.remove(), 1500);

  const style = document.createElement('style');
  style.textContent = `
    @keyframes floatUp {
      to {
        transform: translateY(-100px);
        opacity: 0;
      }
    }
  `;
  if (!document.querySelector('style[data-float-heart]')) {
    style.setAttribute('data-float-heart', '');
    document.head.appendChild(style);
  }
}

function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href === '#' || href === '#!') return;

      e.preventDefault();
      const target = document.querySelector(href);

      if (target) {
        const headerOffset = 100;
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
}

function initScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);

  const animateElements = document.querySelectorAll(
    '.section-title, .section-subtitle, .product-card, .gift-card, .trust-badge, .testimonial-card, .collection-item'
  );

  animateElements.forEach((el, index) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = `opacity 0.6s ease ${index * 0.05}s, transform 0.6s ease ${index * 0.05}s`;
    observer.observe(el);
  });
}

function initHeaderScroll() {
  const header = document.querySelector('.header');
  let lastScroll = 0;

  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
      header.style.boxShadow = '0 4px 20px rgba(0,0,0,0.1)';
    } else {
      header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.05)';
    }

    if (currentScroll > lastScroll && currentScroll > 200) {
      header.style.transform = 'translateY(-100%)';
    } else {
      header.style.transform = 'translateY(0)';
    }

    lastScroll = currentScroll;
  });

  header.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
}

function initCartCounter() {
  const cartIcon = document.querySelector('.cart-icon');
  const cartCount = document.querySelector('.cart-count');
  let count = 0;

  document.querySelectorAll('.btn').forEach(btn => {
    if (btn.textContent.includes('Shop')) {
      btn.addEventListener('click', (e) => {
        if (!btn.closest('footer')) {
          e.preventDefault();
          count++;
          cartCount.textContent = count;

          cartIcon.style.animation = 'cartBounce 0.5s ease';
          setTimeout(() => {
            cartIcon.style.animation = '';
          }, 500);

          showNotification('Item added to cart!');
        }
      });
    }
  });

  const style = document.createElement('style');
  style.textContent = `
    @keyframes cartBounce {
      0%, 100% { transform: scale(1); }
      50% { transform: scale(1.2); }
    }
  `;
  document.head.appendChild(style);
}

function showNotification(message) {
  const notification = document.createElement('div');
  notification.textContent = message;
  notification.style.position = 'fixed';
  notification.style.top = '100px';
  notification.style.right = '20px';
  notification.style.backgroundColor = '#1a3a34';
  notification.style.color = 'white';
  notification.style.padding = '15px 25px';
  notification.style.borderRadius = '8px';
  notification.style.boxShadow = '0 4px 20px rgba(0,0,0,0.2)';
  notification.style.zIndex = '10000';
  notification.style.animation = 'slideInRight 0.3s ease';

  document.body.appendChild(notification);

  setTimeout(() => {
    notification.style.animation = 'slideOutRight 0.3s ease';
    setTimeout(() => notification.remove(), 300);
  }, 2000);

  const style = document.createElement('style');
  style.textContent = `
    @keyframes slideInRight {
      from {
        transform: translateX(400px);
        opacity: 0;
      }
      to {
        transform: translateX(0);
        opacity: 1;
      }
    }
    @keyframes slideOutRight {
      from {
        transform: translateX(0);
        opacity: 1;
      }
      to {
        transform: translateX(400px);
        opacity: 0;
      }
    }
  `;
  if (!document.querySelector('style[data-notification]')) {
    style.setAttribute('data-notification', '');
    document.head.appendChild(style);
  }
}

document.addEventListener('mousemove', (e) => {
  const featureBadges = document.querySelectorAll('.feature-badge');

  featureBadges.forEach((badge, index) => {
    const rect = badge.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    const distance = Math.sqrt(x * x + y * y);

    if (distance < 200) {
      const angle = Math.atan2(y, x);
      const moveX = Math.cos(angle) * (200 - distance) / 20;
      const moveY = Math.sin(angle) * (200 - distance) / 20;
      badge.style.transform = `translate(${-moveX}px, ${-moveY}px)`;
    } else {
      badge.style.transform = 'translate(0, 0)';
    }
  });
});

window.addEventListener('load', () => {
  const loader = document.createElement('div');
  loader.style.position = 'fixed';
  loader.style.top = '0';
  loader.style.left = '0';
  loader.style.width = '100%';
  loader.style.height = '100%';
  loader.style.backgroundColor = 'white';
  loader.style.zIndex = '99999';
  loader.style.display = 'flex';
  loader.style.alignItems = 'center';
  loader.style.justifyContent = 'center';
  loader.style.transition = 'opacity 0.5s ease';

  const spinner = document.createElement('div');
  spinner.style.width = '50px';
  spinner.style.height = '50px';
  spinner.style.border = '4px solid #f5ebe0';
  spinner.style.borderTop = '4px solid #1a3a34';
  spinner.style.borderRadius = '50%';
  spinner.style.animation = 'spin 1s linear infinite';

  loader.appendChild(spinner);
  document.body.insertBefore(loader, document.body.firstChild);

  const style = document.createElement('style');
  style.textContent = `
    @keyframes spin {
      to { transform: rotate(360deg); }
    }
  `;
  document.head.appendChild(style);

  setTimeout(() => {
    loader.style.opacity = '0';
    setTimeout(() => loader.remove(), 500);
  }, 800);
});

const giftOptions = document.querySelectorAll('.gift-option');
giftOptions.forEach(option => {
  option.addEventListener('mouseenter', () => {
    option.style.boxShadow = '0 15px 40px rgba(0,0,0,0.3)';
  });

  option.addEventListener('mouseleave', () => {
    option.style.boxShadow = 'none';
  });
});

document.querySelectorAll('.btn').forEach(btn => {
  btn.addEventListener('mouseenter', function(e) {
    const ripple = document.createElement('span');
    ripple.style.position = 'absolute';
    ripple.style.borderRadius = '50%';
    ripple.style.background = 'rgba(255, 255, 255, 0.5)';
    ripple.style.width = '0';
    ripple.style.height = '0';
    ripple.style.left = '50%';
    ripple.style.top = '50%';
    ripple.style.transform = 'translate(-50%, -50%)';
    ripple.style.animation = 'btnRipple 0.6s ease-out';

    this.style.position = 'relative';
    this.style.overflow = 'hidden';
    this.appendChild(ripple);

    setTimeout(() => ripple.remove(), 600);
  });
});

const btnRippleStyle = document.createElement('style');
btnRippleStyle.textContent = `
  @keyframes btnRipple {
    to {
      width: 300px;
      height: 300px;
      opacity: 0;
    }
  }
`;
document.head.appendChild(btnRippleStyle);

let ticking = false;

window.addEventListener('scroll', () => {
  if (!ticking) {
    window.requestAnimationFrame(() => {
      parallaxEffect();
      ticking = false;
    });
    ticking = true;
  }
});

function parallaxEffect() {
  const scrolled = window.pageYOffset;
  const parallaxElements = document.querySelectorAll('.hero, .ethos-image img, .split-content');

  parallaxElements.forEach(el => {
    const speed = 0.5;
    const yPos = -(scrolled * speed);
    el.style.transform = `translateY(${yPos}px)`;
  });
}

const searchInput = document.querySelector('.search-bar input');
if (searchInput) {
  searchInput.addEventListener('focus', () => {
    searchInput.parentElement.style.boxShadow = '0 4px 20px rgba(212, 175, 55, 0.2)';
  });

  searchInput.addEventListener('blur', () => {
    searchInput.parentElement.style.boxShadow = 'none';
  });
}
