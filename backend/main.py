from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import sqlite3

app = FastAPI()

# CORS設定（フロントエンドからのアクセスを許可）
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # Next.jsのデフォルトURL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def read_root():
    return {"message": "baluboプロジェクトのバックエンドAPIへようこそ！"}

@app.get("/api/health")
def health_check():
    return {"status": "ok", "service": "balubo-backend"}

# データベース接続用関数（リクエストごとに実行）
def get_db():
    conn = sqlite3.connect('balubo.db')
    return conn

# テスト用エンドポイントを作成（DB確認用）
@app.get("/api/test")
def read_test_data():
    conn = get_db()
    cursor = conn.cursor()

    cursor.execute('''
        CREATE TABLE IF NOT EXISTS test (
            id INTEGER PRIMARY KEY,
            name TEXT NOT NULL
        )
    ''')

    # 毎回同じテストデータが増えないように重複を防止
    cursor.execute("SELECT COUNT(*) FROM test WHERE name=?", ("テストデータ",))
    if cursor.fetchone()[0] == 0:
        cursor.execute("INSERT INTO test (name) VALUES (?)", ("テストデータ",))
        conn.commit()

    cursor.execute("SELECT * FROM test")
    data = cursor.fetchall()

    conn.close()

    return {"data": data}
