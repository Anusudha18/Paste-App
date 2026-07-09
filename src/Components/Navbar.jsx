import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-gray-800 text-white shadow-md">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        
        <h1 className="text-2xl font-bold text-blue-400">
          Paste App
        </h1>

        <div className="flex gap-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-blue-400 font-semibold"
                : "hover:text-blue-300"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/pastes"
            className={({ isActive }) =>
              isActive
                ? "text-blue-400 font-semibold"
                : "hover:text-blue-300"
            }
          >
            Pastes
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;