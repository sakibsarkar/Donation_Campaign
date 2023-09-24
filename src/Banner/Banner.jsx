import "./Banner.css";

const Banner = () => {
    return (

        <div className="bannerItems">
            <div className="bannerTXT">
                <h1>I Grow By Helping People In Need</h1>
            </div>

            <div className="searchBox" >
                <input type="text" placeholder="Search here...." />
                <button>Search</button>
            </div>
        </div>

    );
};

export default Banner;