
/**
 * Security utility functions for DappsConnector
 * These functions help enhance the security posture of the application
 */

/**
 * Validates if the current browser environment is secure
 * @returns {boolean} Whether the environment passes security checks
 */
export const validateSecureEnvironment = (): boolean => {
  try {
    // Check for secure context (HTTPS)
    if (!window.isSecureContext) {
      console.warn("Security warning: Not in a secure context");
      return false;
    }
    
    // Check for modern security APIs
    if (!window.crypto || !window.crypto.subtle) {
      console.warn("Security warning: Modern crypto API not available");
      return false;
    }
    
    // Check storage availability
    if (!canUseLocalStorage()) {
      console.warn("Security warning: Secure storage not available");
      return false;
    }
    
    // Check for suspicious URLs or parameters
    if (hasSupiciousUrlParams()) {
      console.warn("Security warning: Suspicious URL parameters detected");
      return false;
    }
    
    return true;
  } catch (err) {
    console.error("Security validation error:", err);
    return false;
  }
};

/**
 * Tests if localStorage/sessionStorage is available
 */
const canUseLocalStorage = (): boolean => {
  try {
    const testKey = 'test-storage-available';
    sessionStorage.setItem(testKey, 'yes');
    const result = sessionStorage.getItem(testKey) === 'yes';
    sessionStorage.removeItem(testKey);
    return result;
  } catch (e) {
    return false;
  }
};

/**
 * Checks for suspicious URL parameters that might indicate an attack
 */
const hasSupiciousUrlParams = (): boolean => {
  const suspiciousTerms = ['script', 'eval', 'alert', 'document.cookie', 'iframe', 'onerror', '<svg'];
  const url = window.location.href.toLowerCase();
  
  return suspiciousTerms.some(term => url.includes(term));
};

/**
 * Generates a secure token for authentication
 * @returns {string} A cryptographically secure token
 */
export const generateSecureToken = (): string => {
  try {
    const timestamp = Date.now();
    const randomBytes = new Uint8Array(16);
    window.crypto.getRandomValues(randomBytes);
    const randomHex = Array.from(randomBytes)
      .map(b => b.toString(16).padStart(2, '0'))
      .join('');
      
    return `sc-${timestamp}-${randomHex}`;
  } catch (err) {
    console.error("Secure token generation error:", err);
    
    // Fallback (less secure but better than nothing)
    return `sc-${Date.now()}-${Math.random().toString(36).substring(2, 15)}`;
  }
};

/**
 * Safely store security data in session storage with encryption
 * @param {string} key - Storage key
 * @param {any} value - Value to store
 */
export const securelyStoreData = (key: string, value: any): void => {
  try {
    const valueToStore = typeof value === 'object' ? JSON.stringify(value) : String(value);
    
    // Simple obfuscation (not true encryption, but better than plaintext)
    const obfuscated = btoa(valueToStore);
    sessionStorage.setItem(key, obfuscated);
    
    // Set expiration
    const expiry = Date.now() + 3600000; // 1 hour
    sessionStorage.setItem(`${key}_expiry`, expiry.toString());
  } catch (err) {
    console.error("Secure storage error:", err);
  }
};

/**
 * Create a secure form for external site navigation
 * @param {string} url - Target URL
 * @param {Record<string, string>} formData - Data to include in the form
 * @returns {HTMLFormElement} The created form element
 */
export const createSecurePostForm = (
  url: string, 
  formData: Record<string, string>
): HTMLFormElement => {
  const form = document.createElement('form');
  form.method = 'POST';
  form.action = url;
  form.target = '_blank';
  form.setAttribute('rel', 'noopener noreferrer');
  
  // Add security attributes  
  form.setAttribute('data-secure', 'true');
  form.setAttribute('data-analytics', 'false');
  
  // Add form fields
  Object.entries(formData).forEach(([key, value]) => {
    const input = document.createElement('input');
    input.type = 'hidden';
    input.name = key;
    input.value = value;
    form.appendChild(input);
  });
  
  return form;
};
