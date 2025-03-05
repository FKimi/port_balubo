// fetchNote.js
export async function fetchNote(url) {
  try {
      const response = await fetch(`http://localhost:8000/scrape/?url=${encodeURIComponent(url)}`);
      if (!response.ok) {
          throw new Error('APIレスポンスエラー');
      }
      return await response.json();
  } catch (error) {
      console.error(error);
      throw error;
  }
}
