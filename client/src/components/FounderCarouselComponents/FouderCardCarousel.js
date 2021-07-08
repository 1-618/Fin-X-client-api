import React from 'react';
import ReactCardCarousel from "react-card-carousel";
import FounderCard from "./FounderCard";


const FounderCardCarousel = () => {
    return (

            <div >
                <ReactCardCarousel autoplay={true} autoplay_speed={2500}>
                    <FounderCard />
                    <FounderCard />
                    <FounderCard />
                    <FounderCard />
                    <FounderCard />
                    <FounderCard />
                    <FounderCard />
                </ReactCardCarousel>
            </div>
        );
};

export default FounderCardCarousel;


