import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Coffee } from 'lucide-react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Handle scroll effect for sticky header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Navigation handler
  const handleNavClick = (sectionId: string) => {
    setIsOpen(false);
    
    if (location.pathname !== '/') {
      navigate('/');
      // Wait for navigation then scroll
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  const navItems = [
    { label: 'HOME', id: 'top' },
    { label: 'ABOUT', id: 'about' },
    { label: 'MENU', id: 'menu' },
    { label: 'ACCESS', id: 'access' },
  ];

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-lumiere-base/95 shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        {/* Logo */}
        <button onClick={() => handleNavClick('top')} className="flex items-center gap-2 group">
          <Coffee className="w-6 h-6 text-lumiere-accent" />
          <span className="font-serif text-xl md:text-2xl font-bold text-lumiere-text tracking-wider">
            Lumière
          </span>
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 items-center">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => handleNavClick(item.id)}
              className="text-sm font-medium text-lumiere-text hover:text-lumiere-accent transition-colors tracking-widest"
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-lumiere-text"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      <div 
        className={`fixed inset-0 bg-lumiere-base z-40 flex flex-col items-center justify-center gap-8 transition-transform duration-300 ease-in-out md:hidden ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {navItems.map((item) => (
          <button
            key={item.label}
            onClick={() => handleNavClick(item.id)}
            className="font-serif text-2xl text-lumiere-text hover:text-lumiere-accent"
          >
            {item.label}
          </button>
        ))}
        <div className="flex flex-col gap-4 mt-8 text-sm text-lumiere-text/70">
          <Link to="/terms" onClick={() => setIsOpen(false)}>利用規約</Link>
          <Link to="/privacy" onClick={() => setIsOpen(false)}>プライバシーポリシー</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;