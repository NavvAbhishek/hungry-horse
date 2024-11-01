import { assets } from "../assets/assets";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center mx-4 sm:mx-16 md:mx-28">
      <img src={assets.logo} width={90} className="cursor-pointer" alt="" />
      <img src={assets.profile} width={50} className="cursor-pointer" alt="" />
    </div>
  );
};

export default Navbar;
