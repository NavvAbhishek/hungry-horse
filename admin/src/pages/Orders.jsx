import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import PropTypes from "prop-types";
import { toast } from "react-toastify";
import { assets } from "../assets/assets";

const Orders = ({ url }) => {
  const [orders, setOrders] = useState([]);
  const fetchAllOrders = async () => {
    const res = await axios(url + "/api/order/list");
    if (res.data.success) {
      setOrders(res.data.data);
    } else {
      toast.error("Error");
    }
  };

  useEffect(() => {
    fetchAllOrders();
  }, []);

  return (
    <div className="mt-4 px-4">
      <h3 className="text-2xl font-bold text-center text-darkBlue mb-4">All Orders</h3>
      {orders.map((order, index) => (
        <div
          key={index}
          className="flex flex-col md:flex-row py-8 px-12 mb-4 border rounded-lg shadow-md bg-lightCream space-y-4 md:space-y-0 md:space-x-6"
        >
          {/* Order Image */}
          <img src={assets.orderImg} className="h-16 w-16 rounded-md" alt="Order" />
  
          {/* Order Details */}
          <div className="flex-grow space-y-2">
            <p className="text-sm text-darkRed font-medium">
              {order.items.map((item, idx) => (
                <span key={idx}>
                  {item.name} x {item.quantity}
                  {idx !== order.items.length - 1 ? ", " : ""}
                </span>
              ))}
            </p>
  
            <p className="text-lg font-semibold text-darkBlue">
              {order.address.firstName} {order.address.lastName}
            </p>
  
            <div className="text-sm text-darkRed space-y-1">
              <p>{order.address.street},</p>
              <p>
                {order.address.city}, {order.address.state}, {order.address.country}, {order.address.zipcode}
              </p>
            </div>
  
            <p className="text-sm text-darkRed">{order.address.phone}</p>
          </div>
  
          {/* Order Summary */}
          <div className="space-y-2 text-right">
            <p className="text-sm text-darkBlue">Items: {order.items.length}</p>
            <p className="text-xl font-bold text-lightRed">${order.amount}</p>
            <select className="p-2 border rounded-md bg-darkBlue text-white">
              <option value="Food Processing">Food Processing</option>
              <option value="Out for delivery">Out for delivery</option>
              <option value="Delivered">Delivered</option>
            </select>
          </div>
        </div>
      ))}
    </div>
  );
  
};

Orders.propTypes = {
  url: PropTypes.string.isRequired,
};

export default Orders;
