"""Rota raiz da aplicação."""

from fastapi import FastAPI

from api import api_router

app = FastAPI()

@app.get("/")
async def root():
    """Lida com a end point raiz da aplicação.

    Returns:
        dict:uma resposta em JSON contendo "Hello world" na chave "message".
    """
    return {"message": "Hello World"}

app.include_router(api_router)
