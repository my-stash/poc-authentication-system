import uuid
from typing import Optional

from fastapi import Depends, Request
from fastapi_users import BaseUserManager, FastAPIUsers, UUIDIDMixin, models
from fastapi_users.authentication import (
    AuthenticationBackend,
    BearerTransport,
    JWTStrategy,
)
from fastapi_users.db import SQLAlchemyUserDatabase

from poc_authentication_system.database import get_user_db
from poc_authentication_system.models import User
from poc_authentication_system.settings import Settings

SECRET = Settings().SECRET_KEY
EXPIRE_SECONDS = Settings().ACCESS_TOKEN_EXPIRE_SECONDS


class UserManager(UUIDIDMixin, BaseUserManager[User, uuid.UUID]):
    reset_password_token_secret = SECRET
    verification_token_secret = SECRET

    @classmethod
    async def on_after_register(
        self, user: User, request: Optional[Request] = None
    ):
        print(f'User {user.id} has registered.')

    @classmethod
    async def on_after_forgot_password(
        self, user: User, token: str, request: Optional[Request] = None
    ):
        print(
            f'User {user.id} has forgot their password. Reset token: {token}'
        )

    @classmethod
    async def on_after_request_verify(
        self, user: User, token: str, request: Optional[Request] = None
    ):
        print(
            f'Verification requested for user {user.id}. ' +
            'Verification token: {token}'
        )


async def get_user_manager(
    user_db: SQLAlchemyUserDatabase = Depends(get_user_db),
):
    yield UserManager(user_db)


bearer_transport = BearerTransport(tokenUrl='auth/jwt/login')


def get_jwt_strategy() -> JWTStrategy[models.UP, models.ID]:
    return JWTStrategy(
        secret=SECRET, lifetime_seconds=EXPIRE_SECONDS
    )


auth_backend = AuthenticationBackend(
    name='jwt',
    transport=bearer_transport,
    get_strategy=get_jwt_strategy,
)

fastapi_users = FastAPIUsers[User, uuid.UUID](get_user_manager, [auth_backend])

current_active_user = fastapi_users.current_user(active=True)
