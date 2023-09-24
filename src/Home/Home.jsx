import Banner from "../Banner/Banner";
import Cards from "../Cards/Cards";
import { useState } from "react";

const Home = () => {
    const [searchValue, setSearchValue] = useState("")
    const catchSearchValue = (value) => setSearchValue(value)
    return (
        <>
            <Banner catchSearchValue={catchSearchValue}></Banner>
            <Cards searchValue={searchValue}></Cards>
        </>
    );
};

export default Home;