import { Container, Grid } from "@mui/material";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {

    return(
        <section className='blue-section'>
            <Container>
            <Grid container spacing={2} sx={{ display:'flex', alignItems:'center' }}>
                <Grid item xs={12} md={6}>
                    <h1>EuroWert</h1>
                </Grid>

{/*                 <Grid item xs={12} md={5}>
                    <ul className='footer-list'>
                        <li><h3>EuroWert GmbH</h3></li>
                        <li>Schießstättstraße 500</li>
                        <li>82515 Wolfratshausen, Germany</li>
                        <li>+49099004356</li>
                        <li>info@eurowertgmbh.de</li>
                    </ul>
                </Grid> */}

                <Grid item xs={12} md={6}>
                    <ul className='footer-list'>
                        <li><h3>EuroWert GmbH</h3></li>
                        <li>Schießstättstraße 500</li>
                        <li>82515 Wolfratshausen, Germany</li>
                        <li>+49099004356</li>
                        <li>info@eurowertgmbh.de</li>
                    </ul>
                </Grid>
            </Grid>

            <p className='p-footer'>© 2023 - Designed and developed by Martin del Rosario</p>
            <a className='footer-link' href="https://www.linkedin.com/in/martin-delrosario/" target="_blank" rel="noreferrer"><FaLinkedin /></a>
            <a className='footer-link' href="https://github.com/mdr-23/" target="_blank" rel="noreferrer"><FaGithub /></a>

            </Container>
        </section>
    )

}

export default Footer