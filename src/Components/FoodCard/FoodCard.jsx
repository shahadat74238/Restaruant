import Swal from "sweetalert2";
import useAuth from "../../Hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useAxios from "../../Hooks/useAxios";
import useCarts from "../../Hooks/useCarts";

const FoodCard = ({ item }) => {
  const { name, image, price, recipe, _id } = item;
  const {user} = useAuth();
  const navigate = useNavigate()
  const location = useLocation();
  const axios = useAxios();
  const [, refetch] = useCarts();

  const handleAddToCart= () =>{
    if(user && user?.email){
      const items = {
        email: user.email,
        menuId: _id,
        img: image,
        price,
        name
      }
      axios.post("/carts", items)
      .then(res => {
        console.log(res.data);
        if(res.data.insertedId){
          Swal.fire({
            icon: "success",
            title: `${name} is added to cart   !`,
            showConfirmButton: false,
            timer: 1500
          });
          refetch()
        }
      })
    }
    else{
      Swal.fire({
        title: "Are you not logged in?",
        text: "Please, Login add to the cart",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Login!"
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", {state: {from: location}});
        }
      });
    }
  }

  return (
    <div>
      <div className="card bg-[#F3F3F3] rounded-none shadow-xl">
        <img src={image} alt="Shoes" />
        <p className="text-white bg-[#111827] absolute top-5 right-5 py-1 rounded px-3">
          ${price}
        </p>
        <div className="card-body text-center ">
          <h2 className="text-xl font-semibold">{name}</h2>
          <p>{recipe}</p>
          <div className="card-actions justify-center">
            <button onClick={handleAddToCart} className="f-btn !border-[#BB8506] text-[#BB8506]">
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
