import React from "react";

export default function Friut({ pageContext}) {
  console.log(pageContext);
  return   <>
      <h1>Name Is   {pageContext.name}</h1>
      <h1>Age is {pageContext.age}</h1>
 </>
  
}
