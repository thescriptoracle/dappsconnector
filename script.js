
// DOM elements
const mobileMenuButton = document.getElementById('mobileMenuButton');
const mobileMenu = document.getElementById('mobileMenu');
const themeToggle = document.getElementById('themeToggle');
const connectWalletButtons = document.querySelectorAll('#connectWallet, #heroConnectWallet, #ctaConnectWallet');
const toastContainer = document.getElementById('toastContainer');

// Theme handling
let darkMode = false;

function toggleTheme() {
  darkMode = !darkMode;
  
  if (darkMode) {
    document.documentElement.classList.add('dark');
    themeToggle.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
      </svg>
    `;
  } else {
    document.documentElement.classList.remove('dark');
    themeToggle.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="12" cy="12" r="4"></circle>
        <path d="M12 2v2"></path>
        <path d="M12 20v2"></path>
        <path d="M4.93 4.93l1.41 1.41"></path>
        <path d="M17.66 17.66l1.41 1.41"></path>
        <path d="M2 12h2"></path>
        <path d="M20 12h2"></path>
        <path d="M6.34 17.66l-1.41 1.41"></path>
        <path d="M19.07 4.93l-1.41 1.41"></path>
      </svg>
    `;
  }
  
  // Save preference to localStorage
  localStorage.setItem('darkMode', darkMode);
}

// Initialize theme from localStorage
function initTheme() {
  const savedTheme = localStorage.getItem('darkMode');
  if (savedTheme === 'true') {
    darkMode = false; // Will be toggled to true
    toggleTheme();
  }
}

// Mobile menu toggle
function toggleMobileMenu() {
  mobileMenu.classList.toggle('hidden');
}

// Toast notification system
function showToast(message, type = 'info', duration = 3000) {
  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  
  toast.innerHTML = `
    <div>${message}</div>
    <button class="toast-close">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <line x1="18" y1="6" x2="6" y2="18"></line>
        <line x1="6" y1="6" x2="18" y2="18"></line>
      </svg>
    </button>
  `;
  
  toastContainer.appendChild(toast);
  
  // Auto-close toast after duration
  const timeout = setTimeout(() => {
    closeToast(toast);
  }, duration);
  
  // Close button functionality
  const closeButton = toast.querySelector('.toast-close');
  closeButton.addEventListener('click', () => {
    clearTimeout(timeout);
    closeToast(toast);
  });
}

function closeToast(toast) {
  toast.style.opacity = '0';
  toast.style.transform = 'translateY(10px)';
  
  setTimeout(() => {
    toast.remove();
  }, 300);
}

