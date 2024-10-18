import PropTypes from "prop-types";
import { useContext } from "react";
import { FaStar, FaRegStarHalfStroke } from "react-icons/fa6";
import { IoMdAdd } from "react-icons/io";
import { HiOutlineMinus } from "react-icons/hi2";
import { StoreContext } from "../context/StoreContext";

const FoodItem = ({ id, name, price, description, image }) => {
  const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="relative">
        <img
          src={image}
          className="w-full h-60 object-cover cursor-pointer"
          alt="food_item_image"
        />
        {!cartItems[id] ? (
          <IoMdAdd
            onClick={()=>addToCart(id)}
            className="absolute right-4 bottom-4 w-6 h-6 rounded-full p-[2px] bg-white cursor-pointer"
          />
        ) : (
          <div className="flex items-center gap-2 absolute right-4 bottom-4 bg-white p-1 rounded-xl">
            <HiOutlineMinus
              onClick={()=>removeFromCart(id)}
              className="text-green-900 w-5 h-5 cursor-pointer"
            />
            <p className=""> {cartItems[id]}</p>
            <IoMdAdd
              onClick={()=>addToCart(id)}
              className="text-red h-5 w-5 cursor-pointer"
            />
          </div>
        )}
      </div>
      <div className="p-4">
        <p className="text-lg font-bold text-blue cursor-pointer">{name}</p>
        <div className="flex items-center mb-2">
          <FaStar className="text-red" />
          <FaStar className="text-red" />
          <FaStar className="text-red" />
          <FaStar className="text-red" />
          <FaRegStarHalfStroke className="text-red" />
        </div>
        <p className="text-sm text-gray-500 mb-4">{description}</p>
        <p className="text-xl font-semibold text-red-600">${price}</p>
      </div>
    </div>
  );
};

FoodItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default FoodItem;