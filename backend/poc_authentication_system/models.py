from fastapi_users.db import SQLAlchemyBaseUserTableUUID
from sqlalchemy.orm import (
    DeclarativeBase,
    Mapped,
)


class Base(DeclarativeBase):
    pass


class User(SQLAlchemyBaseUserTableUUID, Base):
    name: Mapped[str]
    role: Mapped[str]
    avatar: Mapped[str]
