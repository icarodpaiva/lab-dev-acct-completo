# Introdução ao MongoDB

MongoDB é uma nova ideia de banco de dados trazendo conceitos de Banco de Dados Orientado a Documentos.

## Banco de Dados Orientado a Documentos

A definição geral apresentada é que os Bancos de Dados orientados a Documentos utilizam o conceito de dados e documentos autocontidos e auto descritivos, e isso implica que o documento em si já define como ele deve ser apresentado e qual é o significado dos dados armazenados na sua estrutura.

Por ser orientado à documentos JSON (armazenados em modo binário, apelidado de JSON), muitas aplicações podem modelar informações de modo muito mais natural, pois os dados podem ser aninhados em hierarquias complexas e ainda serem indexáveis e fáceis de buscar, igual ao que já é feito em JavaScript.

Esses bancos de dados também são chamados de Bancos NoSQL (Not Only SQL). Esse termo NoSQL é devido à ausência do SQL.

## Instalação

Para instalar o MongoDB devemos primeiramente [baixá-lo](https://www.mongodb.com/download-center/community), escolhendo uma versão de sistema operacional.

Após a instalação, é possível via terminal criar bancos de dados, documentos e coleções, porém vamos utilizar o Node.js.

Para isso precisamos instalar o módulo `mongodb`:

```bash
npm install mongodb --save
```

Deste modo, o Node.js pode usar o módulo `mongodb` para manipular bancos de dados do `MongoDB`:

```js
const mongo = require('mongodb');
```

ou se ativar a importação de módulos **ES6**:

```js
import { MongoClient } from "mongodb";
```

## Criando uma Base de Dados:

Para criar um banco de dados no MongoDB, comece criando um objeto `MongoClient` e, em seguida, especifique uma URL de conexão com o endereço IP correto e o nome do banco de dados que você deseja criar.

O MongoDB criará o banco de dados se ele não existir e fará uma conexão com ele.

```js
import { MongoClient } from "mongodb";

MongoClient.connect("mongodb://localhost:27017/dbName", (err, client) => {
    if (err) throw err;
    console.log("Database created!");
    client.close();
});
```

Para executar, rode no terminal:

```bash
node nome-do-aqruivo.js
```

## Criando uma Coleção (Collection)

Uma coleção no MongoDB é a mesma coisa que uma tabela no MySQL.

Para criar uma coleção no MongoDB, use o método `createCollection()`:

```js
import { MongoClient } from "mongodb";
const url = "mongodb://localhost:27017/";

MongoClient.connect(url, (err, client) => {
    if (err) throw err;
    const dbo = client.db("dbName");
    dbo.createCollection("users", (err, res) => {
        if (err) throw err;
        console.log("Collection created!");
        client.close();
    });
});
```

## Inserir Dados na Coleção

Para inserir um registro ou documento, como é chamado no MongoDB, em uma coleção, usamos o método `insertOne()`.
Um documento no MongoDB é o mesmo que um registro no MySQL.

O primeiro parâmetro do método `insertOne()` é um objeto que contém o nome e valor de cada campo no documento que você deseja inserir.

Ele também recebe uma função de callback, na qual você pode trabalhar com quaisquer erros ou o resultado da inserção:

```js
MongoClient.connect(url, (err, client) => {
    if (err) throw err;
    const dbo = client.db("dbName");
    const user = { name: "John Due", age: 20 };
    dbo.collection("users").insertOne(user, (err, res) => {
        if (err) throw err;
        console.log("1 document inserted");
        client.close();
    });
});
```

`Se você tentar inserir documentos em uma coleção que não existe, o MongoDB criará a coleção automaticamente.`

Para inserir vários documentos em uma coleção no MongoDB, usamos o método `insertMany()`, onde o primeiro parâmetro é uma matriz de objetos, contendo os dados que você deseja inserir.
Se você não especificar um campo `_id`, o MongoDB adicionará um para você e atribuirá um id exclusivo para cada documento.

## Buscar documentos:


O método `findOne(<Object>)` retorna a primeira ocorrência na seleção.

```js
dbo.collection("users").findOne({ name: 'John Due' }, (err, item) => {
    console.log(item);
});
```

O método `find(<Object>)` retorna todas as ocorrências na seleção.

```js
dbo.collection("users").find({ name: 'John Due' }).toArray((err, items) => {
    console.log(items);
});
```

Com o método `find()` vazio retorna todas as ocorrências sem filtro.

```js
dbo.collection("users").find().toArray((err, items) => {
    console.log(items);
});
```

## Atualizar um Documento Existente

Você pode atualizar um registro ou documento como é chamado no MongoDB, usando o método `updateOne()`.

```js
dbo.collection("users").updateOne({ name: 'John Due' }, { '$set': { 'name': 'Jone Due' } }, (err, item) => {
    console.log(item);
});
```

## Excluir um documento

Para deletar um documento, usamos o método `deleteOne()`.

```js
dbo.collection("users").deleteOne({ name: 'John Due' }, (err, item) => {
    console.log(item);
});
```

## Vejamos mais alguns métodos úteis do MongoDB.

### Sort
O método `sort()` ordena um resultado em order cresecente ou descresecente, usando um objeto como parâmetro que define a ordenação.
Use `1` para ordernar em order cresecente e `-1` para descresecente.

```js
{ key: 1 } // ascending
{ key: -1 } // descending
```

Exemplo:

```js
const { MongoClient } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/', (error, db) => {
  if (error) throw error;

  const dbo = db.db('mydb');

  dbo.collection('customers').find().sort({ name: 1 }).toArray((error, result) => {
    if (error) throw error;

    console.log(result);
    db.close();
  });
});
```

### Limit
Para limitar o resultado de uma consulta, usamos o método `limit()`, que aceita um parâmetro númerico, que define a quantidade de documentos à retornar.
Exemplo:

```js
const { MongoClient } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/', (error, db) => {
  if (error) throw error;

  const dbo = db.db('mydb');

  dbo.collection('customers').find().limit(5).toArray((error, result) => {
    if (error) throw error;

    console.log(result);
    db.close();
  });
});
```

### Drop
Você pode excluir uma tabela ou coleção, como é chamada no MongoDB, usando o método `drop()`.
O método `drop()` recebe uma função `callback` contendo o objeto de erro e um parâmetro de resultado que retorna `true` se a coleção foi deletada ou `falso`, caso contrário.

```js
const { MongoClient } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/', (error, db) => {
  if (err) throw err;
  const dbo = db.db('mydb');

  dbo.collection('myCollection').drop((error, deleted) => {
    if (error) throw err;
    if (deleted) console.log('Collection deleted');
    db.close();
  });
});
```

## Fechando a conexão

Depois de concluir as operações, você poderá chamar o método `close()` no objeto `client`:

```js
client.close();
```

## Docs

- [MongoDB](https://www.mongodb.com/)
- [Introdução ao MongoDB](https://www.devmedia.com.br/introducao-ao-mongodb/30792)
- [Node.js MongoDB](https://www.w3schools.com/nodejs/nodejs_mongodb.asp)
- [How to use MongoDB with Node.js](https://flaviocopes.com/node-mongodb/)
- [Migrando do MySQL para Mongo](https://tableless.com.br/migrando-mysql-para-mongo/)

## Exercício

**Entrega**

Criem um aqruivo chamado `db.js` para criar nosso primeiro banco de dados.

Vocês deverão criar um Banco de Dados com o seu nome e conter uma coleção chamada `alunos`.
Nesta coleção deverá ser inserido 10 documentos diferentes com o seguinte formato:

```js
{
    nome: "Nome",
    idade: 20,
    curso: "Nome do Curso",
    semestre: "X Semestre"
    telefone: "99999-9999",
}
```

Após inserir os documentos vocês deverão fazer em arquivos diferentes:
- Atualizar pelo menos um documento - `update.js`;
- Deletar um documento - `delete.js`;
- Encontrar um documento - `search.js`.

**Para se destacar**

Utilizar:
- Método `insertMany()` para inserir vários documentos;
- Utilizar [command line arguments](https://nodejs.org/en/knowledge/command-line/how-to-parse-command-line-arguments/) para inserir dados;
- Utilizar NPM Scripts para rodar os comandos.
