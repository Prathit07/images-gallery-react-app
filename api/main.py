""" GET CALL TO UNSPLASH API """
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import requests
import uvicorn
from config import UNSPLASH_API_KEY
from version import __version__ as api_version

app = FastAPI(title="Images Gallery API",
              version=api_version)

UNSPLASH_URL = "https://api.unsplash.com/photos/random"

# Origins for CORS
origins = ["http://localhost:3000"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/new-image/{word}")
async def new_image(word: str):
    """
    Get a random image from Unsplash API using a keyword.
    """
    try:
        headers = {
            "Authorization": f"Client-ID {UNSPLASH_API_KEY}",
            "Accept-Version": "v1",
        }
        params = {"query": word}
        response = requests.get(
            url=UNSPLASH_URL, headers=headers, params=params, timeout=60
        )
        image_data = response.json()
        return image_data
    except requests.exceptions.RequestException as e:
        return {f"Error: Request to Unsplash API failed: {e}"}


# Run the Uvicorn App
if __name__ == "__main__":
    # Use the below for production
    uvicorn.run(app, host="0.0.0.0", port=5050)
