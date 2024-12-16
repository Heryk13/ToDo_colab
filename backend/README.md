# ToDo colaborativa em Python com Uv, Ruff, fastapi

Projeto de treinamento para criar um gerenciador de tarefas colaborativo com autentificação etc.
Utilizando Python, Uv, Ruff, fastapi

* Uv - organiza as bibliotecas dentro do Docker, gerencia pacotes junto com linter
* Ruff - provido do Uv para verificar e limpar o codigo
* fastapi - framework para estruturação de API

## Como instalar e iniciar o UV

1. execute o codigo no cmd do powershell: powershell -ExecutionPolicy ByPass -c "irm https://astral.sh/uv/install.ps1 | iex" 
2. uv self update - parar verificar se uv está atualizado
3. uv init backend - para criar o projeto com uv

## Como rodar o Ruff

1. uvx ruff check - para verificar os erros de codigo
2. uvx ruff check --fix - para consertar automaticamente estes erros

## Como rodar fastapi
1. cd backend - ir para pasta "backend"
2. uv add fastapi[standard] - para adicionar o fastapi
3 uv run --directory src  fastapi dev - para rodar o programa