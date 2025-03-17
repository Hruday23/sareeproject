
import { lehengaProducts } from '../products/Allproducts';
import { regionalProducts } from '../products/Allproducts';
import { salwarProducts } from '../products/Allproducts';
import { cottonProducts } from '../products/Allproducts';
import { silkProducts } from '../products/Allproducts';
import React from 'react';
import ProductList from '../products/ProductList';
import Title from './Title';
const Silk = () => {
  return (
    <div>
        
    <Title/>
    <ProductList products={silkProducts}/>
</div>
  )
}

export default Silk
