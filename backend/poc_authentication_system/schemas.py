import uuid
from typing import Optional

from fastapi_users import schemas
from pydantic import BaseModel


class UserSchemaRead(schemas.BaseUser[uuid.UUID]):
    name: str
    role: str
    avatar: Optional[str]


class UserSchemaCreate(schemas.BaseUserCreate):
    name: str
    role: str
    avatar: Optional[str]


class UserSchemaUpdate(schemas.BaseUserUpdate):
    name: Optional[str]
    role: Optional[str]
    avatar: Optional[str]


class UserList(BaseModel):
    users: list[UserSchemaRead]


class Message(BaseModel):
    message: str
