from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import requests
import uvicorn
from config import UNSPLASH_API_KEY

app = FastAPI()

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
    headers = {"Authorization": f"Client-ID {UNSPLASH_API_KEY}", "Accept-Version": "v1"}
    params = {"query": word}
    response = requests.get(url=UNSPLASH_URL, headers=headers, params=params)
    image_data = response.json()
    return image_data


# Run the Uvicorn App
if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=5050)
