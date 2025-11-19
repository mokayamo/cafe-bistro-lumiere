import React from 'react';

const Gallery: React.FC = () => {
  const images = [
    { id: 1, src: "https://picsum.photos/id/766/600/600", alt: "Coffee art" },
    { id: 2, src: "https://picsum.photos/id/425/600/600", alt: "Coffee roasting" },
    { id: 3, src: "https://picsum.photos/id/120/600/600", alt: "Shop Exterior" }, // Used for exterior as per plan
    { id: 4, src: "https://picsum.photos/id/1060/600/600", alt: "Barista girl" },
    { id: 5, src: "https://picsum.photos/id/835/600/600", alt: "Ingredients" },
    { id: 6, src: "https://picsum.photos/id/102/600/600", alt: "Dessert" },
  ];

  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl text-lumiere-text font-bold mb-4">GALLERY</h2>
          <div className="w-12 h-1 bg-lumiere-accent mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((img) => (
            <div key={img.id} className="group relative overflow-hidden aspect-square cursor-pointer">
              <img 
                src={img.src} 
                alt={img.alt} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;