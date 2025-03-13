import React from 'react';
import ProductList from '../products/ProductList';
import { lehengaProducts } from '../products/Allproducts';
import { regionalProducts } from '../products/Allproducts';
import { salwarProducts } from '../products/Allproducts';
import { cottonProducts } from '../products/Allproducts';
import { silkProducts } from '../products/Allproducts';
import { Cottons } from '../Template/Alltempdetails';
import Cattemplate from '../Template/Cattemplate';
import Title from './Title';
const Cotton = () => {
  return (
    <div>
       <Title/>
       <ProductList products={cottonProducts}/>
       
  </div>
  )
}

export default Cotton
