
/**
 * Utility functions for secure redirections
 */
import { generateSecureToken, securelyStoreData } from './securityUtils';

/**
 * Securely redirect to an external site with proper parameters
 * @param targetUrl The URL to redirect to
 * @param params Additional parameters to include in the redirect
 */
export const secureRedirect = (targetUrl: string, params: Record<string, string> = {}): void => {
  // Generate a secure token for this redirect
  const securityToken = generateSecureToken();
  const timestamp = Date.now().toString();
  
  // Store token in session for verification if user returns
  securelyStoreData('redirect_token', securityToken);
  securelyStoreData('redirect_timestamp', timestamp);
  
  // Basic required parameters for all redirects
  const baseParams = {
    token: securityToken,
    timestamp,
    origin: window.location.origin,
    referrer: document.referrer,
  };
  
  // Combine base params with custom params
  const allParams = { ...baseParams, ...params };
  
  // Create and submit a form for POST redirect (more secure than GET redirect)
  const form = document.createElement('form');
  form.method = 'POST';
  form.action = targetUrl;
  form.target = '_self'; // Replace with '_blank' if you want to open in a new tab
  form.setAttribute('rel', 'noopener noreferrer');
  
  // Add security attributes
  form.setAttribute('data-secure', 'true');
  form.setAttribute('data-app-verified', 'true');
  
  // Add form fields for all parameters
  Object.entries(allParams).forEach(([key, value]) => {
    const input = document.createElement('input');
    input.type = 'hidden';
    input.name = key;
    input.value = value;
    form.appendChild(input);
  });
  
  // Append to body and submit the form
  document.body.appendChild(form);
  
  // Log the redirect for debugging
  console.log(`Securely redirecting to: ${targetUrl}`);
  
  // Submit the form to perform the redirect
  setTimeout(() => {
    form.submit();
    // Clean up the form after submission
    setTimeout(() => {
      document.body.removeChild(form);
    }, 100);
  }, 50);
};

/**
 * Direct redirect to a specified URL
 * Uses proper security measures and CSP compliance
 * @param url The URL to redirect to
 */
export const directNavigate = (url: string): void => {
  // For internal URLs, we can use direct navigation
  if (url.startsWith(window.location.origin) || url.startsWith('/')) {
    window.location.href = url;
    return;
  }
  
  // For external URLs, use the secure method
  secureRedirect(url);
};
