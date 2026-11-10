"""Pydantic schemas matching the Angular AssistantResponse data contract."""

from typing import Optional
from pydantic import BaseModel, Field


class ChatRequest(BaseModel):
    question: str = Field(..., min_length=1, description="User's insurance submission intake question")


class FaqReference(BaseModel):
    id: str
    category: str
    title: str
    answer: str


class AssistantResponse(BaseModel):
    text: str
    source: Optional[FaqReference] = None
    importantConsideration: Optional[str] = None
    unsupportedAction: Optional[bool] = False


class HealthResponse(BaseModel):
    status: str
    model: str
    dataset_entries: int
