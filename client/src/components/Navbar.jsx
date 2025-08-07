import { useClerk, useUser, UserButton} from '@clerk/clerk-react';
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const {openSignIn}=useClerk();
  const {user} = useUser();
  const navigate = useNavigate();
  const location = useLocation();
  
  return (
    <div>
      <nav className="h-[70px] relative w-full px-6 md:px-16 lg:px-24 xl:px-32 flex items-center justify-between z-20 bg-white text-gray-700 shadow-[0px_4px_25px_0px_#0000000D] transition-all">
        <a href="#" className="text-indigo-600">
          {/* Logo SVG here */}
          <h1 className="text-2xl">FindMate</h1>
        </a>

        <ul className="md:flex hidden items-center gap-10">
          <li>
            <a className="hover:text-gray-500/80 transition" href="#">
              Home
            </a>
          </li>
          <li>
            <a className="hover:text-gray-500/80 transition" href="#">
              Browse
            </a>
          </li>
          <li>
            <a className="hover:text-gray-500/80 transition" href="#">
              Report
            </a>
          </li>
          <li>
            <a className="hover:text-gray-500/80 transition" href="#">
              Contact
            </a>
          </li>
        </ul>

        {user ? (
          <div className="flex items-center gap-4">
            <button
              onClick={() => navigate("/reported-items")}
              className="text-sm bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-full transition"
            >
              Reported Items
            </button>
            <UserButton afterSignOutUrl="/" />
          </div>
        ) : (
          <button
            type="button"
            onClick={openSignIn}
            className="bg-blue-500 text-white border border-gray-300 md:inline hidden text-sm hover:bg-blue-600 active:scale-95 transition-all w-40 h-11 rounded-full"
          >
            Admin Login
          </button>
        )}

        <button
          aria-label="menu-btn"
          type="button"
          className="menu-btn inline-block md:hidden active:scale-90 transition"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="#000"
          >
            <path d="M3 7a1 1 0 100 2h24a1 1 0 100-2H3zM3 14a1 1 0 100 2h24a1 1 0 100-2H3zM3 21a1 1 0 100 2h24a1 1 0 100-2H3z"></path>
          </svg>
        </button>

        {/* Mobile Menu */}
    
        {menuOpen && (
          <div className="mobile-menu absolute top-[70px] left-0 w-full bg-white p-6 md:hidden">
            <ul className="flex flex-col space-y-4 text-lg">
              <li>
                <a href="#" className="text-sm">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-sm">
                  Browse
                </a>
              </li>
              <li>
                <a href="#" className="text-sm">
                  Report
                </a>
              </li>
              <li>
                <a href="#" className="text-sm">
                  Contact
                </a>
              </li>
            </ul>

            <button
              type="button"
              onClick={openSignIn}
              className="bg-blue-600 text-white border border-gray-300 mt-6 text-sm hover:bg-gray-50 active:scale-95 transition-all w-40 h-11 rounded-full"
            >
              Admin Login
            </button>
          </div>
        )}
      </nav>
    </div>
  );
};

//it is navbar
export default Navbar;
