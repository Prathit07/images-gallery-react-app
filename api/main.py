from fastapi import FastAPI
import requests
import uvicorn
from config import UNSPLASH_API_KEY

app = FastAPI()

UNSPLASH_URL = "https://api.unsplash.com/photos/random"


@app.get("/new-image/{word}")
async def new_image(word: str):
    headers = {"Authorization": f"Client-ID {UNSPLASH_API_KEY}", "Accept-Version": "v1"}
    params = {"query": word}
    response = requests.get(url=UNSPLASH_URL, headers=headers, params=params)
    data = response.json()
    return data


# Run the Uvicorn App
if __name__ == "__main__":
    uvicorn.run(app, reload=True)
