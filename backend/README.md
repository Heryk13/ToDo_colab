# ToDo colaborativa em Python com Uv, Ruff, fastapi

Projeto de treinamento para criar um gerenciador de tarefas colaborativo com autentificação etc.
Utilizando Python, Uv, Ruff, fastapi

* Uv - organiza as bibliotecas dentro do Docker, gerencia pacotes junto com linter
* Ruff - provido do Uv para verificar e limpar o codigo
* fastapi - framework para estruturação de API

## Como instalar e iniciar o UV
> [!NOTE]  
> apenas para inicio de projeto  

1. [link da instalação](https://docs.astral.sh/uv/getting-started/installation/)
1. `uv self update` parar verificar se uv está atualizado
1. `uv init backend` para criar o projeto com uv  


## Como rodar o Ruff

1. `uvx ruff check` para verificar os erros de codigo
1. `uvx ruff check --fix` para consertar automaticamente estes erros

## Como rodar fastapi
```shell
cd backend
uv run --directory src  fastapi dev
```
> [!NOTE]  
> ir para pasta backend e rodar o programa

## como instalar bibliotecas
uv add xxx (ex: uv add sqlmodel)
 