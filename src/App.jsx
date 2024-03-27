import { useRef } from "react";
import { useEffect, useState } from "react";

function App() {
  const [products, setProducts] = useState([
    {
      id: 100,
      name: "product-1",
      price: 100,
      count: 0,
    },
    {
      id: 101,
      name: "product-2",
      price: 200,
      count: 0,
    },
    {
      id: 102,
      name: "product-3",
      price: 300,
      count: 0,
    },
    {
      id: 103,
      name: "product-4",
      price: 400,
      count: 0,
    },
    {
      id: 104,
      name: "product-5",
      price: 500,
      count: 0,
    },
  ]);

  const [total, setTotal] = useState(0);

  const addProduct = (e) => {
    const productId = e.target.parentNode.previousElementSibling.value;
    // console.log(productId);

    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id == productId
          ? { ...product, count: product.count + 1 }
          : product
      )
    );
  };

  const removeProduct = (e) => {
    const productId = e.target.parentNode.previousElementSibling.value;
    // console.log(productId);

    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id == productId
          ? {
              ...product,
              count: product.count > 0 ? product.count - 1 : product.count,
            }
          : product
      )
    );
  };

  const ref1 = useRef(null);

  // useEffect(() => {}, [products]);

  return (
    <>
      <div className="conatiner">
        <div className="box">
          <h2 className="text-center">Products</h2>
          {products.map((product, idx) => {
            return (
              <div className="product" key={idx}>
                <p className="name">{product.name}</p>
                <p className="price">{product.price}</p>
                <input type="hidden" name="" value={product.id} />
                <div className="buttons">
                  <span className="remove" onClick={removeProduct}>
                    -
                  </span>{" "}
                  <span className="count">{product.count}</span>{" "}
                  <span className="add" onClick={addProduct}>
                    +
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* cart */}

        <div className="cart">
          <h2 className="text-center">Cart</h2>
          <p ref={ref1} className="empty">
            cart is empty
          </p>

          {products.map((product, idx) => {
            if (product.count > 0) {
              ref1.current.style.display = "none";

              return (
                <div className="product" key={idx}>
                  <p className="name">{product.name}</p>
                  <p className="price">
                    {" "}
                    <span className="product-count">
                      {product.count} X{" "}
                    </span>{" "}
                    <span className="product-price">{product.price}</span>
                  </p>
                </div>
              );
            }
          })}

          {/* <div className="product">
            <p className="name">Total</p>
            <p className="price">400</p>
          </div> */}
        </div>

        {/* cart */}
      </div>
    </>
  );
}

export default App;
