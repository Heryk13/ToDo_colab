from datetime import datetime

from sqlmodel import SQLModel


class ResponseList(SQLModel):
    date: datetime
    title: str
    description: str

