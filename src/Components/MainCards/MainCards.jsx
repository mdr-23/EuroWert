import React from 'react'
import Card from '@mui/material/Card';
//import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
//import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const MainCards = ({icon, text, title}) => {

    return(
        <Card className='card-currency' sx={{ minWidth:220, maxWidth: 275, mx: 2, mt: 5 }}>
        <CardContent>
        <Typography sx={{ fontSize: 80, display:'flex', alignItems:'center', justifyContent:'center' }} color="#000080" gutterBottom>
            {icon}
        </Typography>
        <Typography sx={{ fontWeight:'bold' }} color="#000080" variant="h5" component="div">
           {title}
        </Typography>
        <Typography sx={{ mt: 2, mb: 1.5, textAlign:'left' }} color="text.primary">
            {text}
        </Typography>
        </CardContent>
{/*             <CardActions>
        <Button size="small">Learn More</Button>
        </CardActions> */}
    </Card>
    )

}

export default MainCards