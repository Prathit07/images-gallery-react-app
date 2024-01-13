import os
from dotenv import load_dotenv

# Load the environment variable
load_dotenv()

# Get the key
UNSPLASH_API_KEY = os.getenv("UNSPLASH_API_KEY")

# Raise an environment error when env variables are not set
if not UNSPLASH_API_KEY:
    raise EnvironmentError(
        "Please create a .env file and store the API key under UNSPLASH_API_KEY"
    )
