
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-muted/30 py-12 md:py-16 border-t border-border/50 relative z-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
          <div className="md:col-span-4 lg:col-span-5">
            <Link to="/" className="text-xl font-display font-bold text-foreground flex items-center gap-2 mb-4">
              <span className="w-8 h-8 rounded-full bg-gradient-to-br from-accent to-accent/70 flex items-center justify-center text-white">dP</span>
              dApps Protocol
            </Link>
            <p className="text-muted-foreground max-w-md mb-6">
              A secure protocol for resolving transaction issues in decentralized applications, built with privacy and security at its core.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: 'twitter', href: '#' },
                { icon: 'github', href: '#' },
                { icon: 'discord', href: '#' },
                { icon: 'telegram', href: '#' }
              ].map((social, index) => (
                <a 
                  key={index}
                  href={social.href} 
                  className="w-9 h-9 rounded-full bg-background border border-border flex items-center justify-center text-muted-foreground hover:text-accent hover:border-accent/50 transition-colors"
                  aria-label={`${social.icon} link`}
                >
                  <SocialIcon name={social.icon} />
                </a>
              ))}
            </div>
          </div>
          
          <div className="md:col-span-8 lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {[
                {
                  title: 'Product',
                  links: [
                    { name: 'Features', href: '#features' },
                    { name: 'Security', href: '#security' },
                    { name: 'Technology', href: '#technology' },
                    { name: 'Roadmap', href: '#' }
                  ]
                },
                {
                  title: 'Resources',
                  links: [
                    { name: 'Documentation', href: '#' },
                    { name: 'Developers', href: '#' },
                    { name: 'API', href: '#' },
                    { name: 'Community', href: '#' }
                  ]
                },
                {
                  title: 'Company',
                  links: [
                    { name: 'About', href: '#about' },
                    { name: 'Blog', href: '#' },
                    { name: 'Careers', href: '#' },
                    { name: 'Contact', href: '#' }
                  ]
                }
              ].map((category, index) => (
                <div key={index}>
                  <h4 className="font-display font-medium mb-4">{category.title}</h4>
                  <ul className="space-y-2">
                    {category.links.map((link, linkIndex) => (
                      <li key={linkIndex}>
                        <a 
                          href={link.href} 
                          className="text-muted-foreground hover:text-foreground transition-colors"
                        >
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="border-t border-border/50 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} dApps Protocol. All rights reserved.
          </p>
          <div className="flex space-x-6">
            {['Terms', 'Privacy', 'Cookies'].map((item, index) => (
              <a key={index} href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

// Helper component for social icons
const SocialIcon = ({ name }: { name: string }) => {
  switch (name) {
    case 'twitter':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
        </svg>
      );
    case 'github':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
          <path d="M9 18c-4.51 2-5-2-7-2"></path>
        </svg>
      );
    case 'discord':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="9" cy="12" r="1"></circle>
          <circle cx="15" cy="12" r="1"></circle>
          <path d="M7.5 7.2A4.78 4.78 0 0 1 12 6a4.78 4.78 0 0 1 4.5 1.2 15 15 0 0 1 .9 4.8 15 15 0 0 1-.9 4.8A4.78 4.78 0 0 1 12 18a4.78 4.78 0 0 1-4.5-1.2 15 15 0 0 1-.9-4.8 15 15 0 0 1 .9-4.8z"></path>
          <path d="M7 16.8c3 1 5 1 8 0"></path>
          <path d="M7 7.2c3-1 5-1 8 0"></path>
        </svg>
      );
    case 'telegram':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m22 2-7 20-4-9-9-4Z"></path>
          <path d="M22 2 11 13"></path>
        </svg>
      );
    default:
      return null;
  }
};

export default Footer;
