import React, { useState } from 'react';
import ProductItem from './ProductItem';

const ProductList = () => {

  const products = [
    {id: 1, title: '11', price: 123},
    {id: 2, title: '22', price: 123},
    {id: 3, title: '33', price: 123},
    {id: 4, title: '44', price: 123},
    {id: 5, title: '15', price: 123}
  ]

  const [addedItems, setAddedItems] = useState([])
  const onAdd = (product) => {
    const alreadyAdded = addedItems.find(item => item.id === product.id)
    let newItems = [];

    if (alreadyAdded) {
      newItems = addedItems.filter(item => item.id !== product.id)
    } else {
      newItems = [...addedItems, product]
    }

    setAddedItems(newItems)
  }
    console.log(products)
    return (
        <div>
            {
                products.map(item => (
                    <ProductItem product={item} onAdd={onAdd}/>
                ))
            }
        </div>

    )
}

export default ProductList