# Use python 3.10 slim buster
FROM python:3.10-slim-buster

# Working Directory
WORKDIR /app

# Upgrade pip 
RUN pip install --upgrade pip

# Install the required packages
COPY requirements.txt ./

RUN pip install -r ./requirements.txt

COPY . ./

# Port
EXPOSE 5050

# CMD
CMD [ "python", "main.py" ]

