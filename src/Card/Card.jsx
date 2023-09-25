import "./Card.css";
import { Link } from "react-router-dom";

const Card = ({ card }) => {
    const { id,Category, Picture,Title,card_bg,text_color,category_bg } = card || {}

    return (

        <Link to={`/donationDetails/${id}`}>
            <div className="card" style={{ background: `${card_bg}` }}>
                <div className="imgContainer">
                    <img src={Picture} alt="" />

                </div>

                <div className="details">
                    <div className="section" style={{ color: `${text_color}`, background: `${ category_bg}` }}>
                        <p>{Category}</p>
                    </div>
                    <div className="sectionTittle">
                        <p style={{ color: `${text_color}` }}>{Title}</p>
                    </div>
                </div>
            </div>

        </Link>
    );
};

export default Card;