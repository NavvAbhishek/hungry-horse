import { useContext, useState } from "react";
import { StoreContext } from "../context/StoreContext";
import axios from "axios";

const PlaceOrder = () => {
  const { getTotalCartAmount, food_list, cartItems, url, token } =
    useContext(StoreContext);

  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
    phone: "",
  });

  const onChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };

  const placeOrder = async (e) => {
    e.preventDefault();
    let orderItems = [];
    food_list.map((item) => {
      if (cartItems[item._id] > 0) {
        let itemInfo = item;
        itemInfo["quantity"] = cartItems[item._id];
        orderItems.push(itemInfo);
      }
    });
    let orderData = {
      address: data,
      items: orderItems,
      amount: getTotalCartAmount() + 2,
    };
    let res = await axios.post(url + "/api/order/place", orderData, {
      headers: { token },
    });
    if (res.data.success) {
      const { session_url } = res.data;
      window.location.replace(session_url);
    } else {
      alert("Error");
    }
  };

  return (
    <div className="mt-10 mx-auto max-w-screen-lg p-4">
      <form
        onSubmit={placeOrder}
        className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-white p-6 rounded-lg shadow-md"
      >
        {/* Delivery Information Box */}
        <div className="flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-bold mb-4">Delivery Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="firstName"
                onChange={onChangeHandler}
                value={data.firstName}
                placeholder="First Name"
                className="border border-gray-300 p-2 rounded-md"
                required
              />
              <input
                type="text"
                name="lastName"
                onChange={onChangeHandler}
                value={data.lastName}
                placeholder="Last Name"
                className="border border-gray-300 p-2 rounded-md"
                required
              />
            </div>
            <input
              type="email"
              name="email"
              onChange={onChangeHandler}
              value={data.email}
              placeholder="Email Address"
              className="border border-gray-300 p-2 w-full rounded-md mt-4"
              required
            />
            <input
              type="text"
              name="street"
              onChange={onChangeHandler}
              value={data.street}
              placeholder="Street"
              className="border border-gray-300 p-2 w-full rounded-md mt-4"
              required
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <input
                type="text"
                name="city"
                onChange={onChangeHandler}
                value={data.city}
                placeholder="City"
                className="border border-gray-300 p-2 rounded-md"
                required
              />
              <input
                type="text"
                name="state"
                onChange={onChangeHandler}
                value={data.state}
                placeholder="State"
                className="border border-gray-300 p-2 rounded-md"
                required
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <input
                type="text"
                name="zipcode"
                onChange={onChangeHandler}
                value={data.zipcode}
                placeholder="Zip Code"
                className="border border-gray-300 p-2 rounded-md"
                required
              />
              <input
                type="text"
                name="country"
                onChange={onChangeHandler}
                value={data.country}
                placeholder="Country"
                className="border border-gray-300 p-2 rounded-md"
                required
              />
            </div>
            <input
              type="text"
              name="phone"
              onChange={onChangeHandler}
              value={data.phone}
              placeholder="Phone"
              className="border border-gray-300 p-2 w-full rounded-md mt-4"
              required
            />
          </div>
        </div>

        {/* Cart Total Box */}
        <div className="flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-bold mb-4">Cart Total</h2>
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
            </div>
          </div>

          <button type="submit" className="blueBtn py-2 px-4 w-full mt-6">
            Proceed to Payment
          </button>
        </div>
      </form>
    </div>
  );
};

export default PlaceOrder;
