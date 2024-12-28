import React from 'react';

const ProductItem = ({ product, onAdd }) => {
  const onAddHandler = () => {
    onAdd(product)
  }

  return (
    <div>
      <div>{product.title}</div>
      <div>
        <span>Стоимость:<b>{product.price}</b></span>
      </div>
      <button onClick={onAddHandler}>Добавить в корзину</button>
    </div>

  )
}

export default ProductItem