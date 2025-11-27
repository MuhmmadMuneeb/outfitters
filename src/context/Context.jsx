import React, { createContext, useEffect, useState } from 'react'


export const productsContext = createContext(null)
const Context = ({ children }) => {
  const [allProducts, setAllProducts] = useState([])
  const [singleProduct, setSingleProducts] = useState([])
  const [loading, setloading] = useState(true)
  const [cart, setcart] = useState([])

  // FETCHING ALL PRODUCTS FROM API
  const fetchProducts = async () => {
    try {
      const apiFetch = await fetch('https://dummyjson.com/products')
      const getData = await apiFetch.json()
      console.log(getData.products)
      if (getData && getData?.products) {
        setAllProducts(getData.products)
        setloading(false)
      } else {
        console.log("Data not found")

      }
    } catch (error) {
      console.log("Error occure :", error)
    }


  }
  useEffect(() => { fetchProducts() }, [])

  // ADDING SINGLE ITEM TO CART
  function additems(product) {
    setcart((prev) => {
      const exist = prev.find((item) => item.id === product.id)
      if (exist) {
        return prev.map((item) => (
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        ))
      } else {
        return [...prev, { ...product, quantity: 1 }]
      }
    })
  }
  // INCREACING QUAANTITY WITH KEY VALUE PAIR
  function increaseQuantity(id) {
    return (
      setcart((prev) => {
        return prev.map((item) => (
          item.id === id ? { ...item, quantity: item.quantity + 1 }
            : item
        ))
      })
    )
  }
  // DECREACING QUAANTITY WITH KEY VALUE PAIR
  function decreaseQuantity(id) {
    return (
      setcart((prev) => {
        return prev.map((item) => (
          item.id === id ? { ...item, quantity: item.quantity - 1 }
            : item
        )).filter((item)=> item.quantity > 0)
      })
    )
  }

  return (
    <section>


      <productsContext.Provider value={{ allProducts, singleProduct, setSingleProducts, loading, additems, cart, increaseQuantity, decreaseQuantity }} >
        {children}
      </productsContext.Provider>
    </section>
  )
}

export default Context
