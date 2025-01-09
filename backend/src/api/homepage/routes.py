from datetime import datetime

from fastapi import APIRouter

from api.homepage.schemas import CreateList, DeleteList, ResponseList

router = APIRouter()

@router.get("/list_task")
def list_task() ->list[ResponseList] :
    """Lista de chaves das tasks!"""
    date_time = datetime.now()
    return[
        {
        "date": date_time,
        "title": "Grupo de amigos",
        "description": "grupo do projeto xxxxxx",
        },

        {
        "date": date_time,
        "title": "Projeto Y",
        "description": "grupo do projeto yyyyyy",
        },
    ]

@router.get("/create_task")
def create_task() -> list[CreateList]:
    """Criar uma nova task!"""
    return{
        "message" : "hello world",
    }

@router.get("/delete_task")
def delete_task() -> list[DeleteList]:
    """Deletar alguma task!"""
    return{
        "message" : "hello world",
    }
