import { NavLink } from "react-router";
import './navbar.css'
const Navbar = () => {




  return (
<nav className="navbar max-w-7xl mx-auto ">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 space-y-2 shadow">
  <li><NavLink to={'/'}>Home</NavLink></li>
  <li><NavLink to={'/booklist'}>Book List</NavLink></li>
  <li><NavLink to={'/chart'}>Pages to</NavLink></li>
      </ul>
    </div>
    <a className="text-2xl font-bold">Book Vibe</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 font-semibold gap-1">
  
  <li><NavLink to={'/'}>Home</NavLink></li>
  <li><NavLink to={'/booklist'}>Book List</NavLink></li>
  <li><NavLink to={'/chart'}>Pages to</NavLink></li>

    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn">Button</a>
  </div>
</nav>
  );
};

export default Navbar;