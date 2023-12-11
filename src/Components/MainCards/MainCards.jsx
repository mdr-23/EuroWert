import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import FadeInLeft from '../Animations/FadeInLeft';

const MainCards = ({ icon, text, title, x }) => {
    return (
        <FadeInLeft x={x}>
            <Card className='card-currency info-cards' sx={{ minWidth:220, maxWidth: 275, mx: 2, mt: 5 }}>
                <CardContent>
                    <Typography sx={{ fontSize: 80, display: 'flex', alignItems: 'center', justifyContent: 'center' }} color="#000080" gutterBottom>
                        {icon}
                    </Typography>
                    <Typography sx={{ fontWeight: 'bold' }} color="#000080" variant="h5" component="div">
                        {title}
                    </Typography>
                    <Typography sx={{ mt: 2, mb: 1.5, textAlign: 'left' }} color="text.primary">
                        {text}
                    </Typography>
                </CardContent>
            </Card>
        </FadeInLeft>
    );
}

export default MainCards;