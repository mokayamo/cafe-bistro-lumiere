import React from 'react';

const Privacy: React.FC = () => {
  return (
    <div className="pt-24 pb-16 min-h-screen bg-white">
      <div className="container mx-auto px-4 md:px-8 max-w-3xl">
        <h1 className="font-serif text-3xl font-bold text-lumiere-text mb-12 border-b border-lumiere-accent pb-4">プライバシーポリシー</h1>
        
        <div className="prose text-lumiere-text/80 space-y-8">
          <p>Cafe & Bistro Lumière（以下「当店」）は、本サイトにおける個人情報の取り扱いについて以下の通り定めます。</p>

          <section>
            <h2 className="text-xl font-bold text-lumiere-text mb-2">第1条（基本方針）</h2>
            <p>本サイトでは利用者の個人情報を取得するフォームを設置していません。</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-lumiere-text mb-2">第2条（アクセス解析）</h2>
            <p>本サイトでは、個人を特定しない範囲でアクセス解析を行う場合があります。</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-lumiere-text mb-2">第3条（外部サービス）</h2>
            <p>Googleマップ等を利用します。データの扱いは各サービス提供者のポリシーに従います。</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-lumiere-text mb-2">第4条（法令遵守）</h2>
            <p>当店は日本の法令を遵守します。</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-lumiere-text mb-2">第5条（ポリシーの変更）</h2>
            <p>必要に応じて変更され、変更後は本サイト掲載時点から適用されます。</p>
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

export default Privacy;