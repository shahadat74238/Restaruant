import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import useMenu from "../../Hooks/useMenu";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import CategoryItems from "./MenuCategory/CategoryItems";
import menuImg from "../../assets/menu/banner3.jpg";
import dessertImg from "../../assets/menu/dessert-bg.jpeg";
import soupImg from "../../assets/menu/soup-bg.jpg";
import pizzaImg from "../../assets/menu/pizza-bg.jpg";
import saladImg from "../../assets/menu/salad-bg.jpg";

const OurMenu = () => {
  const [menu] = useMenu();
  const dessert = menu.filter((item) => item.category === "dessert");
  const offered = menu.filter((item) => item.category === "offered");
  const soup = menu.filter((item) => item.category === "soup");
  const pizza = menu.filter((item) => item.category === "pizza");
  const salad = menu.filter((item) => item.category === "salad");

  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Our Menu</title>
      </Helmet>
      <div>
        {/* Main cover */}
        <Cover
          img={menuImg}
          title="OUR MENU"
          des="Would you like to try a dish?"
        />
        {/* Today offer */}
        <div className="container mx-auto px-10 pt-20">
          <SectionTitle heading="TODAY'S OFFER" subHeading="Don't miss" />
          <CategoryItems items={offered} />
        </div>
        {/* Dessert menu */}
        <div className="container mx-auto px-10 pt-20">
          <CategoryItems
            items={dessert}
            title="dessert"
            des="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            img={dessertImg}
          />
        </div>
        {/* Pizza menu */}
        <div className="container mx-auto px-10 pt-20">
          <CategoryItems
            items={pizza}
            title="pizza"
            des="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            img={pizzaImg}
          />
        </div>

        {/* SALADS menu */}
        <div className="container mx-auto px-10 pt-20">
          <CategoryItems
            items={salad}
            title="salad"
            des="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            img={saladImg}
          />
        </div>
        {/* Soup menu */}
        <div className="container mx-auto px-10 py-20">
          <CategoryItems
            items={soup}
            title="soup"
            des="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            img={soupImg}
          />
        </div>
      </div>
    </div>
  );
};

export default OurMenu;