// Wallet connection modal
function createWalletConnectModal() {
  // Create modal elements
  const backdrop = document.createElement('div');
  backdrop.className = 'modal-backdrop';
  
  const modal = document.createElement('div');
  modal.className = 'modal';
  
  // Add modal content
  modal.innerHTML = `
    <div class="wallet-connect-modal-container">
      <div class="flex justify-between items-center mb-6">
        <h2 class="text-xl font-semibold font-display">Connect Your Wallet</h2>
        <button class="close-modal p-1 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      </div>
      
      <p class="text-slate-600 dark:text-slate-400 mb-6">Connect with one of our available wallet providers.</p>
      
      <div class="space-y-3">
        <div class="wallet-option" data-wallet="metamask">
          <img src="https://cdn.jsdelivr.net/gh/MetaMask/brand-resources@master/SVG/metamask-fox.svg" alt="MetaMask" class="w-8 h-8" />
          <div>
            <h3 class="font-medium">MetaMask</h3>
            <p class="text-xs text-slate-500 dark:text-slate-400">Connect to your MetaMask wallet</p>
          </div>
        </div>
        
        <div class="wallet-option" data-wallet="walletconnect">
          <img src="https://avatars.githubusercontent.com/u/37784886" alt="WalletConnect" class="w-8 h-8 rounded-full" />
          <div>
            <h3 class="font-medium">WalletConnect</h3>
            <p class="text-xs text-slate-500 dark:text-slate-400">Scan with WalletConnect to connect</p>
          </div>
        </div>
        
        <div class="wallet-option" data-wallet="coinbase">
          <img src="https://avatars.githubusercontent.com/u/1885080" alt="Coinbase Wallet" class="w-8 h-8 rounded-full" />
          <div>
            <h3 class="font-medium">Coinbase Wallet</h3>
            <p class="text-xs text-slate-500 dark:text-slate-400">Connect to your Coinbase wallet</p>
          </div>
        </div>
        
        <div class="wallet-option" data-wallet="trust">
          <img src="https://trustwallet.com/assets/images/media/assets/TWT.png" alt="Trust Wallet" class="w-8 h-8 rounded-full" />
          <div>
            <h3 class="font-medium">Trust Wallet</h3>
            <p class="text-xs text-slate-500 dark:text-slate-400">Connect to your Trust wallet</p>
          </div>
        </div>
      </div>
      
      <div class="mt-6 pt-4 border-t border-slate-200 dark:border-slate-700">
        <p class="text-xs text-slate-500 dark:text-slate-400 text-center">
          By connecting your wallet, you agree to our <a href="#" class="text-[#4f46e5]">Terms of Service</a> and <a href="#" class="text-[#4f46e5]">Privacy Policy</a>.
        </p>
      </div>
    </div>
  `;
  
  // Append modal to backdrop
  backdrop.appendChild(modal);
  
  // Append backdrop to body
  document.body.appendChild(backdrop);
  
  // Add event listeners
  const closeButton = modal.querySelector('.close-modal');
  closeButton.addEventListener('click', () => {
    closeModal(backdrop, modal);
  });
  
  backdrop.addEventListener('click', (e) => {
    if (e.target === backdrop) {
      closeModal(backdrop, modal);
    }
  });
  
  // Handle wallet options
  const walletOptions = modal.querySelectorAll('.wallet-option');
  walletOptions.forEach(option => {
    option.addEventListener('click', () => {
      const walletType = option.getAttribute('data-wallet');
      connectWallet(walletType);
      closeModal(backdrop, modal);
    });
  });
  
  // Show modal with animation
  setTimeout(() => {
    backdrop.classList.add('active');
    modal.classList.add('active');
  }, 10);
}

function closeModal(backdrop, modal) {
  modal.classList.remove('active');
  backdrop.classList.remove('active');
  
  setTimeout(() => {
    backdrop.remove();
  }, 300);
}

function connectWallet(walletType) {
  // In a real implementation, this would connect to the actual wallet
  showToast(`Connecting to ${walletType}...`, 'info');
  
  // Simulate connection delay
  setTimeout(() => {
    showToast(`Successfully connected to ${walletType}!`, 'success');
  }, 1500);
}

// Event listeners
window.addEventListener('DOMContentLoaded', () => {
  // Initialize theme
  initTheme();
  
  // Mobile menu toggle
  mobileMenuButton.addEventListener('click', toggleMobileMenu);
  
  // Theme toggle
  themeToggle.addEventListener('click', toggleTheme);
  
  // Wallet connect buttons
  connectWalletButtons.forEach(button => {
    button.addEventListener('click', () => {
      createWalletConnectModal();
    });
  });
  
  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 80, // Account for fixed header
          behavior: 'smooth'
        });
      }
    });
  });
});

// Additional animation for elements when they enter viewport
function handleIntersection(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate-fade-in');
      observer.unobserve(entry.target);
    }
  });
}

// Create an Intersection Observer
const observer = new IntersectionObserver(handleIntersection, {
  threshold: 0.1
});

// Observe all feature cards and section headings for animation
window.addEventListener('DOMContentLoaded', () => {
  // Observe feature cards
  document.querySelectorAll('.group.relative.bg-white').forEach(card => {
    observer.observe(card);
  });
  
  // Observe section headings
  document.querySelectorAll('h2.text-3xl').forEach(heading => {
    observer.observe(heading);
  });
});
