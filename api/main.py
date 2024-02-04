""" GET CALL TO UNSPLASH API """

from fastapi import FastAPI, Request, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
import requests
import uvicorn
from config import UNSPLASH_API_KEY
from mongo_client import mongo_client
from version import __version__ as api_version

app = FastAPI(title="Images Gallery API", version=api_version)

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

# Create a new database called gallery
gallery = mongo_client.gallery
images_collection = gallery.images


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


@app.get("/get-images")
async def get_images():
    """
    Get all images from the database
    """
    try:
        images = images_collection.find({})  # find all images
        images_list = [image for image in images]
        return JSONResponse(images_list)
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


@app.post("/post-image")
async def post_image(request: Request):
    """
    Save the image in the database
    """
    try:
        image_data = await request.json()
        if not isinstance(image_data, dict):
            raise HTTPException(
                status_code=422, detail="Invalid JSON data. Must be a dictionary."
            )
        image_data["_id"] = image_data.get("id")
        result = images_collection.insert_one(image_data)
        inserted_id = result.inserted_id
        return {f"Successfully inserted Id: {inserted_id}"}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


# Run the Uvicorn App
if __name__ == "__main__":
    # Use the below for production
    uvicorn.run(app, host="0.0.0.0", port=5050)
