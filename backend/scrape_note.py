import json
import re
import httpx

async def scrape_note_article(url: str):
    try:
        # URLからnote IDを抽出
        match = re.search(r'/n/([a-zA-Z0-9]+)$', url)
        if not match:
            raise ValueError("Invalid note URL format")
        note_id = match.group(1)

        # APIのURLを構築
        api_url = f"https://note.com/api/v3/notes/{note_id}"

        # 非同期HTTPリクエストを送信
        async with httpx.AsyncClient() as client:
            response = await client.get(api_url)
            response.raise_for_status()  # HTTPエラーをチェック
            data = response.json()

        # 必要な情報を抽出
        title = data['data']['name']
        content = data['data']['body']
        date_published = data['data']['publishAt']

        return {
            'title': title,
            'content': content,
            'date_published': date_published,
            'url': url
        }

    except httpx.RequestError as e:
        print(f"HTTP Request Error: {e}")
        raise
    except KeyError as e:
        print(f"Key Error: {e}")
        raise
    except Exception as e:
        print(f"Unexpected Error: {e}")
        raise
