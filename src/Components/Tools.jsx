import { Container } from "@mui/material";
import { FaReact, FaSass } from "react-icons/fa";
import { SiMui } from "react-icons/si";
import { SiFramer } from "react-icons/si";


const Tools = () => {

    const developTools = [
        <FaReact className='tools-icons react' />, <SiMui className='tools-icons mui' />, <FaSass className='tools-icons sass' />,
        <SiFramer className='tools-icons framer' /> 
    ]

    return(
        <Container sx={{ display:'flex', alignItems:'center', justifyContent:'center', p:10, flexWrap:'wrap' }}>
            {developTools.map(data => data)}
            <img src="https://c1.tablecdn.com/pa/frankfurter-api.jpg" className='frankfurter-img' height='100' alt="Frankfurter API Logo" />
        </Container>
    )

}

export default Tools