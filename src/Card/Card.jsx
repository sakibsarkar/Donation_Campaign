import "./Card.css";
import { Link } from "react-router-dom";

const Card = ({ card }) => {
    const { id, section, image, tittle, backgroundColor, tittleColor, sectionColor } = card || {}

    return (

        <Link to={`/donationDetails/${id}`}>
            <div className="card" style={{ background: `${backgroundColor}` }}>
                <div className="imgContainer">
                    <img src={image} alt="" />

                </div>

                <div className="details">
                    <div className="section" style={{ color: `${tittleColor}`, background: `${sectionColor}` }}>
                        <p>{section}</p>
                    </div>
                    <div className="sectiontittle">
                        <p style={{ color: `${tittleColor}` }}>{tittle}</p>
                    </div>
                </div>
            </div>

        </Link>
    );
};

export default Card;