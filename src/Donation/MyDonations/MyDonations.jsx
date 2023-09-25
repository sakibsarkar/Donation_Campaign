import "./MyDonation.css";

const MyDonations = ({ donation }) => {
    const { id, Category, Picture, Title, card_bg, text_color, category_bg, price } = donation

    return (
        <div className="myDonationCardCon" style={{ background: `${card_bg}` }}>

            {
                <>
                    <div className="rightSide">
                        <img src={Picture} alt="" />
                    </div>
                    <div className="leftSide" >
                        <div className="leftTop">
                            <p className="category" style={{ background: `${category_bg}`, color: `${text_color}` }}>
                                {Category}
                            </p>
                            <h1>{Title}</h1>
                            <p className="price" style={{ color: `${text_color}` }}>
                                ${price}
                            </p>
                        </div>

                        <div className="leftBottom">
                            <button style={{ background: `${text_color}` }}>View Details</button>
                        </div>
                    </div>

                </>
            }
        </div >
    );
};

export default MyDonations;