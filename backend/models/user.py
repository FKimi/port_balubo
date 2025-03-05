import sqlite3
from passlib.context import CryptContext
from datetime import datetime

# パスワードのハッシュ化用
pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

def get_db_connection():
    conn = sqlite3.connect('balubo.db')
    conn.row_factory = sqlite3.Row
    return conn

def create_users_table():
    """ユーザーテーブルを作成する"""
    conn = get_db_connection()
    cursor = conn.cursor()
    
    cursor.execute('''
    CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        username TEXT NOT NULL UNIQUE,
        email TEXT NOT NULL UNIQUE,
        password_hash TEXT NOT NULL,
        profile_image TEXT DEFAULT NULL,
        created_at TEXT NOT NULL,
        updated_at TEXT NOT NULL
    )
    ''')
    
    conn.commit()
    conn.close()

def create_user(username: str, email: str, password: str):
    """新しいユーザーを作成する"""
    # パスワードをハッシュ化
    hashed_password = pwd_context.hash(password)
    now = datetime.now().isoformat()
    
    conn = get_db_connection()
    cursor = conn.cursor()
    
    try:
        print(f"ユーザー作成試行: {username}, {email}")  # デバッグ用
        cursor.execute(
            "INSERT INTO users (username, email, password_hash, created_at, updated_at) VALUES (?, ?, ?, ?, ?)",
            (username, email, hashed_password, now, now)
        )
        conn.commit()
        user_id = cursor.lastrowid
        print(f"ユーザー作成成功: ID={user_id}")  # デバッグ用
        return {"id": user_id, "username": username, "email": email, "created_at": now}
    except sqlite3.IntegrityError as e:
        # ユニーク制約違反（ユーザー名またはメールが既に存在する）
        print(f"ユーザー作成失敗: {e}")  # デバッグ用
        return None
    finally:
        conn.close()

def verify_user(email: str, password: str):
    """メールアドレスとパスワードでユーザーを検証する"""
    conn = get_db_connection()
    cursor = conn.cursor()
    
    # ユーザーを検索
    cursor.execute("SELECT * FROM users WHERE email = ?", (email,))
    user = cursor.fetchone()
    conn.close()
    
    # ユーザーが見つからないか、パスワードが一致しない場合
    if user is None or not pwd_context.verify(password, user["password_hash"]):
        return None
    
    # パスワードハッシュは返さない
    return {
        "id": user["id"],
        "username": user["username"],
        "email": user["email"],
        "created_at": user["created_at"]
    }

def get_user_by_email(email: str):
    """メールアドレスでユーザーを取得する"""
    conn = get_db_connection()
    cursor = conn.cursor()
    
    cursor.execute("SELECT * FROM users WHERE email = ?", (email,))
    user = cursor.fetchone()
    conn.close()
    
    if user:
        return {
            "id": user["id"],
            "username": user["username"],
            "email": user["email"],
            "created_at": user["created_at"]
        }
    return None

def get_user_by_id(user_id: int):
    """IDでユーザーを取得する"""
    conn = get_db_connection()
    cursor = conn.cursor()
    
    cursor.execute("SELECT * FROM users WHERE id = ?", (user_id,))
    user = cursor.fetchone()
    conn.close()
    
    if user:
        return {
            "id": user["id"],
            "username": user["username"],
            "email": user["email"],
            "created_at": user["created_at"]
        }
    return None

# サーバー起動時にテーブルを作成
create_users_table() 