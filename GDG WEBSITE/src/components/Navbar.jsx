import { Link } from "react-router-dom";

function Navbar({ darkMode, setDarkMode }) {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        INK<span>LY</span>
      </Link>

      <div className="nav-links">
        <Link to="/">Explore</Link>
        <Link to="/create">Write</Link>
        <Link to="/manage">Manage</Link>
        <Link to="/bookmarks">Bookmarks</Link>
      </div>

      <button
        className="theme-btn"
        onClick={() => setDarkMode(!darkMode)}
        title="Toggle theme"
      >
        {darkMode ? "☀" : "☾"}
      </button>
    </nav>
  );
}

export default Navbar;