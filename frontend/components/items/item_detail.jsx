import React from 'react';

const ItemDetail = ({ item }) => {

  return(
    <ul>
      <li><strong>{item.name}</strong></li>
      <li>Happiness: {item.happiness}</li>
      <li>Price: &#36;{item.price}</li>
    </ul>
  )
};

export default ItemDetail;
