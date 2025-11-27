import React, { useContext } from 'react'
import { productsContext } from '../../context/context'
import { h2 } from 'framer-motion/client'

const Cart = () => {
  const { cart, increaseQuantity, decreaseQuantity } = useContext(productsContext)
  return (
    <div className="min-h-screen bg-gray-100 py-20 px-4 font-display">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-xl p-6">

        <h1 className="text-3xl font-bold mb-6 text-gray-800">Your Cart</h1>

        {cart.length === 0 ? (
          <div className="text-center font-display py-8 text-xl text-gray-600">
            🛍️ Your cart is empty
          </div>
        ) : (
          <div className="space-y-6">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between bg-gray-50 p-4 rounded-lg shadow-sm"
              >
                {/* LEFT: Product Info */}
                <div className="flex items-center gap-4 font-display">
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="w-20 h-20 object-cover rounded-lg"
                  />

                  <div>
                    <h2 className="text-lg font-semibold text-gray-800">{item.title}</h2>
                    <p className="text-gray-600">${item.price*item.quantity}</p>
                  </div>
                </div>

                {/* RIGHT: Quantity Buttons */}
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => decreaseQuantity(item.id)}
                    className="px-3 py-1 bg-gray-300 rounded-lg text-lg"
                  >
                    -
                  </button>

                  <span className="text-xl font-bold w-8 text-center">
                    {item.quantity}
                  </span>

                  <button
                    onClick={() => increaseQuantity(item.id)}
                    className="px-3 py-1 bg-blue-500 text-white rounded-lg text-lg"
                  >
                    +
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </div>
  );

}

export default Cart
