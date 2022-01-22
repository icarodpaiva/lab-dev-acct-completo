import React, { Component } from 'react'
import './App.css'
import ProductsForSale from './components/ProductsForSale'
import Cart from './components/Cart'
import AddProduct from './components/AddProduct'
import TotalPrice from './components/TotalPrice'
import Mobile from './components/Mobile'

let products = JSON.parse(localStorage.getItem('products')) || []
let cart = JSON.parse(localStorage.getItem('cart')) || []
let productsAdded = JSON.parse(localStorage.getItem('productsAdded')) || []

class App extends Component {
  constructor(props) {
    super(props)

    this.componentDidMount = this.componentDidMount.bind(this)
    this.asideDisplay = this.asideDisplay.bind(this)
    this.onChangeName = this.onChangeName.bind(this)
    this.onChangePrice = this.onChangePrice.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
    this.showProduct = this.showProduct.bind(this)
    this.unsubscribe = this.unsubscribe.bind(this)
    this.add = this.add.bind(this)
    this.cart = this.cart.bind(this)
    this.decrease = this.decrease.bind(this)
    this.increase = this.increase.bind(this)
    this.remove = this.remove.bind(this)
    this.totalPrice = this.totalPrice.bind(this)
    this.finish = this.finish.bind(this)
  }
''
  state = {
    product: '',
    cart: '',
    cartMobile: 0,
    priceTotal: 0,
    quantityTotal: 0,
    name: '',
    price: ''
  }

  componentDidMount() {
    this.asideDisplay()
    this.showProduct()
    this.cart()
    this.totalPrice()
  }

  asideDisplay() {
    window.addEventListener('resize', () => {
      if (window.screen.width >= 800) {
        document.querySelector('aside').style.display = 'block'
      } else {
        document.querySelector('aside').style.display = 'none'
      }
    })
  }

  onChangeName(name) {
    let capitalizeName = name.split(' ')

    for (let i in capitalizeName) {
      capitalizeName[i] =
        capitalizeName[i]
          .charAt(0)
          .replace(
            capitalizeName[i].charAt(0),
            capitalizeName[i].charAt(0).toUpperCase()
          ) + capitalizeName[i].substr(1)
    }
    name = capitalizeName.join(' ')

    this.setState({
      name
    })
  }
  onChangePrice(price) {
    this.setState({
      price
    })
  }

  onSubmit(e) {
    e.preventDefault()

    if (products.length === 0) {
      products.push({
        name: this.state.name,
        price: this.state.price,
        quantity: 1
      })
    } else if (
      products.every(product => {
        return !(product.name === this.state.name)
      })
    ) {
      products.push({
        name: this.state.name,
        price: this.state.price,
        quantity: 1
      })
    }

    localStorage.setItem('products', JSON.stringify(products))

    this.setState({
      name: '',
      price: ''
    })
    this.showProduct()
  }

  showProduct() {
    products.sort(function (a, b) {
      return a.name < b.name ? -1 : a.name > b.name ? 1 : 0
    })

    const showProduct = products.map((product, index) => {
      return (
        <ProductsForSale
          key={index}
          name={product.name}
          price={product.price}
          add={this.add}
          unsubscribe={this.unsubscribe}
        />
      )
    })
    this.setState({
      product: showProduct
    })
  }

  unsubscribe(unsubscribe) {
    if (unsubscribe === 'removeAll') {
      products = []
    } else {
      for (let i in products) {
        if (products[i].name === unsubscribe) {
          products.splice(i, 1)
        }
      }
    }

    localStorage.setItem('products', JSON.stringify(products))

    this.showProduct()
  }

  add(add) {
    if (!productsAdded.includes(add)) {
      productsAdded.push(add)
      for (let i in products) {
        if (products[i].name === add) {
          cart.push({
            name: products[i].name,
            price: products[i].price,
            quantity: products[i].quantity
          })
        }
      }
    } else {
      this.increase(add)
    }

    localStorage.setItem('productsAdded', JSON.stringify(productsAdded))
    localStorage.setItem('cart', JSON.stringify(cart))

    this.cart()
    this.totalPrice()
  }

