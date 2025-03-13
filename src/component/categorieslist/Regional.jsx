import React from 'react';
import ProductList from '../products/ProductList';
import { lehengaProducts } from '../products/Allproducts';
import { regionalProducts } from '../products/Allproducts';
import { salwarProducts } from '../products/Allproducts';
import { cottonProducts } from '../products/Allproducts';
import { silkProducts } from '../products/Allproducts';
import { Regionals } from '../Template/Alltempdetails';
import Cattemplate from '../Template/Cattemplate';
import Lehenga from './Lehenga';
import Title from './Title';
const Regional = () => {
  return (
    <div>
       <Title/>
       <ProductList products={regionalProducts}/>
    </div>
  )
}

export default Regional
