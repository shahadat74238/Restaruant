import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import banner from "../../../assets/home/featured.jpg"
const Featured = () => {
   return (
      <div className="bg-img mb-20 bg-fixed bg-cover bg-no-repeat bg-center">
         <div className="bg-black/60 p-20 text-white">
         <SectionTitle subHeading="Check it out" heading="FROM OUR MENU" />
         <div className="grid items-center grid-cols-2 gap-10">
            <div>
               <img src={banner} alt="" />
            </div>
            <div className="">
               <h4 className="text-lg font-medium">March 20, 2023</h4>
               <h2>WHERE CAN I GET SOME?</h2>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
               <button className="f-btn mt-5 text-white !border-white !bg-transparent hover:!bg-white hover:text-black">Read More</button>
            </div>
         </div>
         </div>
      </div>
   );
};

export default Featured;