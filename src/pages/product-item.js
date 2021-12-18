import { Link } from 'gatsby';
import React from 'react';
import Layout from "../component/layout";

export default function productItem() {
    return <Layout>
        <h1>This is product Item page</h1>
        <Link to ="/products Phone1">products Phone1</Link>
        <br/>
        <Link to ="/products Phone 2">products Phone2</Link>
    </Layout>
}
