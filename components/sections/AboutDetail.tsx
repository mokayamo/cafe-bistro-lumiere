import React from 'react';

const AboutDetail: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-lumiere-base">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl text-lumiere-text font-bold mb-4">ABOUT</h2>
          <div className="w-12 h-1 bg-lumiere-accent mx-auto"></div>
        </div>

        <div className="flex flex-col lg:flex-row gap-16 items-center">

          {/* Text Content */}
          <div className="lg:w-1/2 order-2 lg:order-1">
            <div className="space-y-6 text-lumiere-text/90 leading-relaxed">
              <div>
                <h3 className="font-serif text-xl font-bold mb-2 text-lumiere-accent">Story</h3>
                <p>
                  「Lumière（リュミエール）」はフランス語で「光」。
                  訪れるお客様一人ひとりの日常に、温かい光を灯せるような場所でありたいという想いを込めました。
                </p>
              </div>
              
              <div>
                <h3 className="font-serif text-xl font-bold mb-2 text-lumiere-accent">こだわり</h3>
                <p>
                  野菜は契約農家から届く新鮮なものを、コーヒーは店内で少量ずつ焙煎した豆を使用。
                  素材本来の味を大切に、シンプルながらも心に残る一皿を追求しています。
                </p>
              </div>
              
              <div>
                <h3 className="font-serif text-xl font-bold mb-2 text-lumiere-accent">Message</h3>
                <p>
                  お一人様での読書の時間、大切な人との語らいの時間。
                  どんなシーンでも、心地よく過ごしていただける空間をご用意してお待ちしております。
                </p>
              </div>
            </div>

            {/* Shop Info Table */}
            <div className="mt-12 bg-white p-6 shadow-sm rounded-sm">
              <table className="w-full text-sm md:text-base">
                <tbody>
                  <tr className="border-b border-lumiere-base">
                    <th className="py-3 text-left font-serif text-lumiere-accent w-32">店舗名</th>
                    <td className="py-3">Cafe & Bistro Lumière</td>
                  </tr>
                  <tr className="border-b border-lumiere-base">
                    <th className="py-3 text-left font-serif text-lumiere-accent">住所</th>
                    <td className="py-3">東京都目黒区○○1-2-3</td>
                  </tr>
                  <tr className="border-b border-lumiere-base">
                    <th className="py-3 text-left font-serif text-lumiere-accent">営業時間</th>
                    <td className="py-3">
                      平日 11:00–22:00<br />
                      土日祝 10:00–22:00
                    </td>
                  </tr>
                  <tr className="border-b border-lumiere-base">
                    <th className="py-3 text-left font-serif text-lumiere-accent">定休日</th>
                    <td className="py-3">水曜日</td>
                  </tr>
                  <tr>
                    <th className="py-3 text-left font-serif text-lumiere-accent">座席数</th>
                    <td className="py-3">28席</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Image */}
          <div className="lg:w-1/2 order-1 lg:order-2">
             <img 
              src="https://picsum.photos/id/431/800/1000" 
              alt="Barista brewing coffee" 
              className="w-full h-auto rounded-sm shadow-xl object-cover"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutDetail;