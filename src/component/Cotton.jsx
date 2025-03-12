import React from "react";
import ImpNav from "./Nav";
import ProductList from "./products/ProductList";
import {cottonProducts} from "./products/Allproducts";


const Cotton = () => (
  <div>
    <ImpNav/>
    <h1>Cotton</h1>
    <ProductList products={cottonProducts} />;
  </div>
)

export default Cotton;
