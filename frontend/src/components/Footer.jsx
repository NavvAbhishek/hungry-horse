import { assets } from "../assets/assests";

const Footer = () => {
    return (
      <footer className="bg-lightCream text-blue">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <a
              href="/"
              className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
            >
              <img
                src={assets.logo}
                className="h-28 w-28"
                alt="Flowbite Logo"
              />
              <span className="self-center text-darkBlue text-2xl font-semibold whitespace-nowrap ">
                Hungry Horse
              </span>
            </a>
            <ul className="flex flex-wrap items-center mb-6 text-sm text-darkBlue font-medium  sm:mb-0 ">
              <li>
                <a href="#" className="hover:underline me-4 md:me-6">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline me-4 md:me-6">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline me-4 md:me-6">
                  Licensing
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          <span className="block text-sm text-darkBlue sm:text-center ">
            © 2024{" "}
            <a href="/" className="hover:underline">
              Hungry Horse™
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  