const requisicoes = {
  cadastrar: async recipe => {
    const rawResponse = await fetch('http://localhost:2525/recipe', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(recipe)
    })
    const content = await rawResponse.json()

    return content
  },
  ultima: async () => {
    const rawResponse = await fetch('http://localhost:2525/last')
    const content = await rawResponse.json()

    return content
  },
  geral: async () => {
    const rawResponse = await fetch('http://localhost:2525/recipe')
    const content = await rawResponse.json()

    return content
  },
  nome: async nome => {
    const rawResponse = await fetch(`http://localhost:2525/name/${nome}`)
    const content = await rawResponse.json()

    return content
  },
  ingredientes: async ingredientes => {
    const rawResponse = await fetch(
      `http://localhost:2525/ingredients/${ingredientes}/`
    )
    const content = await rawResponse.json()

    return content
  },
  inregredientesRestrito: async ingredientes => {
    const rawResponse = await fetch(
      `http://localhost:2525/ingredients/${ingredientes}/restricted`
    )
    const content = await rawResponse.json()

    return content
  },
  utensilios: async tools => {
    const rawResponse = await fetch(`http://localhost:2525/tools/${tools}/`)
    const content = await rawResponse.json()

    return content
  },
  utensiliosRestrito: async tools => {
    const rawResponse = await fetch(
      `http://localhost:2525/tools/${tools}/restricted`
    )
    const content = await rawResponse.json()

    return content
  },
  time: async (timeUnit, timeQuantity) => {
    const rawResponse = await fetch(
      `http://localhost:2525/time/${timeUnit}/${timeQuantity}/`
    )
    const content = await rawResponse.json()

    return content
  },
  timeRestrito: async (timeUnit, timeQuantity) => {
    const rawResponse = await fetch(
      `http://localhost:2525/time/${timeUnit}/${timeQuantity}/restricted`
    )
    const content = await rawResponse.json()

    return content
  },
  alterar: async (id, recipe) => {
    const rawResponse = await fetch(`http://localhost:2525/recipe/${id}`, {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(recipe)
    })
    const content = await rawResponse.json()

    return content
  },
  id: async id => {
    const rawResponse = await fetch(`http://localhost:2525/id/${id}`)
    const content = await rawResponse.json()

    return content
  },
  delete: async id => {
    await fetch(`http://localhost:2525/recipe/${id}`, {
      method: 'DELETE'
    })
  }
}
export default requisicoes
