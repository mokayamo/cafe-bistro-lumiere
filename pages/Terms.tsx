import React from 'react';

const Terms: React.FC = () => {
  return (
    <div className="pt-24 pb-16 min-h-screen bg-white">
      <div className="container mx-auto px-4 md:px-8 max-w-3xl">
        <h1 className="font-serif text-3xl font-bold text-lumiere-text mb-12 border-b border-lumiere-accent pb-4">利用規約</h1>
        
        <div className="prose text-lumiere-text/80 space-y-8">
          <p>本利用規約（以下「本規約」）は、Cafe & Bistro Lumière（以下「当店」）が提供するWebサイト（以下「本サイト」）の利用条件を定めるものです。本サイトをご利用いただくことで、本規約に同意したものとみなします。</p>

          <section>
            <h2 className="text-xl font-bold text-lumiere-text mb-2">第1条（適用）</h2>
            <p>本規約は、本サイトを利用するすべての方に適用されます。</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-lumiere-text mb-2">第2条（利用環境）</h2>
            <p>本サイトを利用するために必要なインターネット環境は、利用者の責任で整えてください。</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-lumiere-text mb-2">第3条（著作権）</h2>
            <p>本サイト内の文章、画像、デザイン、ロゴ等の著作権は当店に帰属します。無断利用を禁止します。</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-lumiere-text mb-2">第4条（禁止事項）</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>法令違反行為</li>
              <li>公序良俗に反する行為</li>
              <li>本サイトの運営を妨げる行為</li>
              <li>無断転載や改変</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-lumiere-text mb-2">第5条（免責事項）</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>本サイトの内容の正確性は保証しません。</li>
              <li>利用によって生じた損害について当店は責任を負いません。</li>
              <li>本サイト内容は予告なく変更または中止されることがあります。</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-lumiere-text mb-2">第6条（リンク）</h2>
            <p>違法または不適切なサイトからのリンクは禁止します。</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-lumiere-text mb-2">第7条（規約変更）</h2>
            <p>本規約は必要に応じて変更されます。</p>
          </section>

          <div className="pt-8 border-t border-gray-200 mt-12">
            <h3 className="font-bold">【お問い合わせ先】</h3>
            <p>Cafe & Bistro Lumière</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terms;