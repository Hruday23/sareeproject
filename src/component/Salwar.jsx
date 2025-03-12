import React from 'react'
import ImpNav from './Nav'
import ProductList from './products/ProductList';
import { salwarProducts } from './products/Allproducts';


const Salwar=()=>(
    <div>
        <ImpNav/>
        <h1>Salwar</h1>
        <ProductList products={salwarProducts}/>
    </div>
)

export default Salwar
