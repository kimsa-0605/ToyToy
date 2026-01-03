import { useEffect, useMemo, useState } from "react"
import { X } from "lucide-react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

import {
  fetchAllCartItems,
  fetchUpdateCartItem,
  fetchRemoveCartItem,
} from "../../features/cart_items/slice/cartItemThunks.ts"

import {
  fetchById
} from "../../features/products/slice/productThunks.ts"
import "./CartItem.css"

export default function CartItem() {
  const dispatch = useDispatch()
  const cartItems = useSelector((state) => state.cartItems.items || [])
  const [selectedItems, setSelectedItems] = useState([])

  // All cart items
  useEffect(() => {
    dispatch(fetchAllCartItems())
  }, [dispatch])

  // Update
  const updateQuantity = async (id, newQuantity) => {
    if (newQuantity < 1) {
      return toast.error("Quantity must be at least 1.")
    }

    try {
      const product = await dispatch(fetchById(Number(id))).unwrap()
      const stockQuantity = product.quantity ?? 0

      if (newQuantity > stockQuantity) {
        return toast.error(`Only ${stockQuantity} left in stock.`)
      }
      
      await dispatch(fetchUpdateCartItem({ product_id: Number(id), quantity: newQuantity }))
      await dispatch(fetchAllCartItems())
    } catch (error) {
      console.error(error)
      toast.error("Failed to update quantity.")
    }
  }

  // Remove
  const removeItem = (id) => {
    dispatch(fetchRemoveCartItem(Number(id)))
      .unwrap()
      .then(() => {
        dispatch(fetchAllCartItems())
      })
      .catch(() => toast.error("Failed to remove item."))
  }

  const toggleSelectAll = (e) => {
    const checked = e.target.checked
    setSelectedItems(checked ? cartItems.map((item) => item.id) : [])
  }

  const toggleSelectItem = (id, checked) => {
    setSelectedItems((selected) =>
      checked ? [...selected, id] : selected.filter((itemId) => itemId !== id)
    )
  }

  // Total
  const totalPayment = useMemo(() => {
    return cartItems
      .filter((item) => selectedItems.includes(item.id))
      .reduce((total, item) => {
        const price = Number(item?.price ?? 0)
        const quantity = Number(item?.quantity ?? 0)
        return total + price * quantity
      }, 0)
  }, [cartItems, selectedItems])

  return (
    <div className="cart-container">
      <div className="cart-wrapper">
        <div className="cart-card">
          <div className="cart-header">
            <div className="header-grid">
              <div className="checkbox-container">
                <input
                  type="checkbox"
                  checked={selectedItems.length === cartItems.length && cartItems.length > 0}
                  onChange={toggleSelectAll}
                  className="custom-checkbox"
                />
              </div>
              <div>Items</div>
              <div>Name</div>
              <div>Price</div>
              <div>Quantity</div>
              <div>Total</div>
              <div>Action</div>
            </div>
          </div>

          <div className="cart-items">
            {cartItems.length === 0 ? (
              <div className="cart-empty">Your cart is empty.</div>
            ) : (
              cartItems.map((item) => (
                <div key={item.id} className="cart-item">
                  <div className="checkbox-container">
                    <input
                      type="checkbox"
                      checked={selectedItems.includes(item.id)}
                      onChange={(e) => toggleSelectItem(item.id, e.target.checked)}
                      className="custom-checkbox"
                    />
                  </div>
                  <div className="image-container">
                    <img
                      src={item.product_image_link || "/placeholder.svg"}
                      alt={item.product_name}
                      className="product-image"
                    />
                  </div>
                  <div className="item-name">{item.product_name}</div>
                  <div className="item-price">${Number(item.price ?? 0).toFixed(2)}</div>
                  <div className="quantity-container">
                    <div className="quantity-controls">
                      <button
                        onClick={() => updateQuantity(item.product_id, (item.quantity ?? 1) - 1)}
                        className="quantity-btn"
                      >
                        -
                      </button>
                      <div className="quantity-display">{item.quantity ?? 0}</div>
                      <button
                        onClick={() => updateQuantity(item.product_id, (item.quantity ?? 1) + 1)}
                        className="quantity-btn"
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div className="item-unit-price">
                    ${(Number(item.price ?? 0) * Number(item.quantity ?? 0)).toFixed(2)}
                  </div>
                  <div className="action-container">
                    <button onClick={() => removeItem(item.product_id)} className="remove-btn">
                      <X size={16} />
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>

          {cartItems.length > 0 && (
            <div className="cart-summary">
              <div className="total-section">
                <p className="total-payment">
                  Total: <span className="total-amount">${totalPayment.toFixed(2)}</span>
                </p>
                <div className="action-buttons">
                  <Link to="/catalog" className="continue-btn">
                    Continue shopping
                  </Link>
                  <button className="checkout-btn">Checkout</button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
