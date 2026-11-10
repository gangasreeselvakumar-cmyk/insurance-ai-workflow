"""FastAPI Application for Insurance Submission Intake Assistant.
Provides GET /health and POST /api/chat with full CORS support.
"""

import os
from contextlib import asynccontextmanager
from typing import List

from fastapi import FastAPI, HTTPException, status
from fastapi.middleware.cors import CORSMiddleware

from backend.faq_engine import FaqEngine, MODEL_NAME
from backend.schemas import AssistantResponse, ChatRequest, HealthResponse

# Global engine instance
faq_engine: FaqEngine = None  # type: ignore


@asynccontextmanager
async def lifespan(app: FastAPI):
    global faq_engine
    # Initialize engine and preload synthetic dataset
    faq_engine = FaqEngine()
    yield


app = FastAPI(
    title="Insurance Submission Intake Assistant API",
    description="Grounded AI Assistant backend for Commercial Insurance Submission Intake",
    version="1.0.0",
    lifespan=lifespan,
)

# CORS configuration
# Explicitly allows production frontend on Vercel and local development
raw_origins = os.getenv(
    "CORS_ORIGINS",
    "https://insurance-ai-workflow-blond.vercel.app,http://localhost:4200"
)
origins: List[str] = [origin.strip() for origin in raw_origins.split(",") if origin.strip()]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins if "*" not in origins else ["*"],
    allow_credentials=True,
    allow_methods=["GET", "POST", "OPTIONS"],
    allow_headers=["*"],
)


@app.get(
    "/health",
    response_model=HealthResponse,
    summary="Service Health Check",
    tags=["System"],
)
async def health_check() -> HealthResponse:
    """Returns the operational status, current AI model, and loaded dataset count."""
    count = len(faq_engine.entries) if faq_engine else 0
    return HealthResponse(
        status="ok",
        model=MODEL_NAME,
        dataset_entries=count,
    )


@app.post(
    "/api/chat",
    response_model=AssistantResponse,
    summary="Ask Insurance Intake FAQ Question",
    tags=["Assistant"],
)
async def chat_endpoint(request: ChatRequest) -> AssistantResponse:
    """Receives a user question and returns a grounded response adhering to the AssistantResponse contract."""
    clean_question = request.question.strip()
    if not clean_question:
        raise HTTPException(
            status_code=status.HTTP_422_UNPROCESSABLE_CONTENT,
            detail="Please enter a non-empty question.",
        )

    try:
        response = faq_engine.generate_response(clean_question)
        return response
    except Exception as e:
        # Fall back safely without exposing internal exceptions or secrets
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Failed to generate assistant response.",
        )
