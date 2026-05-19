from fastapi import APIRouter
from sqlalchemy import text

from app.db.database import engine

router = APIRouter(tags=["Database"])


@router.get("/db-test")
def test_database_connection():
    with engine.connect() as connection:
        result = connection.execute(text("SELECT 1"))
        value = result.scalar()

    return {
        "database": "connected",
        "result": value,
    }