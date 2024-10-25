import { IoMdAddCircle } from "react-icons/io";
import { FaBasketShopping } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-1/5">
      <div className="space-y-4 p-4">
        <NavLink
          to="/add"
          className={({ isActive }) =>
            `${isActive ? "bg-red-100" : ""}
          flex  space-x-2 cursor-pointer p-3`
          }
        >
          <IoMdAddCircle size={24} />
          <p className="hidden md:block">Add Items</p>
        </NavLink>
        <NavLink
          to="/list"
          className={({ isActive }) =>
            `${isActive ? "bg-red-100" : ""}
          flex  space-x-2 cursor-pointer p-3`
          }
        >
          <FaBasketShopping size={24} />
          <p className="hidden md:block">List Items</p>
        </NavLink>
        <NavLink
          to="/orders"
          className={({ isActive }) =>
            `${isActive ? "bg-red-100" : ""}
          flex  space-x-2 cursor-pointer p-3`
          }
        >
          <FaBasketShopping size={24} />
          <p className="hidden md:block">Orders</p>
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
