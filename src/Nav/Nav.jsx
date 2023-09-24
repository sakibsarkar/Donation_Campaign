import "./Nav.css";
import { NavLink } from "react-router-dom";

const Nav = () => {
    return (
        <div className="parent">
        <div className="navBar">
            <div className="imgCon">
                <img src="https://i.ibb.co/JQrqK7S/Logo.png" alt="" />
            </div>
            <div className="navLinks">
                <NavLink className={"links"} to={"/"}>Home</NavLink>
                <NavLink className={"links"} to={"/Donation"}>Donation</NavLink>
                <NavLink className={"links"} to={"/Statistics"}>Statistics</NavLink>
            </div>
        </div>
        </div>
    );
};

export default Nav;