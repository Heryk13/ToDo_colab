from datetime import datetime

from fastapi import APIRouter

from api.homepage.schemas import ResponseList

router = APIRouter()

@router.get("/list_task")
def list_task() ->list[ResponseList] :
    """

    """
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

def create_task():
    """
    """
    return{
        "message" : "hello world"
    }
