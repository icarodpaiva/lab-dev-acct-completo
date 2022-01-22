# APIs e Banco de Dados

## MongoDB Atlas

### O que é MongoDB Atlas?

Banco de dados como serviço (DBaaS) é um serviço que permite configurar, implantar e dimensionar um banco de dados sem se preocupar com hardware físico local, atualizações de software e detalhes de configuração para desempenho. Com DBaaS, um provedor de nuvem faz tudo isso por você - e o coloca em operação imediatamente.

MongoDB Atlas é um banco de dados em nuvem totalmente gerenciado que lida com toda a complexidade de implantação, gerenciamento e recuperação de suas implantações no provedor de serviços de nuvem de sua escolha (AWS, Azure e GCP). O MongoDB Atlas é a melhor maneira de implantar, executar e dimensionar o MongoDB na nuvem. Com o Atlas, você terá um banco de dados MongoDB em execução com apenas alguns cliques e em poucos minutos.

Portanto, vamos dar uma olhada nas etapas necessárias para começar a usar o [MongoDB Atlas](https://www.mongodb.com/basics/mongodb-atlas-tutorial).

## Mongoose

O Mongoose fornece uma solução direta e baseada em esquema para modelar os dados do seu aplicativo. Inclui conversão de tipo embutida, validação, construção de consulta, ganchos de lógica de negócios e muito mais, prontos para uso.

Primeiro, certifique-se de ter MongoDB e Node.js instalados.

Em seguida, instale o Mongoose a partir da linha de comando usando npm:

```
$ npm install mongoose --save
```

Agora digamos que gostamos de gatinhos peludos e queremos registrar todos os gatinhos que conhecemos no MongoDB. A primeira coisa que precisamos fazer é incluir o `mongoose` em nosso projeto e abrir uma conexão com o banco de dados em nossa instância do MongoDB em execução local.

```js
// getting-started.js
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true});
```

Temos uma conexão com o banco de dados de teste em execução no localhost. Agora precisamos ser notificados se nos conectamos com sucesso ou se ocorrer um erro de conexão:

```js
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
});
```

Assim que nossa conexão for aberta, nosso retorno de chamada será realizado. Para resumir, vamos supor que todo o código a seguir esteja dentro desse retorno de chamada.

Com o Mongoose, tudo é derivado de um `Schema` . Vamos obter uma referência a ele.

```js
const kittySchema = new mongoose.Schema({
  name: String
});
```

Até agora tudo bem. Temos um esquema com uma propriedade `name`, que será a _String_. A próxima etapa é compilar nosso esquema em um modelo .

```js
const Kitten = mongoose.model('Kitten', kittySchema);
```

Um `Model` é uma classe com a qual construímos documentos. Nesse caso, cada documento será um gatinho com propriedades e comportamentos conforme declarado em nosso esquema. Vamos criar um documento de gatinho representando o garotinho que acabamos de conhecer na calçada do lado de fora:

```js
const silence = new Kitten({ name: 'Silence' });
console.log(silence.name); // 'Silence'
```

Os gatinhos podem miar, então vamos dar uma olhada em como adicionar a funcionalidade de "fala" aos nossos documentos:

```js
// NOTE: methods must be added to the schema before compiling it with mongoose.model()
kittySchema.methods.speak = function () {
  const greeting = this.name
    ? "Meow name is " + this.name
    : "I don't have a name";
  console.log(greeting);
}

const Kitten = mongoose.model('Kitten', kittySchema);
```

As funções adicionadas à propriedade de um esquema são compiladas no Model protótipo e expostas em cada instância do documento:

```js
const fluffy = new Kitten({ name: 'fluffy' });
fluffy.speak(); // "Meow name is fluffy"
```

Mas ainda não salvamos nada no MongoDB. Cada documento pode ser salvo no banco de dados chamando seu método de salvamento. O primeiro argumento para o retorno de chamada será um erro, se ocorrer.

```js
fluffy.save(function (err, fluffy) {
  if (err) return console.error(err);
  fluffy.speak();
});
```

Diga que o tempo passa e queremos mostrar todos os gatinhos que vimos. Podemos acessar todos os documentos de gatinhos por meio de nosso modelo Kitten .

```js
Kitten.find(function (err, kittens) {
  if (err) return console.error(err);
  console.log(kittens);
})
```

Acabamos de registrar todos os gatinhos em nosso banco de dados no console. Se quisermos filtrar nossos gatinhos por nome, o Mongoose oferece suporte à sintaxe de consulta avançada do MongoDB .

```js
Kitten.find({ name: /^fluff/ }, callback);
```

Isso executa uma pesquisa por todos os documentos com uma propriedade de nome que começa com "fluff" e retorna o resultado como uma matriz de gatinhos para o retorno de chamada.


## Docs:

- [Tutorial Mongoose](https://developer.mozilla.org/pt-BR/docs/Learn/Server-side/Express_Nodejs/mongoose)
- [Conheça as Queries do Mongoose](https://mongoosejs.com/docs/queries.html)
- [Criando um CRUD completo com NodeJS, Express e MongoDB](https://medium.com/baixada-nerd/criando-um-crud-completo-com-nodejs-express-e-mongodb-parte-1-3-6c8389d7147d)
- [Criando uma API REST com Node.js + Express + Mongoose](https://medium.com/@rafaelbarbosadc/criando-uma-api-rest-com-node-js-express-mongoose-f75a27e8cdc1)
- [Import and Export Data](https://docs.mongodb.com/compass/master/import-export)

## Desafio

Neste desfafio vocês devem criar endpoints que conversem com o banco de dados, ou seja, criar endpoints com o Express que se comunique com o MongoDB.

### Banco de Dados

O banco deverá ter duas entidades: **Aluno**, **Curso**

**Aluno**
- id: string
- nome: string
- sobrenome: string
- idade: number
- idCurso: string (Regra: Um aluno só pode ter um curso)

**Curso**
- id: string
- nome: string
- diasDaSemana: enum (Regra: Sábado e Domingo devem dar erro e apresentar uma mensagem de erro)
  - Segunda
  - Terça
  - Quarta
  - Quinta
  - Sexta

### Endpoints

- Busca de Alunos (mais de um tipo de busca não pode acontecer ao mesmo tempo)
  - Por ID
  - Por nome e sobrenome _*_
  - Por ID do curso _*_

- Busca de Curso (mais de um tipo de busca não pode acontecer ao mesmo tempo)
  - Por ID
  - Por dia da semana _*_

- Cadastro de Alunos
- Cadastro de Cursos

- Alterar aluno de curso (enviar os IDs dos registros)
- Alterar curso para outro dia da semana (enviar os IDs dos registros) _*_

***Para se destacar***

Para a entrega, crie um banco no **Mongodb Atlas** e conectem à sua aplicação ou **exportem** o banco de dados **já populado** para podermos realizar testes mais facilmente e coloquem no repositório.
