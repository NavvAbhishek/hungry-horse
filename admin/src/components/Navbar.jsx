import { assets } from "../assets/assets";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center mx-4 sm:mx-16 md:mx-28">
      <img src={assets.logo} width={90} className="cursor-pointer0" alt="" />
      <img src={assets.profile} width={70} className="cursor-pointer0" alt="" />
    </div>
  );
};

export default Navbar;
