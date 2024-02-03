from pymongo import MongoClient
from config import MONGO_URL, MONGO_USERNAME, MONGO_PASSWORD, MONGO_PORT

mongo_client = MongoClient(
    host=MONGO_URL, username=MONGO_USERNAME, password=MONGO_PASSWORD, port=MONGO_PORT
)


def insert_test_document():
    """
    Insert data into a test database
    """
    db = mongo_client.test  # Create test db if absent
    test_collection = db.test_connection
    result = test_collection.insert_one({"name": "Prathit", "age": 27})
    print(result)
