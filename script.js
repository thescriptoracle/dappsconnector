
// DOM Elements
const root = document.documentElement;
const themeToggle = document.getElementById('theme-toggle');
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const mobileMenu = document.querySelector('.mobile-menu');
const mobileMenuClose = document.querySelector('.mobile-menu-close');
const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
const header = document.querySelector('.site-header');
const walletButtons = document.querySelectorAll('.wallet-button');
const currentYearSpan = document.getElementById('current-year');
const toastContainer = document.getElementById('toast-container');

// Initialize current year in footer
if (currentYearSpan) {
  currentYearSpan.textContent = new Date().getFullYear();
}

// Check for saved theme preference or use system preference
function getInitialTheme() {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    return savedTheme;
  }
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

// Apply theme
function setTheme(theme) {
  if (theme === 'dark') {
    document.body.classList.add('dark-theme');
  } else {
    document.body.classList.remove('dark-theme');
  }
  localStorage.setItem('theme', theme);
}

// Initialize theme
setTheme(getInitialTheme());

// Theme toggle functionality
if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    const currentTheme = localStorage.getItem('theme') || 'light';
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  });
}

// Mobile menu functionality
if (mobileMenuToggle && mobileMenu) {
  mobileMenuToggle.addEventListener('click', () => {
    mobileMenu.classList.add('active');
    document.body.style.overflow = 'hidden';
    mobileMenuToggle.querySelector('.menu-icon').style.display = 'none';
    mobileMenuToggle.querySelector('.close-icon').style.display = 'block';
  });
}

if (mobileMenuClose && mobileMenu) {
  mobileMenuClose.addEventListener('click', () => {
    mobileMenu.classList.remove('active');
    document.body.style.overflow = '';
    if (mobileMenuToggle) {
      mobileMenuToggle.querySelector('.menu-icon').style.display = 'block';
      mobileMenuToggle.querySelector('.close-icon').style.display = 'none';
    }
  });
}

// Close mobile menu when clicking a nav link
if (mobileNavLinks.length && mobileMenu) {
  mobileNavLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('active');
      document.body.style.overflow = '';
      if (mobileMenuToggle) {
        mobileMenuToggle.querySelector('.menu-icon').style.display = 'block';
        mobileMenuToggle.querySelector('.close-icon').style.display = 'none';
      }
    });
  });
}

// Header scroll effect
function handleScroll() {
  if (window.scrollY > 10) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
}

window.addEventListener('scroll', handleScroll);
handleScroll(); // Check on initial load

// Connect wallet functionality
function connectWallet(button) {
  // Don't do anything if already connecting
  if (button.classList.contains('loading')) {
    return;
  }
  
  // Update button state
  button.classList.add('loading');
  const buttonText = button.querySelector('.button-text') || button.querySelector('span');
  const originalText = buttonText.textContent;
  buttonText.textContent = 'Connecting...';
  
  // Simulate connection delay
  setTimeout(() => {
    // Reset button state
    button.classList.remove('loading');
    buttonText.textContent = originalText;
    
    // Show success toast
    showToast({
      title: 'Wallet Connected',
      description: 'Ready to diagnose and fix your transaction issues.',
      type: 'success',
      duration: 5000
    });
  }, 1500);
}

// Add click event to all wallet buttons
if (walletButtons.length) {
  walletButtons.forEach(button => {
    button.addEventListener('click', () => connectWallet(button));
  });
}

// Toast notification system
function showToast({ title, description, type = 'success', duration = 5000 }) {
  // Create toast element
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.setAttribute('role', 'alert');
  
  // Get appropriate icon based on type
  let iconSvg = '';
  if (type === 'success') {
    iconSvg = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>';
  } else if (type === 'error') {
    iconSvg = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>';
  } else if (type === 'warning') {
    iconSvg = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"></path><path d="M12 9v4"></path><path d="M12 17h.01"></path></svg>';
  } else if (type === 'info') {
    iconSvg = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>';
  }
  
  // Set toast content
  toast.innerHTML = `
    <div class="toast-icon">${iconSvg}</div>
    <div class="toast-content">
      <div class="toast-title">${title}</div>
      ${description ? `<div class="toast-description">${description}</div>` : ''}
    </div>
    <button class="toast-close" aria-label="Close">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <line x1="18" y1="6" x2="6" y2="18"></line>
        <line x1="6" y1="6" x2="18" y2="18"></line>
      </svg>
    </button>
  `;
  
  // Add close functionality
  const closeButton = toast.querySelector('.toast-close');
  closeButton.addEventListener('click', () => {
    dismissToast(toast);
  });
  
  // Add toast to container
  toastContainer.appendChild(toast);
  
  // Auto dismiss after duration
  const timeoutId = setTimeout(() => {
    dismissToast(toast);
  }, duration);
  
  // Store timeout ID for potential early dismissal
  toast.timeoutId = timeoutId;
  
  return toast;
}

function dismissToast(toast) {
  if (toast.classList.contains('hide')) return;
  
  clearTimeout(toast.timeoutId);
  toast.classList.add('hide');
  
  // Remove after animation completes
  setTimeout(() => {
    if (toast.parentNode) {
      toast.parentNode.removeChild(toast);
    }
  }, 300);
}

// Add animation delay to feature cards and security cards
document.addEventListener('DOMContentLoaded', () => {
  // Animate feature cards
  const featureCards = document.querySelectorAll('.feature-card');
  featureCards.forEach((card, index) => {
    card.style.animationDelay = `${index * 150}ms`;
  });
  
  // Animate security cards
  const securityCards = document.querySelectorAll('.security-card');
  securityCards.forEach((card, index) => {
    card.style.animationDelay = `${index * 150}ms`;
  });
  
  // Add scroll reveal animations
  const revealElements = document.querySelectorAll('.section-header, .security-alert, .cta-content');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-fade-in');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1
  });
  
  revealElements.forEach(el => {
    el.style.opacity = '0';
    observer.observe(el);
  });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    
    const targetId = this.getAttribute('href');
    if (targetId === '#') return;
    
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      // Add offset for header height
      const headerOffset = header.offsetHeight;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  });
});

// Add hover effects to the hero section
const heroTitle = document.querySelector('.hero-title');
const heroSubtitle = document.querySelector('.hero-subtitle');
const heroSection = document.querySelector('.hero-section');

if (heroSection && heroTitle && heroSubtitle) {
  heroSection.addEventListener('mousemove', (e) => {
    // Only apply effects on larger screens
    if (window.innerWidth < 768) return;
    
    const rect = heroSection.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const offsetX = (x - centerX) / centerX;
    const offsetY = (y - centerY) / centerY;
    
    heroTitle.style.transform = `translate(${offsetX * -5}px, ${offsetY * -5}px)`;
    heroSubtitle.style.transform = `translate(${offsetX * -3}px, ${offsetY * -3}px)`;
  });
}

// Nexus animation in technology section
const nexusContainer = document.querySelector('.nexus-container');
if (nexusContainer) {
  nexusContainer.addEventListener('mousemove', (e) => {
    const rect = nexusContainer.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const offsetX = (x - centerX) / 20;
    const offsetY = (y - centerY) / 20;
    
    nexusContainer.style.transform = `perspective(1000px) rotateX(${-offsetY}deg) rotateY(${offsetX}deg)`;
  });
  
  nexusContainer.addEventListener('mouseleave', () => {
    nexusContainer.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
  });
}
