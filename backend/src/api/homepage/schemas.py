"""Esquema de tipagem para as listas."""

from datetime import datetime

from sqlmodel import SQLModel


class ResponseList(SQLModel):
    """Define a tipagem e estrutura de cada chave na lista.

    Attributes:
        date (datetime): Tempo associado com a resposta.
        title (str): Titulo da resposta
        description (str): Descrição da resposta
    """
    date: datetime
    title: str
    description: str

class CreateList(SQLModel):
    """Define a tipagem e estrutura de cada chave na lista.

    Attributes:
        date (datetime): Tempo associado com a resposta.
        title (str): Titulo da resposta
        description (str): Descrição da resposta
    """
    date: datetime
    title: str
    description: str

class DeleteList(SQLModel):
    """Define a tipagem e estrutura de cada chave na lista.

    Attributes:
        date (datetime): Tempo associado com a resposta.
        title (str): Titulo da resposta
        description (str): Descrição da resposta
    """
    date: datetime
    title: str
    description: str
