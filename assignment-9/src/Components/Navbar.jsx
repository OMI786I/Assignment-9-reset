import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "./AuthProvider";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);

  const handleSignOut = () => {
    logout();
  };
  console.log(user);
  const navLink = (
    <div className="flex-row md:flex-col gap-6  ">
      <NavLink to="/">
        <button className="hover:border-green-500 border-transparent border-2 duration-150 hover:text-green-500 font-bold p-2 rounded-lg focus:border-green-500 focus:text-green-500">
          Home
        </button>
      </NavLink>
    </div>
  );

  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navLink}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">Luxury Deluxe</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLink}</ul>
        </div>
        <div className="navbar-end ">
          {user ? (
            <button className="btn" onClick={handleSignOut}>
              LogOut
            </button>
          ) : (
            <Link to="/login">
              <div className="navbar-end">
                <a className="btn">Login</a>
              </div>
            </Link>
          )}
          {
            <div className="tooltip tooltip-bottom" data-tip={user.displayName}>
              <div className="avatar">
                <div className=" w-12 rounded-full">
                  <img src={user.photoURL} />
                </div>
              </div>
            </div>
          }

          <Link to="/register">
            <div className="navbar-end">
              <a className="btn">Register</a>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
