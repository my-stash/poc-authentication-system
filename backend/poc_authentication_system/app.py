from contextlib import asynccontextmanager

from fastapi import Depends, FastAPI
from fastapi.middleware.cors import CORSMiddleware

from poc_authentication_system.database import User, create_db_and_tables
from poc_authentication_system.schemas import (
    UserSchemaCreate,
    UserSchemaRead,
    UserSchemaUpdate,
)
from poc_authentication_system.users import (
    auth_backend,
    current_active_user,
    fastapi_users,
)


@asynccontextmanager
async def lifespan(app: FastAPI):
    # Not needed if you setup a migration system like Alembic
    await create_db_and_tables()
    yield


app = FastAPI(lifespan=lifespan)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(
    fastapi_users.get_auth_router(auth_backend),
    prefix='/auth/jwt',
    tags=['auth'],
)
app.include_router(
    fastapi_users.get_register_router(UserSchemaRead, UserSchemaCreate),
    prefix='/auth',
    tags=['auth'],
)
app.include_router(
    fastapi_users.get_reset_password_router(),
    prefix='/auth',
    tags=['auth'],
)
app.include_router(
    fastapi_users.get_verify_router(UserSchemaRead),
    prefix='/auth',
    tags=['auth'],
)
app.include_router(
    fastapi_users.get_users_router(UserSchemaRead, UserSchemaUpdate),
    prefix='/users',
    tags=['users'],
)


@app.get("/authenticated-route")
async def authenticated_route(user: User = Depends(current_active_user)):
    return {"message": f"Hello {user.email}!"}
