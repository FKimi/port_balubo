"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

// 作品データの型定義
interface Work {
  id: string;
  title: string;
  url: string;
  type: string;
  description?: string;
  createdAt: string;
}

// 仮の作品データ（後でAPIから取得する）
const mockWorks: Work[] = [
  {
    id: "1",
    title: "AI技術の最新動向",
    url: "https://example.com/article1",
    type: "article",
    description: "人工知能技術の最新トレンドについての解説記事",
    createdAt: "2023-05-15T09:30:00Z"
  },
  {
    id: "2",
    title: "プログラミング入門講座",
    url: "https://example.com/article2",
    type: "blog",
    description: "初心者向けのプログラミング解説ブログ",
    createdAt: "2023-06-22T14:15:00Z"
  },
  {
    id: "3",
    title: "デジタルマーケティング戦略",
    url: "https://example.com/article3",
    type: "article",
    description: "効果的なデジタルマーケティング手法の解説",
    createdAt: "2023-07-10T11:45:00Z"
  }
];

// 作品一覧を表示するページコンポーネント
export default function WorksPage() {
  const [works, setWorks] = useState<Work[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // 作品データの取得（仮実装）
  useEffect(() => {
    // APIから作品リストを取得する実装に置き換え予定
    const fetchWorks = async () => {
      try {
        // 仮のAPIレスポンスをシミュレート
        setTimeout(() => {
          setWorks(mockWorks);
          setIsLoading(false);
        }, 1000);
      } catch (error) {
        console.error('作品リスト取得エラー:', error);
        setIsLoading(false);
      }
    };

    fetchWorks();
  }, []);

  // 作品タイプによって表示するバッジの色を決定
  const getTypeColor = (type: string) => {
    switch (type) {
      case 'article':
        return 'bg-blue-100 text-blue-800';
      case 'blog':
        return 'bg-green-100 text-green-800';
      case 'book':
        return 'bg-purple-100 text-purple-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  // 日付フォーマット
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('ja-JP', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <div>
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">作品一覧</h1>
          <Link href="/works/new" className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700">
            新規作品を追加
          </Link>
        </div>
        
        {isLoading ? (
          <p className="text-center py-8">読み込み中...</p>
        ) : works.length > 0 ? (
          <div className="grid grid-cols-1 gap-6">
            {works.map(work => (
              <div key={work.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <div className="flex flex-col">
                  <div className="flex justify-between items-start">
                    <div>
                      <h2 className="text-xl font-semibold mb-2">
                        <a 
                          href={work.url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-indigo-600 hover:text-indigo-800"
                        >
                          {work.title}
                        </a>
                      </h2>
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${getTypeColor(work.type)} mb-2`}>
                        {work.type}
                      </span>
                    </div>
                    <div className="text-sm text-gray-500">
                      {formatDate(work.createdAt)}
                    </div>
                  </div>
                  
                  {work.description && (
                    <p className="text-gray-700 mt-2 mb-4">{work.description}</p>
                  )}
                  
                  <div className="flex justify-end mt-4 space-x-2">
                    <Link href={`/works/${work.id}/edit`} className="inline-block px-3 py-1 border border-indigo-600 text-indigo-600 rounded hover:bg-indigo-50">
                      編集
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-gray-50 rounded-lg">
            <p className="text-gray-500 mb-4">まだ作品が登録されていません</p>
            <Link href="/works/new" className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700">
              最初の作品を追加
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}