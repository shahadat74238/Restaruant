import Cover from "../../../Shared/Cover/Cover";
import MenuItem from "../../../Shared/MenuItem/MenuItem";
import { Link } from "react-router-dom";

const CategoryItems = ({ items, img, title, des }) => {
  return (
    <div>
      {title && <Cover img={img} title={title} des={des} />}
      <div className="grid gap-10 mt-20 md:grid-cols-2">
        {items.map((m) => (
          <MenuItem key={m._id} menu={m} />
        ))}
      </div>
      <div className="text-center mt-10">
      <Link to={`/order/${title}`}>
      <button className="f-btn text-[#1F2937] hover:text-white">Order Now</button>
      </Link>
      </div>
    </div>
  );
};

export default CategoryItems;
