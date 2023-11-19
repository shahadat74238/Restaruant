import { Link, NavLink } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";
import { FaShoppingCart } from "react-icons/fa";
import useCarts from "../../Hooks/useCarts";

const Navbar = () => {
  const { user, logOut } = useAuth();
  const [carts] = useCarts();

  const handleLogout = async () => {
    await logOut().then(() => {
      Swal.fire({
        position: "top-center",
        icon: "success",
        title: "Your work has been saved",
        showConfirmButton: false,
        timer: 1500,
      });
      console.log("Successfully logged out");
    });
  };

  const navOptions = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-[#EEFF25] uppercase" : "uppercase"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? "text-[#EEFF25] uppercase" : "uppercase"
          }
        >
          Contact Us
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/menu"
          className={({ isActive }) =>
            isActive ? "text-[#EEFF25] uppercase" : "uppercase"
          }
        >
          Our Menu
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/order/salad"
          className={({ isActive }) =>
            isActive ? "text-[#EEFF25] uppercase" : "uppercase"
          }
        >
          Order Foods
        </NavLink>
      </li>
      <li>
        <Link to="/dashboard">
          <button className="">
            <div className="badge badge-secondary py-3">
              <FaShoppingCart className="inline mr-3" />
              {`+${carts.length}`}
            </div>
          </button>
        </Link>
      </li>
      <li>
        {user ? (
          <>
            <button onClick={handleLogout} className="uppercase">
              Logout
            </button>
          </>
        ) : (
          <>
            <NavLink
              to="/login"
              className={({ isActive }) =>
                isActive ? "text-[#EEFF25] uppercase" : "uppercase"
              }
            >
              Login
            </NavLink>
          </>
        )}
      </li>
    </>
  );

  return (
    <div className="w-full fixed text-white duration-1000 bg-black/30 z-10">
      <div className="navbar container mx-auto px-10">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navOptions}
            </ul>
          </div>
          <Link>
            <p className=" text-2xl font-semibold normal-case">BISTRO BOSS </p>
            <p className="uppercase text-center tracking-[5px]">Restaurant</p>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="gap-5 menu-horizontal px-1">{navOptions}</ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Button</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
