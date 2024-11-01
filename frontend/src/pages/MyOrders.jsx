import { useContext, useEffect, useState } from "react";
import { StoreContext } from "../context/StoreContext";
import axios from "axios";
import { assets } from "../assets/assests";

const MyOrders = () => {
  const { url, token } = useContext(StoreContext);
  const [data, setData] = useState([]);

  const fetchOrders = async () => {
    const res = await axios.post(
      url + "/api/order/userorders",
      {},
      { headers: { token } }
    );
    setData(res.data.data);
    console.log(res.data.data);
  };

  useEffect(() => {
    if (token) {
      fetchOrders();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);

  return (
    <div className="container px-10 lg:px-48 p-4">
      <h1 className="text-2xl text-darkBlue text-center font-bold mb-4">My Orders</h1>
      <div className="space-y-5">
        {data.map((order, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row items-center justify-between p-6 border rounded-lg shadow-md bg-white"
          >
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4 flex-grow">
              <div className="flex items-center space-x-2">
                <img
                  src={assets.orderImg}
                  alt="Order Icon"
                  className="w-10 h-10 rounded-md"
                />
                <div className="text-sm font-medium">
                  {order.items.map((item, idx) => (
                    <span key={idx}>
                      {item.name} x {item.quantity}
                      {idx !== order.items.length - 1 ? ", " : ""}
                    </span>
                  ))}
                </div>
              </div>
              <p className="text-lg font-semibold">${order.amount}.00</p>
              <p className="text-sm text-gray-500">
                Items: {order.items.length}
              </p>
              <p className="text-sm flex items-center">
                <span className="text-darkRed text-xl mr-1">&#x25cf;</span>
                {order.status}
              </p>
            </div>
            <button 
            onClick={fetchOrders}
            className="redBtn px-3 py-2">Track Order</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyOrders;
