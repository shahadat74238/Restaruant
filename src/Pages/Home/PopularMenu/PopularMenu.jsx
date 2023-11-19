import { Link } from "react-router-dom";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import useMenu from "../../../Hooks/useMenu";
import MenuItem from "../../../Shared/MenuItem/MenuItem";

const PopularMenu = ({btnName}) => {
  const [menu, isLoading] = useMenu();

  
  const popular = menu.filter((item)=> item.category === "popular")
  
  if(isLoading){
    return <p>Loading...</p>
  }

  return (
    <div className="my-20">
      <SectionTitle subHeading="Check it out" heading="FROM OUR MENU" />
      <div className="grid gap-10 md:grid-cols-2">
         {
            popular.map(m => (
               <MenuItem key={m._id} menu={m} />
            ))
         }
      </div>
      <div className="text-center mt-10">
        <Link to="/menu">
        <button className="f-btn text-[#1F2937] hover:text-white">{btnName}</button>
        </Link>
      </div>
    </div>
  );
};

export default PopularMenu;
