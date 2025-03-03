import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-4xl font-bold mb-6">
        Baluboポートフォリオへようこそ👋
      </h1>
      <p className="text-lg mb-4">
        自分の作品を共有して、創作活動を加速させよう！
      </p>

      <div className="flex gap-4 mt-8">
        <Link href="/works" className="bg-blue-500 text-white px-4 py-2 rounded-lg">
          作品一覧を見る
        </Link>
        
        <Link href="/register" className="bg-gray-300 px-4 py-2 rounded-lg">
          新規登録
        </Link>
      </div>
    </main>
  );
}
