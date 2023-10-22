import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/users">user</NavLink>
      <NavLink to="/signup">Home</NavLink>
      <NavLink to="/coffee">Home</NavLink>
    </div>
  );
};

export default Header;
