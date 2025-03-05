from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from scrape_note import scrape_note_article
from routers import auth  # 追加
from models.user import create_users_table

app = FastAPI()

# CORS設定を修正
origins = [
    "http://localhost:3000",
    "http://127.0.0.1:3000",
    # 開発時の他のポートも必要に応じて追加
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ルーターの追加
app.include_router(auth.router, prefix="/api/auth", tags=["auth"])

# アプリ初期化時にテーブルを作成
create_users_table()

@app.get("/")
def read_root():
    return {"status": "ok", "service": "balubo-backend"}

@app.get("/scrape/")
async def scrape_note(url: str):
    result = scrape_note_article(url)

    if result['title'].startswith("APIリクエストエラー") or \
        result['title'].startswith("JSON解析エラー") or \
        result['title'].startswith("URL形式エラー") or \
        result['title'].startswith("予期せぬエラー"):
        raise HTTPException(status_code=400, detail=result['title'])

    return result

# 新しいエンドポイントを追加（フロントエンドから呼び出されているエンドポイント）
@app.post("/analyze-url/")
async def analyze_url(data: dict):
    url = data.get("url")
    user_id = data.get("user_id")
    
    # 非同期関数を正しく呼び出す
    result = await scrape_note_article(url)  # awaitキーワードを追加
    
    # ユーザーIDを追加
    result["user_id"] = user_id
    
    return result

# OPTIONS メソッドに対応するためのエンドポイントを追加（プリフライトリクエスト対応）
@app.options("/analyze-url/")
async def options_analyze_url():
    return {}  # 空のレスポンスを返す
