import "./Error.css";
import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="errorCon">
            <img src="https://i.ibb.co/pygm3Mf/desert-wasteland-with-cactus-error-404-flash-message-151150-14317.jpg" alt="" />
            <h1>Page Not Found!!</h1>
            <Link to={"/"}> <button className="goBack">Go Back to Home</button></Link>
        </div>
    );
};

export default ErrorPage;