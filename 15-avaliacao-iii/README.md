# 15 - Avaliação III

Vocês deveram criar um endpoint que retorna uma pesqueisa de CEP em três formatos: JSON, CSV, XML.


## Data da entrega
- 07/12/21

## Orientações:

Criar um endpoint com base no retorno da API **Via CEP**, utilizando a **Pesquisa de CEP**.

- Utilizar somente a API: `https://viacep.com.br/ws/{{estado}}/{{cidade}}/{{logradouro}}/json/`
- [Via CEP](https://viacep.com.br/)

Para isso, vocês criarão os seguintes middlewares:
- Um para fazer o `GET` na API **Via CEP**
- Um que converte o JSON para XML.
- Um para retornar o XML.
- Um que converte o JSON para CSV.
- Um para retornar o CSV.
- Um para retornar o JSON.

A rota deve conter um dos seguintes caminhos: 
- `localhost:3000/{{estado}}/{{cidade}}/{{logradouro}}/{{tipo}}`
- `localhost:3000/?estado={{estado}}&cidade={{cidade}}&logradouro={{logradouro}}&type={{tipo}}`

O XML e o CSV deverão ser um item baixável ao ser acessado pelo navegador, para isso, vocês faram o uso dos `headers`, e deverão usar no mínimo 2 dos headers apresentados em sala, para a aplicação funcionar corretamente.

Os headers deverão ter os valores corretos, de acordo a resposta do endpoint.

Para converter para XML e CSV, vocês podem usar bibliotecas do npm.

É obrigatório a criação de uma pasta desafio contendo os scripts.

Criar tratativas de erros e exceções.

Utilizar TypeScript:
- Tipar corretamente o retorno da API **Via CEP** com `interfaces`.

Links úteis para TypeScript:
- [Getting Started Using TypeScript with Node.js and Express](https://medium.com/@pankaj.itdeveloper/getting-started-using-typescript-with-node-js-and-express-6aff573667d5)
- [Configurando Node.js com TypeScript, nodemon e Jest](https://danieldcs.com/configurando-node-js-com-typescript-nodemon-e-jest/)

Leiam este artigo para entender como passar informações de um middleware para outro:
- [Iniciando com middlewares no Express.js](https://blog.rocketseat.com.br/middlewares-no-express-js/)
