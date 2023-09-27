import "./DonationDetails.css";
import toast, { Toaster } from "react-hot-toast";
import { useLoaderData, useParams } from "react-router-dom";
import { addOnLS } from "../addItemsOnLS/addItemsOnLS";

const DonationDetails = () => {
    const loaderData = useLoaderData()
    const { id: cardId } = useParams()
    const card = loaderData.find((info) => info.id == cardId)
    const { id, Category, Picture, Title, card_bg, text_color, category_bg, description } = card
    const DonateMoney = () => {
        toast.success('Donation Successfull.Thanks')
        addOnLS(card)
    }

    return (
        <div className="donation">

            <div className="theBigImgBox">
                <img src={Picture} alt="" />
                <div className="donate">
                    <button style={{ background: `${text_color}` }} onClick={DonateMoney} >Donate $290</button>
                </div>
            </div>

            <div className="aboutThisDonation">
                <h1>{Title}</h1>
                <p>{description}</p>
            </div>
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
        </div>
    );
};

export default DonationDetails;