  totalPrice() {
    let priceTotal = 0
    let quantityTotal = 0
    for (let i in cart) {
      priceTotal = priceTotal + Number(cart[i].price * cart[i].quantity)
      quantityTotal = quantityTotal + Number(cart[i].quantity)
    }
    this.setState({
      priceTotal: priceTotal,
      quantityTotal: quantityTotal
    })
  }

  cart() {
    if (cart.length === 0) {
      document.querySelector('.removeAll').style.display = 'none'
    } else {
      document.querySelector('.removeAll').style.display = 'inline-block'
    }

    cart.sort(function (a, b) {
      return a.name < b.name ? -1 : a.name > b.name ? 1 : 0
    })

    const cartShow = cart.map((product, index) => {
      return (
        <Cart
          key={index}
          name={product.name}
          price={product.price}
          decrease={this.decrease}
          quantity={product.quantity}
          increase={this.increase}
          remove={this.remove}
        />
      )
    })
    if (cartShow.length === 0) {
      this.setState({
        cart: ''
      })
    } else {
      this.setState({
        cart: cartShow
      })
    }
    this.setState({
      cartMobile: this.state.quantityTotal
    })
  }

  decrease(decrease) {
    for (let i in cart) {
      if (cart[i].name === decrease) {
        cart[i].quantity = cart[i].quantity - 1
        if (cart[i].quantity <= 0) {
          this.remove(decrease)
        }
      }
    }

    localStorage.setItem('cart', JSON.stringify(cart))

    this.cart()
    this.totalPrice()
  }

  increase(increase) {
    for (let i in cart) {
      if (cart[i].name === increase) {
        cart[i].quantity = cart[i].quantity + 1
      }
    }

    localStorage.setItem('cart', JSON.stringify(cart))

    this.cart()
    this.totalPrice()
  }

  remove(remove) {
    if (remove === 'removeAll') {
      cart = []
      productsAdded = []
    } else {
      for (let i in cart) {
        if (remove === cart[i].name) {
          cart.splice(i, 1)
        }
      }

      for (let j in productsAdded) {
        if (productsAdded[j].includes(remove)) {
          productsAdded.splice(j, 1)
        }
      }
    }

    localStorage.setItem('productsAdded', JSON.stringify(productsAdded))
    localStorage.setItem('cart', JSON.stringify(cart))

    this.cart()
    this.totalPrice()
  }

  finish() {
    if (cart.length > 0) {
      cart = []
      productsAdded = []

      localStorage.setItem('productsAdded', JSON.stringify(productsAdded))
      localStorage.setItem('cart', JSON.stringify(cart))

      this.setState({
        cart: '',
        cartMobile: 0,
        priceTotal: 0,
        quantityTotal: 0
      })

      this.componentDidMount()

      if (window.screen.width >= 800) {
        document.querySelector('aside').style.display = 'block'
      } else {
        document.querySelector('aside').style.display = 'none'
      }

      window.scrollTo({ left: 0, top: 0, behavior: 'smooth' })

      return alert('Pedido realizado')
    }
  }

  render() {
    return (
      <>
        <div className="container">
          <main>
            <Mobile cartMobile={this.state.cartMobile} upCart={true} />

            <AddProduct
              onSubmit={this.onSubmit}
              onChangeName={this.onChangeName}
              onChangePrice={this.onChangePrice}
              valueName={this.state.name}
              valuePrice={this.state.price}
            />

            <h1>Produtos à Venda</h1>

            <div className="banners">{this.state.product}</div>

            <button
              onClick={() => {
                this.unsubscribe('removeAll')
              }}
            >
              &#x274C; Limpar &#x274C;
            </button>
          </main>

          <aside>
            <Mobile exitCartMobile={true} />

            <TotalPrice
              priceTotal={this.state.priceTotal.toFixed(2).replace('.', ',')}
              quantityTotal={this.state.quantityTotal}
              onClick={this.finish}
            />

            <div className="cart">{this.state.cart}</div>

            <button
              className="removeAll"
              onClick={() => {
                this.remove('removeAll')
              }}
            >
              &#x274C; Limpar &#x274C;
            </button>
          </aside>
        </div>
      </>
    )
  }
}

export default App
