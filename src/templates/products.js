import React from 'react';
export default function Product({pageContext}) {
    console.log(pageContext)
    const {itemDetails} =pageContext
return <div>
    <h1>{itemDetails.title}</h1>
    <p>BE</p>
    <h1>{itemDetails.slug}</h1>
</div>
}