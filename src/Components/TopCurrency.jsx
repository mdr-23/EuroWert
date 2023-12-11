import React from 'react'
import Card from '@mui/material/Card';
//import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
//import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function TopCurrency({ amount, base, date, usdRates, gbpRates, flag }) {

    const invertedDate = date && date.split('-').reverse().join('/');

    return(

        <Card className='card-currency' sx={{ minWidth:220, maxWidth: 275, mx: 2, mt: 5 }}>
            <CardContent>
            <Typography sx={{ fontSize: 14, display:'flex', alignItems:'center', justifyContent:'center' }} color="text.secondary" gutterBottom>
                {base} <span className='currency-to'>TO</span><img src={flag} width="54" height="38" alt="Country flag" />
            </Typography>
            <Typography className='card-date' color="text.secondary" variant="h5" component="div">
                Date: <span className='date-span'>{invertedDate}</span>
            </Typography>
            <Typography className='amount' sx={{ mb: 1.5 }} color="text.primary">
                {amount}€
            </Typography>
            <Typography className='result' variant="body2" color="text.primary">
                {usdRates} {gbpRates}
            </Typography>
            </CardContent>
{/*             <CardActions>
            <Button size="small">Learn More</Button>
            </CardActions> */}
        </Card>

    )
}

export default TopCurrency