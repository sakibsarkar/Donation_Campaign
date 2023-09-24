import "./Banner.css";
import { useState } from "react";

const Banner = ({ catchSearchValue }) => {

    const [value, setValue] = useState("")

    return (
        <div className="bannerItems">
            <div className="bannerTXT">
                <h1>I Grow By Helping People In Need</h1>
            </div>

            <div className="searchBox" >
                <input onKeyUp={(e) => setValue(e.target.value)} type="text" placeholder="Search here...." />
                <button onClick={() => catchSearchValue(value)}>Search</button>
            </div>
        </div>

    );
};

export default Banner;