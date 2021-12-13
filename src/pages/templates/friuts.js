import React from "react";

export default function Friut({ pageContext }) {
  console.log(pageContext.name);
  return (
    <>
      <h1>{pageContext.name}</h1>
      <h1>Descrhiption</h1>
    </>
  );
}
