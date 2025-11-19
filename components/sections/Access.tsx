import React from 'react';
import { MapPin, Phone, Clock } from 'lucide-react';

const Access: React.FC = () => {
  return (
    <section id="access" className="py-24 bg-lumiere-base border-t border-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl text-lumiere-text font-bold mb-4">ACCESS</h2>
          <div className="w-12 h-1 bg-lumiere-accent mx-auto"></div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 bg-white p-4 md:p-8 shadow-lg rounded-sm max-w-6xl mx-auto">
          
          {/* Info Column */}
          <div className="lg:w-1/3 flex flex-col justify-center gap-8 p-4">
            <div className="flex items-start gap-4">
              <MapPin className="w-6 h-6 text-lumiere-accent flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-bold mb-1">ADDRESS</h4>
                <p className="text-sm leading-relaxed">
                  〒153-0000<br />
                  東京都目黒区○○1-2-3<br />
                  Lumièreビル 1F
                </p>
                <p className="text-xs text-gray-500 mt-2">目黒駅 徒歩5分 / 恵比寿駅 徒歩12分</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Clock className="w-6 h-6 text-lumiere-accent flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-bold mb-1">OPEN</h4>
                <p className="text-sm leading-relaxed">
                  平日 11:00–22:00<br />
                  土日祝 10:00–22:00
                </p>
                <p className="text-xs text-red-400 mt-1">定休日：水曜日</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Phone className="w-6 h-6 text-lumiere-accent flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-bold mb-1">TEL</h4>
                <a href="tel:03-0000-0000" className="text-lg font-serif hover:text-lumiere-accent transition-colors">
                  03-0000-0000
                </a>
              </div>
            </div>
          </div>

          {/* Map Column */}
          <div className="lg:w-2/3 h-[400px] bg-gray-200 rounded-sm overflow-hidden relative">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.7479754683745!2d139.7147!3d35.6585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188b1695662603%3A0x205749975217a79c!2z5p2x5Lqs6YO955uu6buS5Yy6!5e0!3m2!1sja!2sjp!4v1600000000000!5m2!1sja!2sjp" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={false} 
              loading="lazy"
              title="Google Map"
              className="absolute inset-0"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Access;