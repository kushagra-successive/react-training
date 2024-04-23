import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div>
      <Link to="/">HOME</Link>
      <Link to="about">ABOUT</Link>
    </div>
  );
};

export default Navbar;
