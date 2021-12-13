import React from 'react';
import Layout from "../component/layout";

export default function About() {
    if(!About){
    return <h3>
        loading.....
    </h3>
    }
    return <Layout>
        <h1>This is About page</h1>
    </Layout>
}
