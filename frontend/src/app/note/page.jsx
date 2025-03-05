"use client";

import { useState } from 'react';
import { fetchNote } from '../lib/fetchNote';



export default function NotePage() {
  const [url, setUrl] = useState('');
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    try {
      const res = await fetchNote(url);
      setData(res);
    } catch (err) {
      setError(err.message);
      setData(null);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <form onSubmit={handleSubmit}>
        <input
          type="url"
          placeholder="note記事のURLを入力"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          className="border p-2 rounded w-full"
        />
        <button type="submit" className="mt-2 px-4 py-2 bg-blue-500 text-white rounded">
          記事取得
        </button>
      </form>

      {error && <p className="mt-4 text-red-500">エラー: {error}</p>}

      {data && (
        <div className="mt-6">
          <h2 className="text-xl font-bold">{data.title}</h2>
          <p className="text-gray-500 text-sm">公開日: {data.date_published}</p>
          <div className="mt-4 whitespace-pre-wrap">{data.content}</div>
        </div>
      )}
    </div>
  );
}
