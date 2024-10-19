import PropTypes from "prop-types";
import { menu_list } from "../assets/assests";

const ExploreMenu = ({ category, setCategory }) => {
  return (
    <div className="flex flex-col gap-5 mx-28">
      <h1 className="text-4xl font-bold text-darkBlue">Explore Our Menu</h1>
      <p className="">
        We have many yummy foods for you to try. Pick your favorite and enjoy!
      </p>
      <div className="flex items-center justify-between overflow-x-scroll no-scrollbar gap-8">
        {menu_list.map((item, index) => {
          return (
            <div
              onClick={() =>
                setCategory((prev) =>
                  prev === item.menu_name ? "All" : item.menu_name
                )
              }
              key={index}
              className="flex flex-col justify-center items-center gap-2 cursor-pointer"
            >
              <img
                src={item.menu_image}
                alt="menu_img"
                className={`w-28 h-28 object-cover rounded-full
                ${
                  category === item.menu_name
                    ? "border-2 p-[2px] border-orange "
                    : ""
                }`}
              />

              <p className="font-semibold">{item.menu_name}</p>
            </div>
          );
        })}
      </div>
      <hr className="my-3 h-[2px] bg-cream border-none" />
    </div>
  );
};

ExploreMenu.propTypes = {
  category: PropTypes.string.isRequired,
  setCategory: PropTypes.func.isRequired,
};

export default ExploreMenu;