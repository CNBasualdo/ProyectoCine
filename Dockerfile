FROM python:3.12.4
ENV PYTHONUNBUFFERD=1
WORKDIR /proyectocine1
COPY requirements.txt /proyectocine1/
RUN python -m pip install --ugrade pip
RUN python -m pip install -r requirements.txt

COPY . /proyectocine1/