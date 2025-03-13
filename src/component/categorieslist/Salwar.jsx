import React from 'react';
import ProductList from '../products/ProductList';
import { lehengaProducts } from '../products/Allproducts';
import { regionalProducts } from '../products/Allproducts';
import { salwarProducts } from '../products/Allproducts';
import { cottonProducts } from '../products/Allproducts';
import { silkProducts } from '../products/Allproducts';
import { Salwars } from '../Template/Alltempdetails';
import Cattemplate from '../Template/Cattemplate';

const Salwar = () => {
  return (
    <div>
       <Cattemplate cats={Salwars} products={salwarProducts}/>
    </div>
  )
}

export default Salwar
