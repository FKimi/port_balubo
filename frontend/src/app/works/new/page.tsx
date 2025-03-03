"use client";

import { useState } from "react";
import Image from "next/image";

export default function NewWorkPage() {
  // URL入力とその処理に関するステート
  const [url, setUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isGenerated, setIsGenerated] = useState(false);
  
  // 自動生成される情報のステート
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState<string[]>([]);
  const [roles, setRoles] = useState<string[]>([]);
  const [bannerImage, setBannerImage] = useState("");
  
  // URLからコンテンツを自動取得・分析する処理
  const handleAnalyzeUrl = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!url) return;
    
    setIsLoading(true);
    
    // ここでは仮のデータをセットするのみ
    // 実際の実装ではAPIリクエストを行う
    setTimeout(() => {
      // 仮データを設定（実際にはAPI経由でAI分析結果を取得）
      setTitle("AIが変える未来の働き方 - テックトレンド2023");
      setDescription("本記事では、最新のAI技術がビジネス環境をどのように変革しているかを分析し、リモートワーク環境下での生産性向上や創造性の拡張について考察しています。特に生成AIツールがクリエイティブワークに与える影響と、それに伴う働き方の変化について重点的に解説されています。");
      setTags(["AI", "働き方改革", "リモートワーク", "生成AI", "生産性向上"]);
      setRoles(["企画", "取材", "執筆"]);
      setBannerImage("https://placehold.co/600x300/2563eb/ffffff?text=AI%E3%81%8C%E5%A4%89%E3%81%88%E3%82%8B%E6%9C%AA%E6%9D%A5%E3%81%AE%E5%83%8D%E3%81%8D%E6%96%B9");
      
      setIsLoading(false);
      setIsGenerated(true);
    }, 1500); // 読み込み感を出すための遅延
  };

  // フォーム送信時の処理
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    console.log({ url, title, description, tags, roles, bannerImage });
    // 次ステップ（API送信）は後で追加します
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-2xl font-bold mb-6">新しい作品を登録</h1>
      <p className="text-gray-600 mb-8">外部サイトのURLを入力するだけで、AIが自動的に内容を分析し、ポートフォリオに最適な形式に変換します。</p>
      
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        {/* URL入力フォーム */}
        <form onSubmit={handleAnalyzeUrl} className="mb-6">
          <label className="block mb-2 text-sm font-medium text-gray-700">URL入力</label>
          <div className="flex">
            <input
              type="url"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              className="flex-grow border border-gray-300 rounded-l-md px-3 py-2"
              placeholder="https://example.com/your-article"
              required
            />
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-r-md transition duration-200 disabled:bg-blue-300"
              disabled={isLoading || !url}
            >
              {isLoading ? "分析中..." : "分析"}
            </button>
          </div>
        </form>
        
        {isLoading && (
          <div className="flex justify-center items-center py-10">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
            <p className="ml-3 text-gray-600">URLの内容を分析しています...</p>
          </div>
        )}
        
        {isGenerated && !isLoading && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* 左カラム - バナー画像 */}
            <div>
              <h2 className="text-lg font-medium mb-3">バナー画像</h2>
              <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-gray-100 mb-4">
                {bannerImage ? (
                  <Image 
                    src={bannerImage} 
                    alt={title} 
                    layout="fill" 
                    objectFit="cover"
                    className="transition-opacity duration-300"
                  />
                ) : (
                  <div className="flex h-full items-center justify-center bg-gray-100">
                    <p className="text-gray-400">バナー画像なし</p>
                  </div>
                )}
              </div>
              
              <div className="mt-4">
                <h2 className="text-lg font-medium mb-2">カスタムアップロード（オプション）</h2>
                <input
                  type="file"
                  accept="image/*"
                  className="w-full"
                  onChange={(e) => {
                    // 実際の実装では、ここでファイルをアップロードして
                    // バナー画像を差し替える処理を行う
                    if (e.target.files && e.target.files[0]) {
                      const reader = new FileReader();
                      reader.onload = (e) => {
                        if (e.target?.result) {
                          setBannerImage(e.target.result as string);
                        }
                      };
                      reader.readAsDataURL(e.target.files[0]);
                    }
                  }}
                />
              </div>
            </div>
            
            {/* 右カラム - 自動生成されたコンテンツ情報 */}
            <div>
              <h2 className="text-lg font-medium mb-3">コンテンツ情報（AIによる自動抽出）</h2>
              
              <div className="space-y-4">
                {/* タイトル */}
                <div>
                  <label className="block mb-1 text-sm font-medium text-gray-700">タイトル</label>
                  <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="w-full border border-gray-300 rounded-md px-3 py-2"
                  />
                </div>
                
                {/* 説明（要約） */}
                <div>
                  <label className="block mb-1 text-sm font-medium text-gray-700">
                    説明（AI生成要約）
                  </label>
                  <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    rows={5}
                    className="w-full border border-gray-300 rounded-md px-3 py-2"
                  />
                </div>
                
                {/* タグ */}
                <div>
                  <label className="block mb-1 text-sm font-medium text-gray-700">
                    タグ（AI抽出キーワード）
                  </label>
                  <div className="flex flex-wrap gap-2 mb-2">
                    {tags.map((tag, index) => (
                      <span
                        key={index}
                        className="bg-blue-100 text-blue-800 text-sm px-2.5 py-0.5 rounded-full flex items-center"
                      >
                        {tag}
                        <button
                          type="button"
                          className="ml-1 text-blue-500 hover:text-blue-700"
                          onClick={() => setTags(tags.filter((_, i) => i !== index))}
                        >
                          ×
                        </button>
                      </span>
                    ))}
                  </div>
                  <div className="flex">
                    <input
                      type="text"
                      className="flex-grow border border-gray-300 rounded-l-md px-3 py-2"
                      placeholder="新しいタグを追加"
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' && e.currentTarget.value) {
                          e.preventDefault();
                          setTags([...tags, e.currentTarget.value]);
                          e.currentTarget.value = '';
                        }
                      }}
                    />
                    <button
                      type="button"
                      className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded-r-md transition duration-200"
                      onClick={(e) => {
                        const input = e.currentTarget.previousSibling as HTMLInputElement;
                        if (input.value) {
                          setTags([...tags, input.value]);
                          input.value = '';
                        }
                      }}
                    >
                      追加
                    </button>
                  </div>
                </div>
                
                {/* 役割 - タグ形式に変更 */}
                <div>
                  <label className="block mb-1 text-sm font-medium text-gray-700">
                    役割（制作関与）
                  </label>
                  <div className="flex flex-wrap gap-2 mb-2">
                    {roles.map((role, index) => (
                      <span
                        key={index}
                        className="bg-green-100 text-green-800 text-sm px-2.5 py-0.5 rounded-full flex items-center"
                      >
                        {role}
                        <button
                          type="button"
                          className="ml-1 text-green-500 hover:text-green-700"
                          onClick={() => setRoles(roles.filter((_, i) => i !== index))}
                        >
                          ×
                        </button>
                      </span>
                    ))}
                  </div>
                  <div className="flex">
                    <input
                      type="text"
                      className="flex-grow border border-gray-300 rounded-l-md px-3 py-2"
                      placeholder="企画 / 取材 / ライター / 編集"
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' && e.currentTarget.value) {
                          e.preventDefault();
                          setRoles([...roles, e.currentTarget.value]);
                          e.currentTarget.value = '';
                        }
                      }}
                    />
                    <button
                      type="button"
                      className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded-r-md transition duration-200"
                      onClick={(e) => {
                        const input = e.currentTarget.previousSibling as HTMLInputElement;
                        if (input.value) {
                          setRoles([...roles, input.value]);
                          input.value = '';
                        }
                      }}
                    >
                      追加
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      
      {/* 登録ボタン */}
      <div className="flex justify-end">
        <button
          type="button"
          onClick={handleSubmit}
          className={`bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-md transition duration-200 ${!isGenerated ? 'opacity-50 cursor-not-allowed' : ''}`}
          disabled={!isGenerated}
        >
          ポートフォリオに登録
        </button>
      </div>
    </div>
  );
}
