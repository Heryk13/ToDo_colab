from datetime import datetime

from sqlmodel import SQLModel


class ResponseList(SQLModel):
    """tipagem de cada chave na lista!"""
    date: datetime
    title: str
    description: str

class CreateList(SQLModel):
    """tipagem!"""
    date: datetime
class DeleteList(SQLModel):
    """tipagem!"""
    date: datetime
