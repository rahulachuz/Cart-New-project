import React, { useState, useEffect } from "react";
import axios from "axios";

function ApiFetch() {
  const [data, setData] = useState([]);
  const [cart, setCart] = useState([]);
  const [cartVisible, setCartVisible] = useState(false);

  useEffect(() => {
    const fetchApi = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products", {
          headers: {
            Accept: "application/json",
          },
        });
        setData(response.data);
      } catch (error) {
        console.log("Error Fetching", error);
      }
    };

    fetchApi();
  }, []);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  return (
    <div className="bg-gray-50 m-5">
      <div className="flex justify-end p-5 relative">
        <button
          onClick={() => setCartVisible(!cartVisible)}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hoverpointer "
        >
          🛒 Cart ({cart.length})
        </button>

        {cartVisible && (
          <div className="absolute top-12 right-5 bg-white shadow-md rounded-md p-4 w-72 z-10">
            <h3 className="text-lg font-semibold mb-3">Cart Items</h3>
            {cart.length > 0 ? (
              cart.map((item) => (
                <div
                  key={item.id}
                  className="flex justify-between items-center border-b py-2"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-10 h-10"
                  />
                  <span className="text-sm flex-1 px-2">{item.title}</span>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="bg-red-500 text-white px-2 py-1 rounded text-xs"
                  >
                    Remove
                  </button>
                </div>
              ))
            ) : (
              <p className="text-gray-500">Your cart is empty.</p>
            )}
          </div>
        )}
      </div>

      <div className="grid grid-cols-5 gap-5">
        {data.length > 0 ? (
          data.map((item) => (
            <div
              className="text-center h-auto p-5 rounded-md shadow-md transition duration-300
             ease-in-out transform hover:bg-gray-50 hover:scale-105"
              key={item.id}
              style={{ border: "1px solid #ccc" }}
            >
              <img
                className="w-40 h-40 mx-auto"
                src={item.image}
                alt={item.title}
              />
              <h3 className="font-semibold p-2 text-sm">{item.title}</h3>
              <p className="text-sm">
                <b>Price:</b> ${item.price}
              </p>
              <p className="text-sm">
                <b>Rating:</b> {item.rating.rate} ⭐ ({item.rating.count}{" "}
                reviews)
              </p>
              <div className="py-3">
                <button
                  onClick={() => addToCart(item)}
                  className="hoverpointer bg-yellow-300 px-4 py-2 font-semibold rounded transition
                 duration-300 ease-in-out transform hover:bg-yellow-400 hover:scale-105"
                >
                  Add To Cart
                </button>
              </div>
            </div>
          ))
        ) : (
          <p>Loading products...</p>
        )}
      </div>
    </div>
  );
}

export default ApiFetch;
