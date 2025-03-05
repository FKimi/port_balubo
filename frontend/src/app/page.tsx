"use client";

import React from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* ヘッダー */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-600">balubo</h1>
          <nav className="flex items-center space-x-4">
            <Link href="/login" className="text-gray-700 hover:text-blue-600">
              ログイン
            </Link>
            <Link href="/signup" className="bg-blue-600 text-white px-4 py-2 rounded-md font-medium hover:bg-blue-700">
              新規登録
            </Link>
          </nav>
        </div>
      </header>

      {/* ヒーローセクション */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="md:flex md:items-center md:justify-between">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h2 className="text-4xl font-extrabold text-gray-900 mb-6">
                クリエイターのための<br />
                自動ポートフォリオ生成
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                外部サイトの活動実績を自動で収集し、あなたのスキルを可視化。<br />
                放置するだけでポートフォリオが完成します。
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Link href="/signup" className="bg-blue-600 text-white px-8 py-3 rounded-md font-medium hover:bg-blue-700 text-center">
                  無料で始める
                </Link>
                <Link href="/login" className="border border-blue-600 text-blue-600 px-8 py-3 rounded-md font-medium hover:bg-blue-50 text-center">
                  ログイン
                </Link>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="bg-gray-100 rounded-lg p-6 shadow-lg">
                {/* イメージ画像やアプリのスクリーンショットを表示 */}
                <div className="aspect-w-16 aspect-h-9 rounded-md overflow-hidden bg-gray-300">
                  <div className="p-4 flex items-center justify-center h-full">
                    <p className="text-gray-500 text-center">アプリのスクリーンショット画像</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 機能説明セクション */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            主な機能
          </h3>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="h-12 w-12 flex items-center justify-center rounded-md bg-blue-500 text-white mb-4">
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">自動コンテンツ収集</h3>
              <p className="text-gray-600">
                note、NewsPicks、Xなどの記事を自動で収集。一度URLを登録すれば、新しい記事も自動的に追加されます。
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="h-12 w-12 flex items-center justify-center rounded-md bg-blue-500 text-white mb-4">
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">AIによるスキル解析</h3>
              <p className="text-gray-600">
                AIが記事の内容を解析し、専門性やスキルを自動的にタグ付け。あなたの強みを可視化します。
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="h-12 w-12 flex items-center justify-center rounded-md bg-blue-500 text-white mb-4">
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">自動プロフィール生成</h3>
              <p className="text-gray-600">
                収集したコンテンツからAIがプロフィールを自動生成。手間をかけずに魅力的な自己紹介が完成します。
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTAセクション */}
      <div className="bg-blue-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl font-bold text-white mb-6">
            今すぐあなたのポートフォリオを作成しましょう
          </h3>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            登録は無料です。外部サイトの活動実績を自動収集して、あなたのスキルを最大限にアピールしましょう。
          </p>
          <Link href="/signup" className="bg-white text-blue-600 px-8 py-3 rounded-md font-medium hover:bg-blue-50 inline-block">
            無料アカウント作成
          </Link>
        </div>
      </div>

      {/* フッター */}
      <footer className="bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="md:flex md:items-center md:justify-between">
            <div className="flex justify-center md:justify-start space-x-6">
              <a href="#" className="text-gray-400 hover:text-gray-500">
                <span className="sr-only">利用規約</span>
                <span className="text-sm">利用規約</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-500">
                <span className="sr-only">プライバシーポリシー</span>
                <span className="text-sm">プライバシーポリシー</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-500">
                <span className="sr-only">お問い合わせ</span>
                <span className="text-sm">お問い合わせ</span>
              </a>
            </div>
            <p className="mt-8 text-center text-base text-gray-400 md:mt-0 md:text-right">
              &copy; 2023 balubo. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}