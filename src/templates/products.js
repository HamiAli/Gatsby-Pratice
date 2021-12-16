import React from 'react';
 import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
export default function Product({pageContext}) {
    console.log(pageContext)
    const {itemDetails} =pageContext
return <div>
    <h1>{itemDetails.titlxe}</h1>
    <p>{documentToReactComponents()}</p>
    <h1>{itemDetails.slug}</h1>
</div>
}