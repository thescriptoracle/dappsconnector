
import React from 'react';
import { Github, Twitter, Linkedin, Zap } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-background border-t border-border/50 py-12 md:py-16">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 font-display font-bold text-xl mb-4">
              <span className="w-8 h-8 rounded-md bg-accent flex items-center justify-center text-white">
                <Zap size={18} />
              </span>
              <span>DappsFix<span className="text-accent">.</span></span>
            </div>
            <p className="text-muted-foreground text-sm mb-4">
              The most intuitive blockchain interface that seamlessly connects you to the decentralized web.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="text-foreground/60 hover:text-accent transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-foreground/60 hover:text-accent transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="text-foreground/60 hover:text-accent transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-display font-semibold mb-4">Product</h4>
            <ul className="space-y-2">
              {['Features', 'Security', 'Roadmap', 'Pricing'].map(item => (
                <li key={item}>
                  <a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-display font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              {['Documentation', 'API', 'Guides', 'Tutorials'].map(item => (
                <li key={item}>
                  <a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-display font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              {['About', 'Blog', 'Careers', 'Contact'].map(item => (
                <li key={item}>
                  <a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border/50 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} DappsFix. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
