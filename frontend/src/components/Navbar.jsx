import { useState } from "react";
import { assets } from "../assets/assests";
import { FaSearch } from "react-icons/fa";
import { FaBasketShopping } from "react-icons/fa6";

const Navbar = () => {
  const [menu, setMenu] = useState("home");

  return (
    <div className="bg-lightCream flex justify-around items-center">
      <img src={assets.logo} width={90} className="cursor-pointer" />
      <ul className="flex gap-4 cursor-pointer">
        <li
          onClick={() => setMenu("home")}
          className={menu === "home" ? "navActive" : ""}
        >
          Home
        </li>
        <li
          onClick={() => setMenu("menu")}
          className={menu === "menu" ? "navActive" : ""}
        >
          Menu
        </li>
        <li
          onClick={() => setMenu("contact-us")}
          className={menu === "contact-us" ? "navActive" : ""}
        >
          Contact Us
        </li>
      </ul>
      <div className="flex items-center gap-6 cursor-pointer">
        <FaSearch className="h-5 w-5" />
        <div className="relative">
          <FaBasketShopping className="h-5 w-5" />
          <div className="absolute min-w-[10px] min-h-[10px] bg-red rounded-lg top-[-8px] right-[-8px] "></div>
        </div>
        <button className="blueBtn py-[5px] px-3">Sign In</button>
      </div>
    </div>
  );
};

export default Navbar;
