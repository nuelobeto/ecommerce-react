import React, { useContext } from "react";
import "./Products.css";
import Product from "./Product";
import { GlobalContext } from "../context/GlobalContext";

function Products() {
  const { products } = useContext(GlobalContext);
  return (
    <section>
      <p>Products</p>
      <div class="products">
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}

export default Products;
