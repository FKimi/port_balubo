from sqlalchemy import create_engine, Column, Integer, String
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

# SQLiteデータベースを接続するURL
# 相対パスで指定する場合は、実行場所に注意
SQLALCHEMY_DATABASE_URL = "sqlite:///./balubo.db"

# エンジン作成
engine = create_engine(
    SQLALCHEMY_DATABASE_URL, connect_args={"check_same_thread": False}
)

# セッション作成
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

# モデル作成のためのベースクラス
Base = declarative_base()

# DBセッションの依存性
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close() 