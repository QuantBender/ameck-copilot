"""
Entry point for running the Ameck Copilot server
"""

import uvicorn
from app.config import get_settings


def main():
    """Run the FastAPI server"""
    settings = get_settings()
    
    uvicorn.run(
        "app.main:app",
        host=settings.host,
        port=settings.port,
        reload=settings.debug,
        log_level="info"
    )


if __name__ == "__main__":
    main()
