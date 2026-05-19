from pydantic_settings import BaseSettings


class Settings(BaseSettings):
    database_url: str
    frontend_url: str = "http://localhost:5173"
    environment: str = "development"

    class Config:
        env_file = ".env"
        env_file_encoding = "utf-8"


settings = Settings()