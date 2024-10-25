import { useState } from "react";
import { RiUploadCloud2Line } from "react-icons/ri";

const Add = () => {
  const [image, setImage] = useState(false);
  const [data, setData] = useState({
    name: "",
    description: "",
    price: "",
    category: "Salad",
  });

  const onChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("description", data.description);
    formData.append("price", Number(data.price));
    formData.append("category", data.category);
    formData.append("image", image);
  };

  return (
    <div className="mt-4 flex justify-start">
      <form
        onSubmit={onSubmitHandler}
        className="space-y-4 bg-gray-50 px-6 py-6 sm:px-20 sm:py-12 shadow-md rounded-lg"
      >
        <div className="flex flex-col items-start">
          <p className="mb-2">Upload Image</p>
          {image ? (
            <img
              src={image}
              alt="Preview"
              className="w-24 h-24 object-cover mb-2 rounded-lg"
            />
          ) : (
            <label
              htmlFor="image"
              className="border-dashed border-2 border-gray-300 p-6 rounded-lg flex flex-col items-center cursor-pointer"
            >
              <RiUploadCloud2Line className="text-3xl mb-2" />

              <input
                onChange={handleImageChange}
                type="file"
                id="image"
                hidden
                required
              />
            </label>
          )}
        </div>

        <div>
          <p className="mb-2">Product name</p>
          <input
            onChange={onChangeHandler}
            value={data.name}
            type="text"
            name="name"
            className="border w-full p-2 rounded-md"
            placeholder="Type here"
            required
          />
        </div>

        <div>
          <p className="mb-2">Product description</p>
          <textarea
            onChange={onChangeHandler}
            value={data.description}
            name="description"
            rows={4}
            className="border w-full p-2 rounded-md"
            placeholder="Write content here"
            required
          ></textarea>
        </div>

        <div className="flex space-x-4">
          <div className="flex-1">
            <p className="mb-2">Product category</p>
            <select
              onChange={onChangeHandler}
              name="category"
              className="border w-full p-2 rounded-md"
              required
            >
              <option value="Sandwich">Sandwich</option>
              <option value="Salad">Salad</option>
              <option value="Rolls">Rolls</option>
              <option value="Desserts">Desserts</option>
              <option value="Pizza">Pizza</option>
              <option value="Pasta">Pasta</option>
              <option value="Burger">Burger</option>
              <option value="Fries">Fries</option>
            </select>
          </div>

          <div className="flex-1">
            <p className="mb-2">Product price</p>
            <input
              onChange={onChangeHandler}
              value={data.price}
              type="number"
              name="price"
              className="border w-full p-2 rounded-md"
              placeholder="$20"
              required
            />
          </div>
        </div>

        <div className="flex justify-center">
          <button type="submit" className="blueBtn px-3 py-1">
            ADD
          </button>
        </div>
      </form>
    </div>
  );
};

export default Add;
