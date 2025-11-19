import React from 'react';

const Hero: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="top" className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/id/42/1920/1080" 
          alt="Cafe Interior" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto animate-fade-in-up">
        <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight tracking-wider">
          光が差し込む、<br className="md:hidden" />大人の隠れ家ビストロ
        </h1>
        <p className="font-sans text-base md:text-lg lg:text-xl mb-10 tracking-wide opacity-90">
          昼はコーヒーとスイーツ、<br className="md:hidden" />夜はワインと料理を楽しむ落ち着いた空間を。
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={() => scrollTo('menu')}
            className="px-8 py-3 bg-lumiere-accent text-white font-medium tracking-widest hover:bg-[#A38660] transition-colors duration-300 rounded-sm"
          >
            メニューを見る
          </button>
          <button 
            onClick={() => scrollTo('access')}
            className="px-8 py-3 border border-white text-white font-medium tracking-widest hover:bg-white hover:text-lumiere-text transition-colors duration-300 rounded-sm"
          >
            アクセスを見る
          </button>
        </div>
      </div>

      {/* About Lite Section (Overlapping/Integrated) */}
      <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-lumiere-base to-transparent h-32"></div>
    </section>
  );
};

export default Hero;