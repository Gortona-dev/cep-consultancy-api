<div align="center">

# CEP Consultancy API

Aplicacao full stack para consultar enderecos a partir de um CEP brasileiro, com frontend React, backend Node.js/Express e visualizacao no Google Maps.

![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=0f172a)
![Node.js](https://img.shields.io/badge/Node.js-Backend-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express-API-000000?style=for-the-badge&logo=express&logoColor=white)
![Google Maps](https://img.shields.io/badge/Google%20Maps-Map-4285F4?style=for-the-badge&logo=googlemaps&logoColor=white)

</div>

---

## Objetivo

O CEP Consultancy API foi criado para facilitar a consulta de enderecos brasileiros usando apenas o CEP. O usuario informa um CEP, a aplicacao valida a entrada, consulta o backend e exibe rua, bairro, cidade, estado e um mapa com a localizacao aproximada.

## Funcionalidades

- Consulta de CEP usando `cep-promise`.
- Backend Node.js com Express.
- Frontend React com formulario de busca.
- Validacao de CEP com mensagens de erro.
- Exibicao de rua, bairro, cidade e estado.
- Visualizacao incorporada com Google Maps.
- Botao para abrir a localizacao diretamente no Maps.
- Alternancia entre tema claro e escuro.
- Layout responsivo.

## Tecnologias

| Camada | Tecnologias |
| --- | --- |
| Frontend | React 18, CSS, Fetch API |
| Backend | Node.js, Express, CORS |
| Consulta | cep-promise |
| Mapa | Google Maps Embed |

## Estrutura

```text
cep-consultancy-api/
+-- backend/
|   +-- index.js
|   +-- package.json
+-- frontend/
|   +-- src/
|   |   +-- App.jsx
|   |   +-- index.css
|   +-- package.json
+-- README.md
```

## Como Rodar Localmente

### Requisitos

- Node.js 18+
- npm

### 1. Clonar o repositorio

```bash
git clone https://github.com/Gortona-dev/cep-consultancy-api.git
cd cep-consultancy-api
```

### 2. Rodar o backend

```bash
cd backend
npm install
npm start
```

O backend ficara disponivel em:

```text
http://localhost:3001
```

### 3. Rodar o frontend

Em outro terminal:

```bash
cd frontend
npm install
npm start
```

O frontend normalmente ficara disponivel em:

```text
http://localhost:3000
```

O `package.json` do frontend possui proxy para:

```text
http://localhost:3001
```

## Endpoint da API

```http
GET /api/cep/:codigo
```

Exemplo:

```http
GET http://localhost:3001/api/cep/13400200
```

Exemplo de resposta:

```json
{
  "cep": "13400-200",
  "state": "SP",
  "city": "Piracicaba",
  "neighborhood": "Centro",
  "street": "Rua exemplo"
}
```

## Observacoes

O frontend usa scripts com `NODE_OPTIONS=--openssl-legacy-provider`, o que ajuda em ambientes Windows/Node com Create React App antigo. Se estiver usando Linux ou macOS, talvez seja necessario adaptar esse comando no `package.json`.

## Autor

Desenvolvido por [Gabriel Ortona](https://github.com/Gortona-dev).

