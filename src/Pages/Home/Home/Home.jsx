import Banner from "../Banner/Banner";
import Banner2 from "../Banner/Banner2";
import Category from "../Category/Category";
import Featured from "../Featured/Featured";
import PopularMenu from "../PopularMenu/PopularMenu";
import Recommended from "../Recommended/Recommended";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Home</title>
      </Helmet>
      <Banner />
      <div className="container mx-auto px-10">
        <Category />
        <Banner2 />
        <PopularMenu btnName="View All" />
        <Recommended />
        <Featured />
      </div>
    </div>
  );
};

export default Home;
