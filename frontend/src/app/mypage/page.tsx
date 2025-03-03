import Image from 'next/image'
export default function MyPage() {
  return (
    <main className="bg-gray-50 min-h-screen">
      {/* ヘッダーバナーセクション */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 h-48 w-full"></div>
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20">
        {/* プロフィールカード */}
        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/4 flex justify-center">
            <Image
  src="https://placehold.co/180"
  width={180}
  height={180}
  className="rounded-full border-4 border-white shadow-sm object-cover"
  alt="プロフィール画像"
/>
            </div>
            <div className="md:w-3/4 mt-4 md:mt-0 md:ml-6">
              <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                <div>
                  <h1 className="text-3xl font-bold text-gray-800">あなたの名前</h1>
                  <p className="text-gray-600 mt-1 text-lg">ライター | 編集者 | コンテンツクリエイター</p>
                </div>
                <div className="mt-4 md:mt-0">
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md font-medium transition-colors duration-200">
                    プロフィール編集
                  </button>
                </div>
              </div>
              <div className="mt-6">
                <p className="text-gray-700 leading-relaxed">
                  ここに自己紹介文を記入します。読者を惹きつける魅力的な文章で、自分の経験やスタイル、得意分野などを簡潔に伝えましょう。
                  文章の長さや内容によって、読者はあなたの文章力を判断します。わかりやすく、かつ個性が伝わる自己紹介を心がけましょう。
                </p>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">ライフスタイル</span>
                <span className="bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full">テクノロジー</span>
                <span className="bg-purple-100 text-purple-800 text-sm font-medium px-3 py-1 rounded-full">ビジネス</span>
              </div>
            </div>
          </div>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* 左カラム：ライターの強み */}
          <div className="md:col-span-2 space-y-8">
            {/* ライターの強みセクション */}
            <section className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                ライターとしての強み
              </h2>
              <p className="text-gray-600 mb-6">AIがあなたの記事を分析して抽出した、特に際立っている3つの強み</p>
              <div className="space-y-6">
                {[
                  { 
                    name: "説得力のある文章構成", 
                    icon: "📝",
                    description: "読者の興味を引き付け、論理的な流れで情報を整理する能力に優れています。データと物語を効果的に組み合わせて、説得力のある文章を作成できることが強みです。",
                    relatedTags: ["構成力", "論理性", "分かりやすさ"]
                  },
                  { 
                    name: "テクノロジー専門知識", 
                    icon: "💻",
                    description: "最新テクノロジーに関する深い理解と専門知識を持ち、複雑な技術的概念を一般読者にも分かりやすく伝えることができます。特にAIと持続可能性の分野での専門性が際立っています。",
                    relatedTags: ["AI", "テクノロジー", "DX"]
                  },
                  { 
                    name: "読者との共感的な関係構築", 
                    icon: "🤝",
                    description: "読者の関心や懸念に寄り添った文章を書く能力に優れています。実用的なアドバイスと感情的なつながりを提供することで、読者の信頼を獲得しています。",
                    relatedTags: ["共感力", "読者目線", "実用性"]
                  },
                ].map((strength) => (
                  <div key={strength.name} className="border border-gray-100 rounded-lg p-5 bg-white hover:shadow-md transition-shadow duration-200">
                    <div className="flex items-start">
                      <span className="text-2xl mr-3">{strength.icon}</span>
                      <div>
                        <h3 className="font-medium text-gray-800 text-lg">{strength.name}</h3>
                        <p className="text-gray-600 mt-2">{strength.description}</p>
                        <div className="mt-3 flex flex-wrap gap-2">
                          {strength.relatedTags.map(tag => (
                            <span key={tag} className="bg-blue-50 text-blue-700 text-xs px-2.5 py-0.5 rounded-full">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* ポートフォリオセクション */}
            <section className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
                ポートフォリオ
              </h2>
              <div className="grid grid-cols-1 gap-4">
                {[
                  { title: "AIが変える未来の働き方", publisher: "Tech Magazine", date: "2023.05.15", url: "#", tags: ["AI", "働き方改革"] },
                  { title: "持続可能なビジネスモデルの構築方法", publisher: "Business Insights", date: "2023.03.22", url: "#", tags: ["サステナビリティ", "ビジネス戦略"] },
                  { title: "デジタルトランスフォーメーションの成功事例", publisher: "Digital Today", date: "2023.01.10", url: "#", tags: ["DX", "事例研究"] },
                ].map((article, index) => (
                  <a 
                    href={article.url} 
                    key={index} 
                    className="block p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                  >
                    <h3 className="font-medium text-gray-900">{article.title}</h3>
                    <div className="flex justify-between mt-2">
                      <span className="text-sm text-gray-600">{article.publisher}</span>
                      <span className="text-sm text-gray-500">{article.date}</span>
                    </div>
                    <div className="mt-2 flex flex-wrap gap-1">
                      {article.tags.map(tag => (
                        <span key={tag} className="bg-gray-100 text-gray-800 text-xs px-2 py-0.5 rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </a>
                ))}
              </div>
              <div className="mt-4 text-center">
                <button className="text-blue-600 hover:text-blue-800 font-medium">
                  もっと見る →
                </button>
              </div>
            </section>
          </div>

          {/* 右カラム：外部リンク・アクティビティ */}
          <div className="space-y-8">
            {/* 外部リンク */}
            <section className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 015.656 0l4 4a4 4 0 01-5.656 5.656l-1.102-1.101" />
                </svg>
                外部リンク
              </h2>
              <ul className="space-y-3">
                {[
                  { platform: "X（旧Twitter）", url: "https://x.com/your_account", icon: "fab fa-twitter" },
                  { platform: "note", url: "https://note.com/your_account", icon: "fas fa-sticky-note" },
                  { platform: "LinkedIn", url: "https://linkedin.com/in/your_account", icon: "fab fa-linkedin" },
                  { platform: "個人ブログ", url: "https://yourblog.com", icon: "fas fa-globe" },
                ].map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.url} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="flex items-center p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                    >
                      <span className="text-blue-600">{link.platform}</span>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400 ml-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </li>
                ))}
              </ul>
            </section>

            {/* アクティビティ */}
            <section className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                最近のアクティビティ
              </h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm text-gray-700">新しい記事「デザイン思考の基本原則」を投稿しました</p>
                    <p className="text-xs text-gray-500 mt-1">2日前</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-8 w-8 rounded-full bg-green-100 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11l5-5m0 0l5 5m-5-5v12" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm text-gray-700">プロフィール情報を更新しました</p>
                    <p className="text-xs text-gray-500 mt-1">1週間前</p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
  