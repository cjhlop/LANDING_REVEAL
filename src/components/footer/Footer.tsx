import React from 'react';
import { Link } from 'react-router-dom';
import { Logo } from '@/components/Navbar';
import { footerLinkColumns, socialLinks } from '@/data/footerData';
import NewsletterForm from './NewsletterForm';

const Footer: React.FC = () => {
  return (
    <footer className="footer-section" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="footer-container">
        {/* Top section: Links and Newsletter */}
        <div className="footer-top-section">
          <div className="footer-links-area">
            <div className="mb-8">
              <Logo />
            </div>
            <nav className="footer-links-grid" aria-label="Footer navigation">
              {footerLinkColumns.map((column) => (
                <div key={column.title} className="footer-column">
                  <h3 className="footer-heading">{column.title}</h3>
                  <ul className="mt-4 space-y-3">
                    {column.links.map((link) => (
                      <li key={link.label}>
                        <Link to={link.href} className="footer-link">
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </nav>
          </div>
          <div className="footer-newsletter-area">
            <NewsletterForm />
          </div>
        </div>

        {/* Bottom section: Copyright and Social Icons */}
        <div className="footer-bottom-section">
          <div className="footer-copyright-links">
            <span>© {new Date().getFullYear()} DemandSense</span>
            <span className="footer-separator" aria-hidden="true">•</span>
            <Link to="#" className="footer-link">Terms</Link>
            <span className="footer-separator" aria-hidden="true">•</span>
            <Link to="#" className="footer-link">Privacy</Link>
          </div>
          <div className="footer-social-icons">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                aria-label={social.name}
                className="footer-social-link"
              >
                <social.icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;