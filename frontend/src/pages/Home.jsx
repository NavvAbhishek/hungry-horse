import Header from "../components/Header";
import ExploreMenu from "../components/ExploreMenu";
import { useState } from "react";


const Home = () => {

  const [category, setCategory] = useState("All")

  return (
    <div>
      <Header />
      <ExploreMenu category={category} setCategory={setCategory} />
    </div>
  );
};

export default Home;
