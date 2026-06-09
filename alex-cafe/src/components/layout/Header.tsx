'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { navigationLinks } from '@/data/business';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.body.classList.add('menu-open');
    } else {
      document.body.style.overflow = '';
      document.body.classList.remove('menu-open');
    }
    return () => {
      document.body.style.overflow = '';
      document.body.classList.remove('menu-open');
    };
  }, [isOpen]);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="header">
      <div className="header-inner">
        <Link href="/" className="logo">
          <span className="logo-alex">Alex</span>
          <span className="logo-cafe">Cafe</span>
        </Link>

        <nav className="nav-desktop">
          {navigationLinks.map((link) => (
            <Link key={link.href} href={link.href} className="nav-link">
              {link.label}
            </Link>
          ))}
        </nav>

        <Link href="/prenota" className="cta-desktop">
          Prenota
        </Link>

        <button
          className={`hamburger ${isOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
      </div>

      {/* Overlay backdrop */}
      {isOpen && (
        <div 
          className="menu-overlay" 
          onClick={closeMenu}
          aria-hidden="true"
        />
      )}

      {/* Mobile Menu */}
      <nav 
        className={`nav-menu ${isOpen ? 'active' : ''}`}
        role="navigation"
        aria-label="Menu principale"
      >
        <ul className="nav-menu-list">
          {navigationLinks.map((link) => (
            <li key={link.href} className="nav-item">
              <Link href={link.href} className="nav-item-link" onClick={closeMenu}>
                {link.label}
              </Link>
            </li>
          ))}
          <li className="nav-item">
            <Link href="/prenota" className="nav-item-link cta-mobile" onClick={closeMenu}>
              Prenota un tavolo
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
