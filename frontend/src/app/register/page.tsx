"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuth } from "@/contexts/AuthContext";

export default function RegisterPage() {
    return (
      <main className="min-h-screen flex flex-col items-center justify-center p-4">
        <h1 className="text-3xl font-bold mb-6">作品を投稿する🖼️</h1>
  
        <form className="flex flex-col gap-4 w-full max-w-lg">
          {/* 作品タイトル */}
          <input
            type="text"
            placeholder="作品タイトル"
            className="border px-4 py-2 rounded-lg"
          />
  
          {/* 作品説明 */}
          <textarea
            placeholder="作品の説明"
            className="border px-4 py-2 rounded-lg h-32"
          />
  
          {/* 画像のURL（後ほどアップロード機能を追加する） */}
          <input
            type="text"
            placeholder="画像のURL（仮）"
            className="border px-4 py-2 rounded-lg"
          />
  
          {/* 投稿ボタン */}
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
          >
            投稿する
          </button>
        </form>
      </main>
    );
  }
  