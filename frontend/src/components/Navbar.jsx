import { useState, useEffect, useContext } from "react";
import { assets } from "../assets/assests";
import { FaSearch, FaBars, FaTimes } from "react-icons/fa";
import { FaBasketShopping } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import { StoreContext } from "../context/StoreContext";
import { TbLogout2 } from "react-icons/tb";
import { FaBagShopping } from "react-icons/fa6";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navigate = useNavigate()
  const { getTotalCartAmount,token,setToken } = useContext(StoreContext);

  // Close the mobile menu if the window is resized to desktop view
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isOpen) {
        setIsOpen(false); // Close the mobile menu on desktop view
      }
    };

    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isOpen]);

  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    navigate("/")
  };

  return (
    <nav className="bg-lightCream text-darkBlue px-6 sm:px-14 md:px-28">
      <div className=" flex justify-between items-center">
        <div className="flex sm:gap-10 md:gap-20 justify-center items-center text-darkBlue">
          <a href="/">
            <img
              src={assets.logo}
              width={90}
              className="cursor-pointer"
              alt="Logo"
            />
          </a>
          <a href="/" className="hidden sm:block text-[17px] font-semibold">
            Home
          </a>
          <a href="/menu" className="hidden sm:block text-[17px] font-semibold">
            Menu
          </a>
          <a
            href="/contact"
            className="hidden sm:block text-[17px] font-semibold"
          >
            Contact Us
          </a>
        </div>
        <div className="hidden sm:flex items-center justify-center space-x-8">
          <FaSearch className="h-6 w-6 cursor-pointer" />
          <div className="relative cursor-pointer">
            <Link to="/cart">
              <FaBasketShopping className="h-6 w-6" />
            </Link>
            <div
              className={`${
                getTotalCartAmount() === 0
                  ? ""
                  : "absolute min-w-[10px] min-h-[10px] bg-darkRed rounded-lg top-[-8px] right-[-8px]"
              }`}
            ></div>
          </div>
          {!token ? (
            <button className="blueBtn py-[5px] px-3 hidden sm:block">
              <Link to="/login">Login</Link>
            </button>
          ) : (
            <div className="navbar-profile">
              <img
                src={assets.profile}
                className="w-12 h-12 object-contain"
                alt=""
              />
              <ul className="nav-profile-dropdown">
                <li 
                onClick={()=> navigate("/myorders")}
                className="flex gap-1 items-center cursor-pointer">
                  <FaBagShopping />
                  <p>Orders</p>
                </li>
                <hr />
                <li
                  onClick={logout}
                  className="flex gap-1 items-center cursor-pointer"
                >
                  <TbLogout2 />
                  <p>Logout</p>
                </li>
              </ul>
            </div>
          )}
        </div>
        <div className="sm:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none"
          >
            <span className="text-darkBlue text-4xl">
              <FaBars />
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="fixed inset-0 bg-lightCream text-darkBlue flex flex-col items-center justify-center space-y-6 z-50">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-10 right-8 text-5xl focus:outline-none"
          >
            <FaTimes />
          </button>
          <a href="/">
            <img
              src={assets.logo}
              width={90}
              className="cursor-pointer"
              alt="Logo"
            />
          </a>
          <a href="/" className="text-2xl hover:underline">
            Home
          </a>
          <a href="/menu" className="text-2xl hover:underline">
            Menu
          </a>
          <a href="/contact" className="text-2xl hover:underline">
            Contact Us
          </a>
          <div className="relative cursor-pointer">
            <Link to="/cart">
              <FaBasketShopping className="h-6 w-6" />
            </Link>
            <div
              className={`${
                getTotalCartAmount() === 0
                  ? ""
                  : "absolute min-w-[10px] min-h-[10px] bg-darkRed rounded-lg top-[-8px] right-[-8px]"
              }`}
            ></div>
          </div>
          {!token ? (
            <button className="blueBtn py-[8px] px-6">
              <Link to="/login">Login</Link>
            </button>
          ) : (
            <div className="navbar-profile">
              <img
                src={assets.profile}
                className="w-12 h-12 object-contain"
                alt=""
              />
              <ul className="nav-profile-dropdown">
                <li className="flex gap-1 items-center cursor-pointer">
                  <FaBagShopping />
                  <p>Orders</p>
                </li>
                <hr />
                <li
                  onClick={logout}
                  className="flex gap-1 items-center cursor-pointer"
                >
                  <TbLogout2 />
                  <p>Logout</p>
                </li>
              </ul>
            </div>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
