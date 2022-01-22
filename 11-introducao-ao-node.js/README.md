# Node.js

## O que é?

Node.js é uma plataforma para desenvolvimento de aplicações **server-side** baseadas em rede utilizando **JavaScript** e o **V8 JavaScript Engine**, ou seja, com Node.js podemos criar uma variedade de aplicações Web utilizando apenas código em JavaScript.

### V8 JavaScript Engine

É o interpretador de JavaScript open source implementado pelo Google em C++ e utilizado pelo Chrome. O que sem dúvidas gera um ótimo desempenho do Node.js.

## Instalação

A instalação do Node.js é extremamente simples graças ao fato de o V8 JavaScript Engine ser completamente multi-plataforma, tudo que você precisa fazer é visitar a página oficial do [Node.js](https://nodejs.org/en/), e baixar a versão desejada: LTS ou Current
É recomendado instalar a versão LTS, pois é a versão mais estável.

Após a instalação, basta executar o seguinte comando no seu terminal para verificar se foi instalado corretamente:

```
node -v
```

Deve retornar a versão do node que foi instalada, como por exemplo `v14.18.1`.

## Criando nosso primeiro Web Server

Vamos criar um servidor que retorna um "Hello World!"

```js
const http = require('http');

http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World!');
}).listen(3000);
```

Para executar o seu programa Node basta o seguinte comando no seu terminal:

`node nome-do-arquivo.js`

Para testar seu servidor você pode acessar `localhost:3000` no seu navegador ou utilizar linha de comando com o comando `curl` (em uma nova instância do terminal) como mostrado a seguir:

`curl http://localhost:3000/`

## Node é Orientado a Eventos

Quando estamos desenvolvendo com Node.js devemos utilizar uma abordagem orientada a eventos, isso quer dizer que o desenvolvedor precisa conhecer os eventos que serão emitidos em diferentes momentos da execução e também saber como ouvi-los para executar as operações necessárias.

No nosso exemplo anterior utilizamos esse conceito quando chamamos o método `listen` do objeto do tipo web server e passamos como parâmetro a porta 3000, com isso fizemos que a nossa aplicação ouvisse ao evento que é emitido sempre que alguém faz uma requisição no `localhost:3000` e a nossa resposta foi servir a string ou a página html. Este evento é chamado `request`.

Exemplo:

```js
const http = require('http');

const server = http.createServer();

server.on('request', (req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World!');
});

server.listen(3000);
```

## Módulo HTTP
O módulo HTTP pode criar um servidor HTTP que escuta as portas do servidor e dá uma resposta de volta ao cliente, como no exemplo acima.
Se a resposta do servidor HTTP deve ser exibida como HTML ou de outro tipo, você deve incluir um cabeçalho HTTP com o tipo de conteúdo correto:

```js
const http = require('http');

http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/html',
    });
    res.write('<div>Hello World!</div>');
    res.end();
}).listen(3000);
```

## Módulo URL
O módulo de URL divide um endereço da Web em partes legíveis.

Analise um endereço com o método `url.parse()` que retornará um objeto de URL com cada parte do endereço como propriedades:

```js
const url = require('url');

const address = 'http://localhost:8080/app?city=Atibaia&state=SP';
const q = url.parse(address, true);

console.log(q.host);        // retorna 'localhost:8080'
console.log(q.pathname);    // retorna '/app'
console.log(q.search);      // retorna '?city=Atibaia&state=SP'
console.log(q.query);       // retorna um objeto '{ city: 'Atibaia', state: 'SP' }'
console.log(q.query.city)   // retorna 'Atibaia'
```

## gitignore
Um arquivo `.gitignore` especifica arquivos não rastreanodemdos pelo Git, e que devem ser ignorados. São arquivos como tudo o que está dentro do `node_modules`, pois são arquivos obtidos através do `package.json`:

```
node_modules/
package-lock.json
yarn.lock
```

## Nodemon
nodemon é uma ferramenta que ajuda a desenvolver aplicativos baseados em node.js, reiniciando automaticamente o aplicativo de nó quando mudanças de arquivo no diretório são detectadas.

O nodemon não requer nenhuma mudança adicional em seu código ou método de desenvolvimento. nodemon é um invólucro substituto para node. Para usar nodemon, substitua a palavra nodena linha de comando ao executar seu script.

### Instalação

Por meio de clonagem com git no [repositório](https://github.com/remy/nodemon) ou usando [npm](http://npmjs.org) (a forma recomendada):

```bash
npm install -g nodemon # or using yarn: yarn global add nodemon
```

E o nodemon será instalado globalmente no caminho do seu sistema.

Você também pode instalar o nodemon como uma dependência de desenvolvimento:

```bash
npm install --save-dev nodemon # or using yarn: yarn add nodemon -D
```

## Docs:

- [O que é Node.js e saiba os primeiros passos](https://tableless.com.br/o-que-nodejs-primeiros-passos-com-node-js/)
- [Node HTTP Documentation](https://nodejs.org/api/http.html)
- [Node.js HTTP Module on W3Schools](https://www.w3schools.com/nodejs/nodejs_http.asp)
- [Node.js URL Module on W3Schools](https://www.w3schools.com/nodejs/nodejs_url.asp)
- [MIME types](https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Basico_sobre_HTTP/MIME_types)
- [HTTP headers](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers)
- [gitignore Documentation](https://git-scm.com/docs/gitignore)
- [.gitignore – Saiba como ignorar arquivos no Git facilmente](https://fjorgemota.com/gitignore-ou-como-ignorar-arquivos-no-git/)

## Desafio

Vocês deveram criar um servidor local com o `createServer` do módulo `http` do Node.js que retorne um html ou json com um status.

Para o status vocês deveram usar uma requisição, que pode ser feita com o `Axios`, com o seguinte server: `http://httpstat.us/`

Ex: `httpstat.us/200`
Retorna: `200 OK`

Este server retorna o status referente ao código de uma requisição, no caso, o status `200` significa que a requisição foi completada, ou seja `OK`.

Este artigo pode ser útil:
- [Aprenda Async Await na prática, de forma simples](https://medium.com/matheus-rossi/aprenda-async-await-na-pr%C3%A1tica-de-forma-simples-e6eb29813ec2)

O servidor deve:
- Usar `createServer` do módulo `http` do Node.js;
- Utilizar o módulo `url` do Node.js para obter o parâmetro `status`
- Retornar corretamente o status da API;
- Ser do tipo html ou json.

Para se destacar:
- Utilizar `async/await` corretamente.
- Ter tratativas de erros, exemplo: [try...cacth](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/try...catch)
- Criar um arquivo `.gitignore`.

### Inicialização:

- De um Fork neste repositório;
- Agora você deve clonar o repositório em sua máquina, há um botão azul "Clone" no seu repositório do GitLab, clique nele e use a URL com HTTPS: `git clone url-copiada`;
- Agora dentro da pasta clonada, clique com o botão direito do mouse e clique em "Git Bash Here" para entrar na pasta pelo terminal;
- Crie um arquivo chamado `server.js`, que será o arquivo responsável por criar o servidor Node.

### Entrega:

- Crie uma branch `seu-nome/intro-node`;
- Faça commits;
- Assim que terminar dê `git push origin seu-nome/intro-node`, crie um Merge Request na interface do GitLab, acesse o menu "Merge Requests" e crie um, configure o "Target Branch" para o repositório original para que seu App seja avaliado e revisado e para que possamos te dar um feedback;
- O nome do Merge Request deve ser o seu nome completo.
