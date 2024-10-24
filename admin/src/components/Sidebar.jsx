import { IoMdAddCircle } from "react-icons/io";
import { FaBasketShopping } from "react-icons/fa6";

const Sidebar = () => {
  return (
    <div className="h-screen w-1/5 bg-gray-100">
      <div className="space-y-6 p-4">
        <div className="flex items-center space-x-2 cursor-pointer">
          <IoMdAddCircle size={24} />
          <p className="hidden md:block">Add Items</p>
        </div>
        <div className="flex items-center space-x-2 cursor-pointer">
          <FaBasketShopping size={24} />
          <p className="hidden md:block">List Items</p>
        </div>
        <div className="flex items-center space-x-2 cursor-pointer">
          <FaBasketShopping size={24} />
          <p className="hidden md:block">Orders</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
