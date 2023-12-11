import React from 'react';
import { Container } from "@mui/material";
import MainCards from "./MainCards";
import { LuBarChart4 } from "react-icons/lu";
import { MdCurrencyExchange } from "react-icons/md";
import { LiaSearchDollarSolid } from "react-icons/lia";

const MainCardsContainer = () => {
    const maincards = [
        {
            title: 'Currency Check',
            icon: <LiaSearchDollarSolid />,
            text: 'Quickly check the current value of the Euro against various world currencies. Stay updated on fluctuations and make informed decisions for your international transactions.',
            aX: -150,
        },
        {
            title: 'Instant Conversion',
            icon: <MdCurrencyExchange />,
            text: 'Use our intuitive calculator to instantly convert a specific Euro value to other major currencies. Make on-the-fly calculations for seamless financial planning.',
            aX: -250,
        },
        {
            title: 'Historical Tracking',
            icon: <LuBarChart4 />,
            text: 'Access a detailed history of Euro exchange rates. Analyze patterns and trends over time to make well-informed decisions for your currency exchanges.',
            aX: -350,
        },
    ];

    return (
        <section className='blue-section'>
            <h2>Our special Euro tools</h2>
            <Container sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
                {maincards.map(data => <MainCards icon={data.icon} text={data.text} title={data.title} x={data.aX} />)}
            </Container>
        </section>
    );
}

export default MainCardsContainer;