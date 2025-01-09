FROM python:3.12-alpine

RUN apk add --no-cache curl bash ca-certificates

ADD https://astral.sh/uv/install.sh /uv-installer.sh

RUN sh /uv-installer.sh && rm /uv-installer.sh

ENV PATH="/root/.local/bin/:$PATH"

COPY src src

COPY pyproject.toml .

RUN uv sync --no-install-project

CMD ["uv", "run", "--directory", "src", "fastapi", "dev", "--host", "0.0.0.0"]
