import React from 'react';

const AboutLite: React.FC = () => {
  return (
    <section className="py-20 bg-lumiere-base">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
          <div className="md:w-1/2">
            <img 
              src="https://picsum.photos/id/225/800/600" 
              alt="Tea and quiet time" 
              className="w-full h-auto rounded-sm shadow-lg"
            />
          </div>
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="font-serif text-2xl md:text-3xl text-lumiere-text font-bold mb-6">
              ゆったりと流れる時間。<br />コーヒーも料理も、丁寧に。
            </h2>
            <p className="text-lumiere-text/80 leading-relaxed mb-6">
              厳選したコーヒー豆と旬の食材を使い、特別な時間をお届けします。
              日常の喧騒を忘れ、心地よい音楽と温かな光の中で、
              心満たされるひとときをお過ごしください。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutLite;