import React from "react";
import { Link } from "gatsby";
import { Router } from "@reach/router";
import Layout from "../component/layout";
import Product1 from "../component/product1";
import Product2 from "../component/product2";
import Main from "../component/main";
const product = () => {
  return (
    <Layout>
      <h1>See products</h1>
      <div>
        <Link to="/Product/page1  ">Product 1</Link> <br/>
        <Link to="/Product/page2">Product 2</Link>
      </div>
      <Router basepath="/Product">
        <Product1 path="/page1" />
        <Product2 path="/page2" />
        <Main path="/" />
      </Router>
    </Layout>
  );
};

export default product;
