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
                    <nav>
                        <ul>
                            <li><NavLink className={"links"} to={"/"}>Home</NavLink></li>
                            <li><NavLink className={"links"} to={"/donation"}>Donation</NavLink></li>
                            <li><NavLink className={"links"} to={"/statistics"}>Statistics</NavLink></li>
                        </ul>
                    </nav>



                </div>
            </div>
        </div>
    );
};

export default Nav;