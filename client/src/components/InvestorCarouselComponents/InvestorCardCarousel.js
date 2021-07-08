import React from 'react';
import ReactCardCarousel from "react-card-carousel";
import InvestorCard from "./InvestorCard";


const FounderCardCarousel = () => {
    return (

        <div >
            <ReactCardCarousel autoplay={true} autoplay_speed={2500}>
                <InvestorCard />
                <InvestorCard />
                <InvestorCard />
                <InvestorCard />
                <InvestorCard />
            </ReactCardCarousel>
        </div>
    );
};

export default FounderCardCarousel;
