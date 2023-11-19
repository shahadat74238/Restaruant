
const MenuItem = ({menu}) => {
   const {name, image, price,recipe} = menu;

   return (
      <div className="flex items-center gap-10">
            <img style={{borderRadius: "0 50% 50% 50%"}} className="w-20 h-20" src={image} alt="" />
         <div className="flex gap-5">
            <div>
               <h2 className="uppercase text-lg mb-1 font-medium">{name} ----------------------</h2>
               <p className="text-[#737373]">{recipe}</p>
            </div>
            <p className="text-[#BB8506]">${price}</p>
         </div>
      </div>
   );
};

export default MenuItem;