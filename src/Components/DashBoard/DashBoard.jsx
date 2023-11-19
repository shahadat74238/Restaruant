import { Outlet } from "react-router-dom";

const DashBoard = () => {
   return (
      <div className="flex container mx-auto">
         <div className="w-80">
            <h1>Side bar</h1>
         </div>
         <div className="flex-1">
            <Outlet />
         </div>
         <h1>Dashboard</h1>
      </div>
   );
};

export default DashBoard;