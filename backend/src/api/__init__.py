"""Python identificar que é uma biblioteca."""

from fastapi import APIRouter

from api.homepage.routes import router

api_router = APIRouter()

api_router.include_router(router, prefix="/api")

