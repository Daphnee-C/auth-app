import {Link} from 'react-router'


const NavBar = () => {
  return (
    <nav className="bg-red-100 py-4 shadow-lg">
      <ul className="flex justify-center space-x-6">
        <Link to="/">
          <li className="bg-green-50 text-gray-800 px-4 py-2 rounded-full font-semibold transition transform hover:scale-110 hover:bg-red-300 shadow-md">
            🏠 Home
          </li>
        </Link>
        <Link to="/profile">
          <li className="bg-green-50 text-gray-800 px-4 py-2 rounded-full font-semibold transition transform hover:scale-110 hover:bg-red-300 shadow-md">
            👤 Profile
          </li>
        </Link>
        <Link to="/contact">
          <li className="bg-green-50 text-gray-800 px-4 py-2 rounded-full font-semibold transition transform hover:scale-110 hover:bg-red-300 shadow-md">
            📞 Contact
          </li>
        </Link>
        <Link to="/register">
          <li className="bg-green-50 text-gray-800 px-4 py-2 rounded-full font-semibold transition transform hover:scale-110 hover:bg-red-300 shadow-md">
            📝 Register
          </li>
        </Link>
      </ul>
    </nav>
  );
};

export default NavBar;
