# API de Produtos Simples

API em Node.js (sem TypeScript) com um endpoint para listar produtos mockados.

## Objetivo

Disponibilizar um endpoint HTTP para retornar todos os produtos com a estrutura:

- id
- title
- price

## Stack

- Node.js
- Express
- CORS habilitado para todos os hosts

## Estrutura do projeto

- app/backend
	- src/server.js
	- src/data/products.js

## Pré-requisitos

- Node.js 18+ (recomendado Node.js 22)
- npm

## Como rodar

1. Instalar dependências:

```bash
npm --prefix app/backend install
```

2. Executar em modo desenvolvimento:

```bash
npm --prefix app/backend run dev
```

3. Executar em modo padrão:

```bash
npm --prefix app/backend run start
```

## Porta

- Padrão: 3000
- Opcional: definir a variável de ambiente PORT

Exemplo:

```bash
PORT=3333 npm --prefix app/backend run start
```

## Endpoint

### GET /products

Retorna todos os produtos mockados.

- Status esperado: 200
- Content-Type: application/json

Exemplo de resposta:

```json
[
	{ "id": 1, "title": "Notebook", "price": 3500 },
	{ "id": 2, "title": "Mouse", "price": 120.5 },
	{ "id": 3, "title": "Teclado", "price": 280 },
	{ "id": 4, "title": "Monitor", "price": 1400.99 }
]
```

Exemplo de chamada:

```bash
curl http://localhost:3000/products
```

## Observações

- Os dados de produtos são mockados e estão em app/backend/src/data/products.js.
- O CORS está liberado para todos os hosts conforme diretriz do backend.
