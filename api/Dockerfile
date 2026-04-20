FROM python:3.12-alpine

# O PostgreSQL exige algumas ferramentas de sistema para compilar o psycopg2
RUN apk update && apk add postgresql-dev gcc python3-dev musl-dev

WORKDIR /app

# Copia as dependências e instala
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copia o restante do código
COPY . .

# Expõe a porta e roda o servidor
EXPOSE 8000
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]