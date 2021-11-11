import { createContext, useState } from "react";

const GlobalContext = createContext();

function GlobalContextProvider({ children }) {
  const products = [
    {
      id: 1,
      name: "Denim Jackets",
      price: 15,
      imgSrc: "./images/denim jacket.jpg",
      instock: 10,
    },
    {
      id: 2,
      name: "Hats",
      price: 7,
      imgSrc: "./images/hat.jpg",
      instock: 10,
    },
    {
      id: 3,
      name: "Laptops",
      price: 300,
      imgSrc: "./images/laptop.jpg",
      instock: 10,
    },
    {
      id: 4,
      name: "Jeans",
      price: 15,
      imgSrc: "./images/pants.jpg",
      instock: 10,
    },
    {
      id: 5,
      name: "Phones",
      price: 150,
      imgSrc: "./images/phone.jpg",
      instock: 10,
    },
    {
      id: 6,
      name: "T-Shirts",
      price: 10,
      imgSrc: "./images/shirt.jpg",
      instock: 10,
    },
    {
      id: 7,
      name: "Cool Kicks",
      price: 25,
      imgSrc: "./images/shoe.jpg",
      instock: 10,
    },
    {
      id: 8,
      name: "Wrist Watches",
      price: 80,
      imgSrc: "./images/watch.jpg",
      instock: 10,
    },
  ];
  const [cart, setCart] = useState([]);

  return (
    <GlobalContext.Provider
      value={{
        products,
        cart,
        setCart,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

export { GlobalContextProvider, GlobalContext };
