import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as regularHeart } from '@fortawesome/free-regular-svg-icons'; // Import correctly
import { faShoppingCart, faSearch } from '@fortawesome/free-solid-svg-icons';
import { useState } from "react";
import FilterSearchBar from "./utilities/FilterSearchBar";

const Header = ({isLoggedIn, setIsLoggedIn}) => {
  const navigate = useNavigate();
  // Function to handle logout
  const handleLogout = async () => {
    try {
      await fetch("http://localhost:5000/api/signout", {
        method: "POST",
        credentials: "include", // Sends cookies along
      });
      setIsLoggedIn(false);
      navigate("/auth/sign-in");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  const [filters, setFilters] = useState([
    'Accounts',
    'Aerospace Engineering',
    'Web Development'
  ]);

  const handleRemove = (itemToRemove) => {
    setFilters(filters.filter(item => item !== itemToRemove));
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-10 bg-slate-950">
      <nav className="main-navigation-bar w-[92%] mx-auto py-1 flex justify-between items-baseline">
        <div className="left flex flex-row items-center">
          <Link to="/home" className="logo capitalize">
            herowear
          </Link>
          <div className="flex gap-5 ml-6">
            <Link className="text-[1.05vw] capitalize">Shop Now</Link>
            <Link className="text-[1.05vw] capitalize">About Us</Link>
          </div>
        </div>
        
        <div className="right flex items-center gap-10">
          <FilterSearchBar></FilterSearchBar>
          <Link className="transition-transform duration-300 transform hover:scale-125">
            <FontAwesomeIcon icon={regularHeart} className="text-[1.05vw] text-[#c2c2c2]" />
          </Link>
          <Link className="transition-transform duration-300 transform hover:scale-125">
            <FontAwesomeIcon icon={faShoppingCart} className="text-[1.05vw] text-[#c2c2c2]" />
          </Link>
          
          {/* SignUp or Logout */}
          {isLoggedIn ? (
            <div
              onClick={handleLogout}
              className="cursor-pointer w-auto h-auto sm:px-3 px-1 text-[1.05vw] text-white py-1 rounded-xl shadow-sm shadow-yellow-400 hover:shadow-md hover:shadow-yellow-400"
            >
              Logout
            </div>
          ) : (
            <Link className="text-[1.05vw] capitalize" to="/auth/sign-up">
              <div className="w-auto h-auto px-3 text-white border-slate-500 py-1 rounded-xl shadow-sm shadow-yellow-400 hover:shadow-md hover:shadow-yellow-400">
                Sign Up
              </div>
            </Link>
          )}

          {/* Admin Side link */}
          <Link className="text-[1.05vw] capitalize" to="/auth/sign-up">
            <div className="w-auto h-auto px-3 text-white border-slate-500 py-1 rounded-xl shadow-sm shadow-emerald-400 hover:shadow-md hover:shadow-emerald-400">
              Admin Side
            </div>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;

