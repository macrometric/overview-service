import React from 'react';

const DescriptionItem = ({ listVal }) => {
  console.log({ listVal })
  return (
    <li className="desc-item">{listVal}</li>
  )
}
export default DescriptionItem;