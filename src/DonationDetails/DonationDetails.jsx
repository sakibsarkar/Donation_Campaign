import "./DonationDetails.css";
import { useLoaderData, useParams } from "react-router-dom";

const DonationDetails = () => {
    const loaderData = useLoaderData()
    const { id: cardId } = useParams()
    const card = loaderData.find((info) => info.id == cardId)
    const { id, section, image, tittle, backgroundColor, tittleColor, sectionColor } = card
    return (
        <div className="donation">

            <div className="theBigImgBox" style={{ backgroundImage: `url(${image})`, backgroundSize: "cover" }}>
                <div className="donateBtn">
                    <button style={{ background: `${tittleColor}` }}>Donate $290</button>
                </div>
            </div>

            <div className="aboutThisDonation">
                <h1>{tittle}</h1>
                <p>There are many things that can be done to ensure that all people have access to a good education. Governments can invest in public schools, provide financial assistance to students, and make sure that all schools have qualified teachers and resources. Families can support their children's education by creating a learning environment at home and helping them with their schoolwork. Teachers can create a positive and supportive learning environment for their students and challenge them to reach their full potential.</p>
            </div>
        </div>
    );
};

export default DonationDetails;