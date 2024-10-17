import { assets } from "../assets/assests";

const Header = () => {
  return (
    <section className="relative bg-gray-50 py-16 sm:py-20 md:py-24">
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-12 lg:px-20">
        {/* Text Section */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-blue text-3xl sm:text-4xl md:text-5xl font-bold textblack mb-6">
            Yummy Food Here!
          </h1>
          <p className="text-md sm:text-xl text-gray-600 mb-8">
            We have tasty food that you will love. Come and see what we have!
          </p>
          <button className="yellowBtn py-[10px] px-4 font-semibold">
            See the Food
          </button>
        </div>

        {/* Image Section */}
        <div className="md:w-1/2 mb-8 md:mb-0">
          <img
            src={assets.headerImg}
            alt="Header Image"
            className="w-full h-auto object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Header;
