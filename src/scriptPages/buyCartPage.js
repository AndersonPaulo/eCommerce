import { useState } from "react"
import "../styles/buyCartPage.css"

const Cart = () => {

  const [cart, setCart] = useState([
    { id: 1, name: "Frango", price: 25.0, quantity: 1 },
    { id: 2, name: "Franco/Salpicão", price: 15.0, quantity: 1 },
  ])
  const [paymentMethod, setPaymentMethod] = useState("")

  const updateQuantity = (id, amount) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(1, Math.min(9, item.quantity + amount)) } : item
      )
    )
  }

  const getTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)
  }

  return (
    <div className="cart-container">
      <h2>Carrinho de Compras</h2>
      <ul>
        {cart.map((item) => (
          <li key={item.id} className="cart-item">
            <span>{item.name}</span>
            <span>R$ {item.price.toFixed(2)}</span>
            <div className="quantity-control">
              <span className="buttonDown" onClick={() => updateQuantity(item.id, -1)}>-</span>
              <span className="numberProducts">{item.quantity}</span>
              <span className="buttonUp" onClick={() => updateQuantity(item.id, 1)}>+</span>
            </div>
          </li>
        ))}
      </ul>
      <h3>Total: R$ {getTotal()}</h3>

      <h3>Forma de Pagamento</h3>
      <select onChange={(e) => setPaymentMethod(e.target.value)}>
        <option value="">Selecione</option>
        <option value="pix">Pix</option>
        <option value="cartao">Cartão de Crédito</option>
      </select>

      {paymentMethod === "boleto" && (
        <input type="number" placeholder="Digite o código de barras" className="change-input" />
      )}

      <span className="payment-button">Finalizar Compra</span>
    </div>
  )
}

export default Cart
