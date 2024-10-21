import { useContext } from "react";
import { StoreContext } from "../context/StoreContext";
import { Link } from "react-router-dom";
const Cart = () => {
  const { cartItems, food_list, removeFromCart, getTotalCartAmount } =
    useContext(StoreContext);

  return (
    <div className="mt-10 mx-auto max-w-screen-md">
      <table className="min-w-full table-auto">
        <thead>
          <tr className="border-b">
            <th className="text-left p-4">Items</th>
            <th className="text-left p-4">Title</th>
            <th className="text-right p-4">Price</th>
            <th className="text-right p-4">Quantity</th>
            <th className="text-right p-4">Total</th>
            <th className="text-right p-4">Remove</th>
          </tr>
        </thead>
        <tbody>
          {food_list.map((item, index) => {
            if (cartItems[item._id] > 0) {
              return (
                <tr key={index} className="border-b">
                  <td className="p-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-[50px] h-[50px] object-cover rounded-full"
                    />
                  </td>
                  <td className="p-4">{item.name}</td>
                  <td className="p-4 text-right">${item.price}</td>
                  <td className="p-4 text-right">{cartItems[item._id]}</td>
                  <td className="p-4 text-right">
                    ${item.price * cartItems[item._id]}
                  </td>
                  <td className="p-4 text-right">
                    <button
                      onClick={() => removeFromCart(item._id)}
                      className="text-darkRed text-xl"
                    >
                      x
                    </button>
                  </td>
                </tr>
              );
            }
          })}
        </tbody>
      </table>
      <div className="mt-10 mx-auto max-w-screen-lg p-4 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4">Cart Total</h2>
          <div className="space-y-4">
            <div className="flex justify-between">
              <p>Sub Total</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="flex justify-between">
              <p>Delivery Fee</p>
              <p>${getTotalCartAmount() === 0 ? 0 : 4}</p>
            </div>
            <hr />
            <div className="flex justify-between font-semibold">
              <p>Total</p>
              <p>
                ${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 4}
              </p>
            </div>
            <button className="blueBtn py-2 px-4 w-full mt-4">
              <Link to="/order">Proceed to Checkout</Link>
            </button>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <p className="mb-4">If you have a promo code, enter it here</p>
          <div className="flex space-x-4">
            <input
              type="text"
              placeholder="Promo Code"
              className="flex-grow border border-gray-300 p-2 rounded-md"
            />
            <button className="redBtn py-2 px-4">Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
