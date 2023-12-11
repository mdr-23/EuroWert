import { Button, Card, Container, Input, Paper } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { getCZK, getDKK, getGBP, getISK, getNOK, getPLN, getSEK, getUSD } from '../Services/currencyServices';
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import { Grid } from '@mui/material';
import { MdCurrencyExchange } from "react-icons/md";


function EuroConverContainer() {

    const [gbpData, setGbpData] = useState([])
    const [usdData, setUsdData] = useState([])
    const [czkData, setCzkData] = useState([])
    const [dkkData, setDkkData] = useState([])
    const [iskData, setIskData] = useState([])
    const [nokData, setNokData] = useState([])
    const [sekData, setSekData] = useState([])
    const [plnData, setPlnData] = useState([])
/*     const [arsData, setArsData] = useState([]) */

    const [amountValue, setAmountValue] = useState('')
    const [convertTo, setConvertTo] = useState('')
    const [result, setResult] = useState(0)

    const handleSelectChange = (event) => {
        setConvertTo(event.target.value);
      };

    console.log(convertTo)

    useEffect(
        () => {
            const result = async() =>{
                try{
                    const responseDataUsd = await getUSD()
                    setUsdData(responseDataUsd)
                    const responseDataGbp = await getGBP()
                    setGbpData(responseDataGbp)
                    const responseDataCzk = await getCZK()
                    setCzkData(responseDataCzk)
                    const responseDataDkk = await getDKK()
                    setDkkData(responseDataDkk)
                    const responseDataIsk = await getISK()
                    setIskData(responseDataIsk)
                    const responseDataNok = await getNOK()
                    setNokData(responseDataNok)
                    const responseDataSek = await getSEK()
                    setSekData(responseDataSek)
                    const responseDataPln = await getPLN()
                    setPlnData(responseDataPln)
/*                     const responseDataArs = await getARS()
                    setArsData(responseDataArs)
                    console.log(responseDataArs) */
                }catch(e){
                    console.log(e)
                }
            } 
            result()
        }, []
    )

    const arrayData = [usdData, gbpData, czkData, dkkData, iskData, nokData, sekData, plnData]

    console.log(arrayData)

    const convert = (e) => {
        
        e.preventDefault();

        setResult(amountValue * convertTo);

    }

    return (

        <Container sx={{mt:10}} className='converter-section'>

            <h2>Check our Euro converter</h2>

            <Card sx={{ minWidth: 80, maxWidth: 850, p:5, margin: '50px auto' }}>

                <Grid container spacing={2}>
                    {/* Col 1: Amount */}
                    <Grid item xs={12} sm={4}>
                        <InputLabel sx={{ textAlign: 'left', color: '#000', fontWeight: 'bold' }}>Amount</InputLabel>
                        <TextField
                            className='convert-label'
                            key='Amount'
                            id="outlined-basic"
                            variant="outlined"
                            onChange={(e) => setAmountValue(parseFloat(e.target.value))}
                            fullWidth
                        />
                    </Grid>

                    {/* Col 2: From */}
                    <Grid item xs={12} sm={4}>
                        <InputLabel sx={{ textAlign: 'left', color: '#000', fontWeight: 'bold' }}>From</InputLabel>
                        <TextField
                            className='convert-label'
                            key='EUR'
                            id="outlined-basic"
                            label={<><img src="https://flagcdn.com/256x192/eu.png" width="28" height="20" alt="Europe flag" /> EUR </>}
                            disabled
                            variant="outlined"
                            fullWidth
                        />
                    </Grid>

                    {/* Col 3: To */}
                    <Grid item xs={12} sm={4}>
                        <InputLabel sx={{ textAlign: 'left', color: '#000', fontWeight: 'bold' }}>To</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            variant="outlined"
                            className='convert-label'
                            onChange={handleSelectChange}
                            fullWidth
                        >
                            {arrayData.map(data => (
                                <MenuItem
                                    key={data.flag}
                                    value={data.rates && (data.rates.USD || data.rates.GBP || data.rates.CZK || data.rates.NOK || data.rates.PLN || data.rates.DKK || data.rates.SEK || data.rates.ISK)}
                                >
                                    <Typography sx={{ color: '#000', textAlign:'left' }}>
                                        <img src={data.flag} alt="Country flag" width="28" height="20" />
                                        {' '}
                                        {data.rates && data.rates.USD}
                                        {data.rates && data.rates.GBP}
                                        {data.rates && data.rates.CZK}
                                        {data.rates && data.rates.NOK}
                                        {data.rates && data.rates.PLN}
                                        {data.rates && data.rates.DKK}
                                        {data.rates && data.rates.SEK}
                                        {data.rates && data.rates.ISK}
                                        {' ' + data.curr}
                                    </Typography>
                                </MenuItem>
                            ))}
                        </Select>
                    </Grid>
                </Grid>

                <Box sx={{mt:3, display:'flex', justifyContent:'end', alignItems:'center'}}>
                    <div className='convert-btn'>
                        <Button sx={{ mx:2 }} variant="contained" onClick={convert}>Convert <MdCurrencyExchange className='convert-icon' /></Button>
                    </div>

                    <Typography sx={{ background: '#000080' }} className='result-convertion' key='RESULT' id="outlined-basic" disabled variant="outlined"> {result} </Typography>
                </Box>
            </Card>


        </Container>
    );
}

export default EuroConverContainer;