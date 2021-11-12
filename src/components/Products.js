import React, { useContext } from "react";
import "./Products.css";
import Product from "./Product";
import { GlobalContext } from "../context/GlobalContext";

function Products() {
  const { products, search } = useContext(GlobalContext);
  return (
    <section>
      <p>Products</p>
      <div class="products">
        {products
          .filter((product) => {
            if (search === "") {
              return product;
            } else if (
              product.name.toLowerCase().includes(search.toLowerCase())
            ) {
              return product;
            }
          })
          .map((product) => (
            <Product key={product.id} product={product} />
          ))}
      </div>
    </section>
  );
}

export default Products;
