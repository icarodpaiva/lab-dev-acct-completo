# 08 - Introdução ao TypeScript com React

## O que é TypeScript?

**TypeScript** é uma linguagem criada pela Microsoft que adiciona tipagem estática ao JavaScript que por padrão é uma linguagem que possui tipagem dinâmica, ou seja, as variáveis e funções podem assumir tipos distintos durante o tempo de execução.

Vale lembrar o código TypeScript é utilizando somente em ambiente de desenvolvimento e é totalmente convertido para JavaScript no processo de build de produção, ou seja, o navegador ou o Node lerão somente código JS no fim das contas.

## Vantagens do TypeScript

- Descobrir erros durante o desenvolvimento;
- Recursos adicionais;
- Incrementar a inteligência (IntelliSense) da IDE que estamos utilizando;
- Transpilação do código para que o mesmo seja lido por todas versões de browsers.

## Tipos Básicos

Para tipar variáveis adicionamos o `:tipo` após sua declaração.

### Boolean

O tipo mais básico de dados são os valores **verdadeiro/falso**, que JavaScript e TypeScript chamam de valor booleano (`boolean`).

```ts
let isMobile: boolean = false
```

### Number

Assume qualquer número, como inteiro ou ponto flutuante.

```ts
const age: number = 20
```

### String

