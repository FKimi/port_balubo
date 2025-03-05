from datetime import datetime, timedelta
from typing import Optional, Dict, Any
from jose import JWTError, jwt
from fastapi import Depends, HTTPException, status
from fastapi.security import OAuth2PasswordBearer

# 設定
SECRET_KEY = "高セキュリティーの秘密鍵に置き換えてください"  # 本番環境では環境変数から取得すべき
ALGORITHM = "HS256"
ACCESS_TOKEN_EXPIRE_MINUTES = 30 * 24 * 60  # 30日

oauth2_scheme = OAuth2PasswordBearer(tokenUrl="token")

def create_access_token(data: Dict[str, Any], expires_delta: Optional[timedelta] = None) -> str:
    """
    アクセストークン（JWT）を生成する
    
    Args:
        data: トークンに含めるデータ（通常はユーザーID）
        expires_delta: トークンの有効期限
        
    Returns:
        生成されたJWTトークン
    """
    to_encode = data.copy()
    
    if expires_delta:
        expire = datetime.utcnow() + expires_delta
    else:
        expire = datetime.utcnow() + timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
        
    to_encode.update({"exp": expire})
    encoded_jwt = jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)
    return encoded_jwt

def verify_token(token: str) -> Dict[str, Any]:
    """
    JWTトークンを検証し、デコードする
    
    Args:
        token: 検証するJWTトークン
        
    Returns:
        デコードされたトークンデータ
        
    Raises:
        HTTPException: トークンが無効な場合
    """
    try:
        payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
        return payload
    except JWTError:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="無効な認証情報",
            headers={"WWW-Authenticate": "Bearer"},
        )

async def get_current_user(token: str = Depends(oauth2_scheme)) -> Dict[str, Any]:
    """
    現在のユーザーを取得する依存関数
    
    Args:
        token: JWTトークン（FastAPIが自動的に抽出）
        
    Returns:
        現在のユーザー情報
    """
    payload = verify_token(token)
    user_id: int = payload.get("sub")
    if user_id is None:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="無効な認証情報",
            headers={"WWW-Authenticate": "Bearer"},
        )
    
    # ここでデータベースからユーザー情報を取得する処理を追加
    # 例: user = get_user_by_id(user_id)
    # この実装は簡略化のため省略
    
    return {"user_id": user_id} 