# Middlewares e Cabeçalhos HTTP

## Cabeçalhos HTTP (Headers)

Os cabeçalhos HTTP permitem que o cliente e o servidor passem informações adicionais com a solicitação ou a resposta HTTP. Um cabeçalho de solicitação é composto por seu nome case-insensitive (não diferencia letras maiúsculas e minúsculas), seguido por dois pontos ':' e pelo seu valor (sem quebras de linha).  Espaços em branco antes do valor serão ignorados.

Cabeçalhos podem ser classificados de acordo com os seus contextos:
- Cabeçalho genérico: Cabeçalhos que podem ser usados tanto em solicitações quanto em respostas, porém sem relação com os dados eventualmente transmitidos no corpo da mensagem.
- Cabeçalho de solicitação: Cabeçalhos contendo mais informação sobre o recurso a ser obtido ou sobre o próprio cliente.
- Cabeçalho de resposta: Cabeçalhos contendo informação adicional sobre a solicitação, como a sua localização ou sobre o servidor.
- Cabeçalho de entidade: Cabeçalhos contendo mais informação sobre o conteúdo da entidade, como o tamanho do conteúdo ou o seu [MIME-type](https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Basics_of_HTTP/MIME_types).

Alguns exemplos:

- **Cache-Control:** Especifica diretivas para mecanismos de cache em requisições e respostas.
- **Expires:** A data/hora depois que a resposta é considerada obsoleta.
- **Connection**: Controla se uma conexão de rede continua ou não aberta após o término da transação atual.
- **Keep-Alive**: Controla por quanto tempo uma conexão persistente deve permanecer aberta.
- **Accept**: Informa ao servidor sobre os tipos de dados que podem ser enviados de volta. Isto é MIME-type.
- **Accept-Charset**: Informa ao servidor sobre qual conjunto de caracter o cliente é capaz de entender.
- **Cookie:** Contém cookies HTTP armazenados préviamente enviados pelo servidor com o cabeçalho `Set-Cookie`.
- **Set-Cookie:** Envia cookies do servidor para o agente de usuário.
- **Access-Control-Allow-Origin**: Indica se a resposta pode ser compartilhada.
- **Content-Disposition:** Em uma resposta HTTP regular, é um cabeçalho que indica se o conteúdo deve ser exibido em linha no navegador, ou seja, como uma página da Web ou como parte de uma página da Web ou como um anexo, que é baixado e salvo localmente.
- **Content-Type:** Indica o tipo de mídia do recurso.
- **Content-Encoding:** Usado para especificar o algoritmo de compressão.


## Usando Middlewares com Express

O Express é uma estrutura web de roteamento e middlewares que tem uma funcionalidade mínima por si só: Um aplicativo do Express é essencialmente uma série de chamadas de funções de middleware.

Funções de Middleware são funções que tem acesso ao objeto de solicitação (`req`), o objeto de resposta (`res`), e a próxima função de middleware no ciclo solicitação-resposta do aplicativo. A próxima função middleware é comumente encerrada por uma variável chamada `next`.

Funções de middleware podem executar as seguintes tarefas:
- Executar qualquer código.
- Fazer mudanças nos objetos de solicitação e resposta.
- Encerrar o ciclo de solicitação-resposta.
- Chamar a próxima função de middleware na pilha.

Se a atual função de middleware não terminar o ciclo de requisição-resposta, ela precisa chamar `next()` para passar o controle para a próxima função de middleware. Caso contrário, a solicitação ficará suspensa.

Um aplicativo Express pode usar diferentes tipos de middlewares, porém iremos focar no `Middleware de nível do aplicativo`, vinculando middlewares de nível do aplicativo a uma instância do objeto `app` usando a função `app.use()`:

```js
const app = express();

app.use((req, res, next) => {
  console.log('Time:', Date.now());
  next();
});
```

Podemos montar middlewares em uma rota:

```js
app.use('/user/:id', (req, res, next) => {
  console.log('id param:', req.params.id);
  next();
});
```
Neste caso, `:id` é um parâmetro dinâmico que pode ser acessado via `req.params.id`.

