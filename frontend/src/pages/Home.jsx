import Header from "../components/Header";
import ExploreMenu from "../components/ExploreMenu";
import { useState } from "react";
import FoodDisplay from "../components/FoodDisplay";


const Home = () => {

  const [category, setCategory] = useState("All")

  return (
    <div>
      <Header />
      <ExploreMenu category={category} setCategory={setCategory} />
      <FoodDisplay category={category}/>
    </div>
  );
};

export default Home;
