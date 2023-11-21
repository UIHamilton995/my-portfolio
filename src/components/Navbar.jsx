import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className='header justify-between'>
      <NavLink to='/'>
        <button className='bg-gradient-to-r from-gray-400 to-gray-100 animate-pulse  py-2 px-4 rounded-lg font-extrabold text-blue-700 hover:scale-105 hover:shadow-md transition-transform duration-800 ease-in-out'>
            Hamilton
        </button>
      </NavLink>
      <nav className='flex text-lg gap-2 font-medium'>
        <NavLink to='/about' className={({ isActive }) => `relative bg-gradient-to-r from-blue-500 to-indigo-500 font-semibold py-2 px-3 rounded-lg overflow-hidden group hover:scale-105 hover:shadow-md transition-transform duration-800 ease-in-out ${isActive ? "text-black" : "text-white"}`}>
          About
          <span className="absolute top-full left-0 w-full h-1 bg-white opacity-25 transform -skew-y-12"></span>
        </NavLink>
        <NavLink to='/projects' className={({ isActive }) => `relative bg-gradient-to-r from-blue-500 to-indigo-500 font-semibold py-2 px-5 rounded-lg overflow-hidden group hover:scale-105 hover:shadow-md transition-transform duration-800 ease-in-out ${isActive ? "text-black" : "text-white"}`}>
          Projects
          <span className="absolute top-full left-0 w-full h-1 bg-white opacity-25 transform -skew-y-12"></span>
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