Como em outrass linguagens, usamos o tipo `string` para nos referir a textos. Assim como o JavaScript, o TypeScript também usa aspas duplas (") ou aspas simples (') para envolver os dados da string.

```ts
const text: string = "Hello World!"
```

### Array

O TypeScript, como o JavaScript, permite trabalhar com matrizes de valores. Os tipos de matriz podem ser gravados de duas maneiras. Na primeira, você usa o tipo dos elementos seguido por `[]` para denotar uma matriz desse tipo de elemento:

```ts
const list: number[] = [1, 2, 3]
```

A segunda maneira usa um tipo genérico de matriz, `Array<elemType>`:

```ts
const list: Array<number> = [1, 2, 3];
```

### Tuple (Tupla)

Os tipos de tupla permitem expressar uma matriz com um número fixo de elementos cujos tipos são conhecidos, mas não precisam ser os mesmos. Por exemplo, você pode representar um valor como um par de uma `string` e um `number`:

```ts
// Declare o tipo da tupla
let x: [string, number]
// Inicializa
x = ["hello", 10]; // OK
// Inicializa incorretamente
x = [10, "hello"]; // Erro
```

### Enum

Uma adição útil ao conjunto padrão de tipos de dados do JavaScript é a enumeração. Como em idiomas como C#, uma enumeração é uma maneira de atribuir nomes mais amigáveis a conjuntos de valores numéricos.

```ts
enum Color {Red, Green, Blue}
let c: Color = Color.Green
```

Por padrão, as enumerações começam a numerar seus membros a partir de `0`. Você pode alterar isso definindo manualmente o valor de um de seus membros. Por exemplo, podemos iniciar o exemplo anterior em `1` vez de `0`:

```ts
enum Color {Red = 1, Green, Blue}
let c: Color = Color.Green
```

Ou, mesmo definir manualmente todos os valores na enumeração:
```ts
enum Color {Red = 1, Green = 2, Blue = 4}
let c: Color = Color.Green
```

### Any

Podemos precisar descrever o tipo de variáveis ​​que não sabemos quando estamos escrevendo um aplicativo. Esses valores podem vir de conteúdo dinâmico, por exemplo, do usuário ou de uma biblioteca de terceiros. Nesses casos, queremos desativar a verificação de tipo e deixar que os valores passem pelas verificações em tempo de compilação. Para fazer isso, rotulamos estes com o tipo `any`.

```ts
let notSure: any = 2 // OK
notSure = "Hello World!" // OK
notSure = true // OK
notSure = [] // OK
```

### Void

O `void` é usado para determinar que um método não retorna nenhum valor:

```ts
function warnMessage(message: string): void {
    alert(message)
}
```

### Null e Undefined

No TypeScript, tanto `null` quanto `undefined` têm seus próprios tipos nomeados como `null` e `undefined` respectivamente. Muito parecido com `void`, eles não são extremamente úteis por conta própria:

```ts
let u: undefined = undefined
let n: null = null
```

Nos casos em que você deseja passar uma `string` ou `null` ou `undefined`, você pode usar o tipo de união `string | null | undefined`.

```ts
let name: string | null | undefined = undefined
name = "Jonh Due" // OK
```

## Interfaces

Muitas vezes precisamos reaproveitar tipagens entre vários arquivos e funções da aplicação, ou mesmo tipar um objeto, nisso entram as interfaces, por exemplo:

```ts
interface Person {
  name: string
  age: number
  address: {
    street: string
    number: number
  }
}
```

#### Docs:
- [TypeScript Documentation](https://www.typescriptlang.org/docs/handbook/basic-types.html)
- [Basic Types](https://www.typescriptlang.org/docs/handbook/basic-types.html)
- [Interfaces](https://www.typescriptlang.org/docs/handbook/interfaces.html)
- [TypeScript: Vantagens, mitos, dicas e conceitos fundamentais](https://blog.rocketseat.com.br/typescript-vantagens-mitos-conceitos/)

## React e TypeScript

É possível utilizar o TypeScript com o React, e para isso podemos utilizar o `create-react-app` para inicializar nossa aplicação.
Para isso, no terminal, execute:

```bash
npx create-react-app my-app --template typescript
# or
yarn create react-app my-app --template typescript
```

Se você já instalou o `create-react-app` globalmente com o `npm` via `npm install -g create-react-app`, é recomendado desinstalá-lo usando `npm uninstall -g create-react-app`, e usar `npx` para garantir que o seu projeto inicie com a versão mais atualizada.

Perceba que os arquivos utilizados para criar componentes possuem a extensão `.tsx`.

Exemplo de um componente de classe com TypeScript:

```tsx
import React, { Component } from 'react'

interface IAppProps {
  text: string
}

interface IAppState {
  value: number
}

export default class App extends Component<IAppProps, IAppState> {
  constructor(props: IAppProps) {
    super(props)

    this.state = {
      value: 0
    }
  }

  public render() {
    return (
      <div>
        <p>{this.props.text}</p>
        <p>{this.state.value}</p>
      </div>
    )
  }
}
```

Exemplo de um componente funcional com TypeScript:

```tsx
import React, { FunctionComponent, useState } from 'react'

interface IAppProps {
  message: string
}

const App: FunctionComponent<IAppProps> = props => {
  const [hasMessage, setHasMessage] = useState<boolean>(false)
  return <p>{hasMessage ? props.message : 'Default Message'}</p>
}

export default App
```

Note que `FunctionComponent` define um tipo para o componente funcional.

#### Docs:
- [Adding TypeScript](https://create-react-app.dev/docs/adding-typescript/)
- [Convertendo React em TypeScript](https://medium.com/@oieduardorabelo/convertendo-react-em-typescript-5ae43e6ff13)

## Exercício

Neste exercício vocês deveram refazer o último ou o penúltimo exercício utilizando o **TypeScript**. O desafio **NÃO** deve conter **JavaScript**.
Para se destacar, procure usar a maioria dos tipos vistos nesta aula (não precisa ser todos).

Vocês devem tipar corretamente:
- Variáveis
- Props
- Retorno de funções

### Entrega:

- Faça o Fork deste repositório.
- Crie uma `branch` chamada `seu-nome/react-typescript`
- Assim que terminar dê `git push origin seu-nome/react-typescript`.
- Acesse o menu "Merge Requests", configure o "Target Branch" para o repositório original para que seu App seja avaliado e revisado e para que possamos te dar um feedback.
- O nome do Merge Request deve ser o seu nome completo.
- Crie o Merge Request.
