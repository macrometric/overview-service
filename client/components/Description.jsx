import React from 'react';
import DescriptionItem from './DescriptionItem.jsx'

const Description = ({ descriptions }) => {
  return (
    <ul>
      {descriptions.map((val, i) => {
        // console.log(val);
        return <DescriptionItem key={i} listVal={val} />
      })}
    </ul>
  )
}
export default Description;