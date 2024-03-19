import "./Navitem.css";

const Navitem = (props) => {
  return <li className="nav-item">{props.children}</li>;
};

const NavitemDropDown = (props) => {
  return <li className="nav-item dropdown">{props.children}</li>;
};

export default Navitem;
export { NavitemDropDown };
