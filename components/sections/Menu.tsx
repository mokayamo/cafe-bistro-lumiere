import React from 'react';
import { MenuCategory } from '../../types';

const categories: MenuCategory[] = [
  {
    title: "LUNCH",
    items: [
      { name: "季節野菜のプレートランチ", price: "¥1,400", description: "旬の野菜をふんだんに使用したヘルシーな一皿" },
      { name: "パスタセット", price: "¥1,300", description: "本日のパスタ・サラダ・パン" },
      { name: "オムライス", price: "¥1,200", description: "特製デミグラスソース仕立て" },
    ]
  },
  {
    title: "DINNER",
    items: [
      { name: "牛ホホ肉の赤ワイン煮", price: "¥2,400", description: "じっくり煮込んだ自慢の逸品" },
      { name: "アクアパッツァ", price: "¥2,200", description: "鮮魚の旨味が凝縮されたスープとともに" },
      { name: "前菜盛り合わせ", price: "¥1,500", description: "ワインに合う3種のタパス" },
    ]
  },
  {
    title: "DRINK",
    items: [
      { name: "自家焙煎コーヒー", price: "¥550" },
      { name: "カフェラテ", price: "¥600" },
      { name: "グラスワイン (赤/白)", price: "¥800〜" },
    ]
  },
  {
    title: "COURSE",
    items: [
      { name: "ビストロコース", price: "¥4,500", description: "前菜・スープ・メイン・デザート" },
      { name: "ペアリングコース", price: "¥6,500", description: "お料理に合わせたワイン3種付き" },
    ]
  }
];

const Menu: React.FC = () => {
  return (
    <section id="menu" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl text-lumiere-text font-bold mb-4">MENU</h2>
          <div className="w-12 h-1 bg-lumiere-accent mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {categories.map((category) => (
            <div key={category.title} className="bg-lumiere-base/20 p-8 rounded-sm">
              <h3 className="font-serif text-2xl text-lumiere-accent font-bold mb-6 border-b border-lumiere-text/10 pb-2">
                {category.title}
              </h3>
              <div className="space-y-3">
                {category.items.map((item) => (
                  <div key={item.name} className="flex flex-col gap-1">
                    <div className="flex justify-between items-baseline">
                      <h4 className="font-bold text-lumiere-text text-lg">{item.name}</h4>
                      <span className="text-lumiere-accent font-medium">{item.price}</span>
                    </div>
                    {item.description && (
                      <p className="text-sm text-lumiere-text/70">{item.description}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-4">
          <img src="https://picsum.photos/id/292/600/400" alt="Food 1" className="w-full h-64 object-cover rounded-sm shadow-md hover:opacity-90 transition-opacity" />
          <img src="https://picsum.photos/id/488/600/400" alt="Food 2" className="w-full h-64 object-cover rounded-sm shadow-md hover:opacity-90 transition-opacity" />
          <img src="https://picsum.photos/id/835/600/400" alt="Food 3" className="w-full h-64 object-cover rounded-sm shadow-md hover:opacity-90 transition-opacity" />
        </div>
      </div>
    </section>
  );
};

export default Menu;