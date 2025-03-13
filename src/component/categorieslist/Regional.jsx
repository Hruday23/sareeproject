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

const Regional = () => {
  return (
    <div>
      <Cattemplate cats={Regionals} products={regionalProducts}/>
    </div>
  )
}

export default Regional
