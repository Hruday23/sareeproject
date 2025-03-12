import React from 'react'
import ImpNav from './Nav'
import ProductList from './products/ProductList';
import { silkProducts } from './products/Allproducts';



const Silk=()=>(
    <div>
        <ImpNav/>
        <h1>Silk</h1>
        <ProductList products={silkProducts}/>
    </div>
)
export default Silk
