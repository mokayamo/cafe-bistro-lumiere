import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#3E342C] text-lumiere-base py-12">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-8">
        
        <div className="text-center md:text-left">
          <h3 className="font-serif text-2xl font-bold mb-2">Cafe & Bistro Lumière</h3>
          <p className="text-sm opacity-80">東京都目黒区○○1-2-3</p>
          <p className="text-sm opacity-80">11:00 – 22:00 (平日) / 10:00 – 22:00 (土日祝)</p>
        </div>

        <div className="flex gap-6">
          <a href="#" className="hover:text-lumiere-accent transition-colors"><Instagram size={24} /></a>
          <a href="#" className="hover:text-lumiere-accent transition-colors"><Facebook size={24} /></a>
          <a href="#" className="hover:text-lumiere-accent transition-colors"><Twitter size={24} /></a>
        </div>

        <div className="flex flex-col items-center md:items-end gap-2 text-sm opacity-70">
          <div className="flex gap-4">
            <Link to="/terms" className="hover:text-white transition-colors">利用規約</Link>
            <Link to="/privacy" className="hover:text-white transition-colors">プライバシーポリシー</Link>
          </div>
          <p>© Cafe & Bistro Lumière. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;