import React from 'react';
import ProductList from '../products/ProductList';
import { lehengaProducts } from '../products/Allproducts';
import { regionalProducts } from '../products/Allproducts';
import { salwarProducts } from '../products/Allproducts';
import { cottonProducts } from '../products/Allproducts';
import { silkProducts } from '../products/Allproducts';
import Cattemplate from '../Template/Cattemplate';
import { Lehengas } from '../Template/Alltempdetails';
import Title from './Title';
const Lehenga = () => {
  return (
    <div>
      <Title/>
       <ProductList products={lehengaProducts}/>
    </div>
  )
}

export default Lehenga
