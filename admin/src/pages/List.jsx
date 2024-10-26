import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import PropTypes from "prop-types";

const List = ({url}) => {
  const [list, setList] = useState([]);

  const fetchList = async () => {
    const res = await axios.get(`${url}/api/food/list`);
    if (res.data.success) {
      setList(res.data.data);
    } else {
      toast.error("Error");
    }
  };

  const removeFood = async (foodId) => {
    const res = await axios.post(`${url}/api/food/remove`, { id: foodId });
    await fetchList();
    if(res.data.success){
      toast.success(res.data.message)
    }else{
      toast.error("Error")
    }
  };

  useEffect(() => {
    fetchList();
  }, []);

  return (
    <div className="mt-4">
      <p className="text-center text-2xl font-bold mb-6">All Foods</p>
      <div className="mt-10 mx-auto max-w-screen-lg px-4">
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto hidden md:table">
            <thead>
              <tr className="border-b">
                <th className="text-left px-10 py-4">Image</th>
                <th className="text-left px-10 py-4">Name</th>
                <th className="text-left px-10 py-4">Category</th>
                <th className="text-left px-10 py-4">Price</th>
                <th className="text-left px-10 py-4">Action</th>
              </tr>
            </thead>
            <tbody>
              {list.map((item, index) => (
                <tr key={index} className="border-b">
                  <td className="px-10 py-4">
                    <img
                      src={`${url}/images/` + item.image}
                      alt=""
                      className="w-28 rounded-lg"
                    />
                  </td>
                  <td className="px-10 py-4">{item.name}</td>
                  <td className="px-10 py-4">{item.category}</td>
                  <td className="px-10 py-4">${item.price}</td>
                  <td className="px-10 py-4 text-center">
                    <button
                      onClick={() => removeFood(item._id)}
                      className="text-darkRed font-bold text-xl"
                    >
                      x
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Responsive view for mobile */}
          <div className="md:hidden">
            {list.map((item, index) => (
              <div
                key={index}
                className="border rounded-lg p-8 mb-4 shadow-md flex flex-col space-y-3"
              >
                <div className="flex items-center space-x-8">
                  <img
                    src={`${url}/images/` + item.image}
                    alt=""
                    className="w-20 h-20 rounded-lg"
                  />
                  <div>
                    <p className="text-lg font-semibold">{item.name}</p>
                    <p className="text-gray-500 text-sm">{item.category}</p>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <p className="text-lg font-semibold">${item.price}</p>
                  <button
                    onClick={() => removeFood(item._id)}
                    className="text-darkRed font-bold text-xl"
                  >
                    x
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

List.propTypes = {
  url: PropTypes.string.isRequired,
}

export default List;
