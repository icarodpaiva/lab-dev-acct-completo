# Criação de APIs com Express

O Express é um framework para aplicativo da web do Node.js mínimo e flexível que fornece um conjunto robusto de recursos para aplicativos web e móvel.

https://expressjs.com/pt-br/

Você também possui o Gerador de Arquivos do Express para te ajudar a criar o seus diretórios, pense nele como um `create-react-app` do back-end.

https://expressjs.com/pt-br/starter/generator.html

## Roteamento

O Roteamento refere-se à definição de terminais do aplicativo (URIs) e como eles respondem às solicitações do cliente. Para obter uma introdução a roteamento, consulte [Roteamento básico](https://expressjs.com/pt-br/starter/basic-routing.html).

O código a seguir é um exemplo de uma rota muito básica.

``` javascript
var express = require('express');
var app = express();

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function(req, res) {
  res.send('hello world');
});
```

## Métodos de roteamento

Um método de roteamento é derivado a partir de um dos métodos HTTP, e é anexado a uma instância da classe express.

O código a seguir é um exemplo de rotas para a raiz do aplicativo que estão definidas para os métodos GET, POST, PUT e DELETE.

``` javascript
// GET method route
app.get('/', function (req, res) {
  res.send('GET request to the homepage');
});

// POST method route
app.post('/', function (req, res) {
  res.send('POST request to the homepage');
});

// PUT method route
app.put('/user', function (req, res) {
  res.send('Got a PUT request at /user');
});

// DELETE method route
app.delete('/user', function (req, res) {
  res.send('Got a DELETE request at /user');
});
```

- Para saber mais sobre os métodos de requisição HTTP: https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Methods
- Para mais informações sobre os status de requisição HTTP: https://httpstat.us/
- Referência da API **Express JS**: https://expressjs.com/pt-br/4x/api.html


# Desafio

A partir disso, vocês criarão uma API igual a do desafio anterior, vocês deverão ter as regras do [***"httpstat"***](https://httpstat.us/) como lógica nos endpoints de vocês, são elas:

- Criar dois endpoints:
  - Endpoint GET 1: Retornar um JSON com o Status Code e o Status Message, ex: `{ code: 200, message: "OK" }`
  - Endpoint GET 2: Alem de retornar o JSON acima, ter uma configuração de **querystring** para colocar o endpoint em "sleep", ex: `/sleep?time=5000`
- Nos dois endpoints, qualquer valor que não esteja listado no site do "httpstat", deve retornar o JSON: `{ code: 404, message: "Esse valor não é um status válido." }`
- Limpe o repositório, deixe apenas arquivos e código relativo ao Desafio.