## Docs:
- [Cabeçalhos HTTP](https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Headers)
- [Entendendo um pouco mais sobre o protocolo HTTP](https://nandovieira.com.br/entendendo-um-pouco-mais-sobre-o-protocolo-http)
- [Usando middlewares](https://expressjs.com/pt-br/guide/using-middleware.html)
- [Escrevendo middlewares pra uso em aplicativos do Express](https://expressjs.com/pt-br/guide/writing-middleware.html)
- [Entendendo como funciona os middlewares do Express](https://udgwebdev.com/entendendo-como-funciona-os-middlewares-do-express/)
- [express async await](https://lombardo-chcg.github.io/languages/2017/09/18/express-async-await.html)


## Interface e Classes

### Interfaces
Uma interface é, em essência, um tipo literal de objeto nomeada, ou seja, define a estrutura de um objeto.
Exemplo:

```ts
interface IPerson {
  name: string
  age: number | string
}
```

Com esta interface podemos falar que um objeto do tipo `IPerson` pode ser de duas maneiras:

```ts
const person: IPerson = {
  name: 'John',
  age: 20,
}

const person2: IPerson = {
  name: 'Joe',
  age: '21',
}
```

Podemos extender classes para reaproveitar campos já exitentes, exemplo:

```ts
interface IStudent extends IPerson {
  school: string
}

const student: IStudent = {
  name: 'John',
  age: 20,
  school: 'Fatec',
}
```

Podemos também definir itens não obrigatórios com `?`, exemplo:
```ts
interface IPerson {
  name: string
  age: number
  city?: string
}

const person: IPerson = {
  name: 'John',
  age: 20,
}

const person2: IPerson = {
  name: 'Joe',
  age: 21,
  city: 'São Paulo',
}
```

## Classes

Classes em JavaScript são introduzidas no ECMAScript 2015 e são simplificações da linguagem para as heranças baseadas nos protótipos. A sintaxe para classes não introduz um novo modelo de herança de orientação a objetos em JavaScript. Classes em JavaScript provêm uma maneira mais simples e clara de criar objetos e lidar com herança.

O sistema de classes no TypeScript usa um modelo de herança única que deve ser familiar a qualquer programador que tenha trabalhado com qualquer linguagem baseada em classes.

Exemplo:

```ts
class Person {
  public name: string
  public age: number

  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }

  public showMe() {
    console.log(`Hello, I am ${this.getName()}, and I am ${this.age} years old`)
  }

  private getName(): string {
    return this.name
  }
}

const person = new Person('John', 20)
person.showMe() // result => Hello, I am John and I am 20 years old
```

Classes em TypeScript pode também definir as propriedades como sendo `public`, `private`, `protected` e/ou `static`:
- **public:** Permite acessar a propriedade livremente.
- **private:** Quando uma propriedade é marcada como `private`, ela não pode ser acessada de fora da classe que o contém.
- **protected:** O modificador `protected` age como o `private`, com a exceção de que os membros declarados como `protected` também podem ser acessados ​​nas classes derivadas.  
- **static:** São visíveis na própria classe e não nas instâncias.

### Docs:
- [Classes JS ES6](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Classes)
- [Classes TypeScript](https://www.typescriptlang.org/docs/handbook/classes.html)
- [Interfaces TypeScript](https://www.typescriptlang.org/docs/handbook/interfaces.html)
- [Write Node server with ES6 Classes](https://dev.to/yuribenjamin/write-node-server-with-es6-classes-3b0j)


## Desafio

### Entrega:

Vocês deverão criar um endpoint que converte um JSON pra XML, com base no retorno da API **Via CEP**, utilizando a **Pesquisa de CEP**:

- `https://viacep.com.br/ws/{{estado}}/{{cidade}}/{{logradouro}}/json/`
- [Via CEP](https://viacep.com.br/)

Para isso, vocês criarão um middleware que faz o `GET` na API **Via CEP**, um middleware que converte para XML e a rota que retorna o XML.

A rota deve conter um dos seguintes caminhos: 
- `localhost:3000/{{estado}}/{{cidade}}/{{logradouro}}`
- `localhost:3000?estado={{estado}}&cidade={{cidade}}&logradouro={{logradouro}}`

O XML deverá ser um item baixável ao ser acessado pelo navegador, para isso, vocês faram o uso dos `headers`, e deverão usar no mínimo 2 dos headers apresentados em sala, para a aplicação funcionar corretamente.

**Obs.:** Para o desafio, desconsiderem os headers `Cookie` e `Set-Cookie`.

Os headers deverão ter os valores corretos, de acordo a resposta do endpoint.

Para converter para XML, vocês podem usar bibliotecas do npm.

É obrigatório a criação de uma pasta desafio contendo os scripts.

Com TypeScript:
- Tipar corretamente o retorno da API **Via CEP** com `interfaces`.
- Conter um método para buscar os ceps, um método com os middlewares e um método para iniciar o servidor.

Links úteis para TypeScript:
- [Getting Started Using TypeScript with Node.js and Express](https://medium.com/@pankaj.itdeveloper/getting-started-using-typescript-with-node-js-and-express-6aff573667d5)
- [Configurando Node.js com TypeScript, nodemon e Jest](https://danieldcs.com/configurando-node-js-com-typescript-nodemon-e-jest/)

Leiam este artigo para entender como passar informações de um middleware para outro:
- [Iniciando com middlewares no Express.js](https://blog.rocketseat.com.br/middlewares-no-express-js/)

### Para se destacar:

Conter uma classe com no mínimo um método `private`.

Criar rotas do tipo `get` com parâmetros que possam retornar os seguintes tipos, cada um com seus respectivos headers:

- um `xml` baixável
- um `csv` baixável
- um `json`

Criar tratativas de erros e exceções.
