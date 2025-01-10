from datetime import datetime

from fastapi import APIRouter

from api.homepage.schemas import CreateList, DeleteList, ResponseList

router = APIRouter()

@router.get("/list_task")
def list_task() ->list[ResponseList] :
    """Creia uma lista de task predefinida.

    Returns:
        list[dict]: uma lista de tasks, onde cada task é representada por um
         dict.
        contendo uma chave:
            - "date" (datetime): o horario em que a task foi criada.
            - "title" (str): o titulo da task.
            - "description" (str): a descrição da task.
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

@router.get("/create_task")
def create_task() ->list[CreateList]:
    """Cria uma nova task.

    Returns:
        list[dict]: .
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

@router.get("/delete_task")
def delete_task() ->list[DeleteList]:
    """Deleta uma task.

    Returns:
        list[dict]:.
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
