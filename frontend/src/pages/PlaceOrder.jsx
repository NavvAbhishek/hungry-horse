import { useContext } from "react";
import { StoreContext } from "../context/StoreContext";

const PlaceOrder = () => {
  const { getTotalCartAmount } = useContext(StoreContext);

  return (
    <div className="mt-10 mx-auto max-w-screen-lg p-4 grid grid-cols-1 md:grid-cols-2 gap-12">
      <form action="" className="space-y-4 bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4">Delivery Information</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="First Name"
            className="border border-gray-300 p-2 rounded-md"
          />
          <input
            type="text"
            placeholder="Last Name"
            className="border border-gray-300 p-2 rounded-md"
          />
        </div>
        <input
          type="email"
          placeholder="Email Address"
          className="border border-gray-300 p-2 w-full rounded-md"
        />
        <input
          type="text"
          placeholder="Street"
          className="border border-gray-300 p-2 w-full rounded-md"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="City"
            className="border border-gray-300 p-2 rounded-md"
          />
          <input
            type="text"
            placeholder="State"
            className="border border-gray-300 p-2 rounded-md"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Zip Code"
            className="border border-gray-300 p-2 rounded-md"
          />
          <input
            type="text"
            placeholder="Country"
            className="border border-gray-300 p-2 rounded-md"
          />
        </div>
        <input
          type="text"
          placeholder="Phone"
          className="border border-gray-300 p-2 w-full rounded-md"
        />
      </form>

      <div className="bg-white p-6 rounded-lg shadow-md">
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
            <p>Total</p>$
            {getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 4}
          </div>
          <button className="blueBtn py-2 px-4 w-full mt-4">
            Proceed to Payment
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;
