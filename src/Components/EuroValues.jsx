import { Container } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { /* getARS, */ getCZK, getDKK, getGBP, getISK, getNOK, getPLN, getSEK, getUSD } from '../Services/currencyServices'
import EuroValue from './EuroValue'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

function EuroValues() {

    const [gbpData, setGbpData] = useState([])
    const [usdData, setUsdData] = useState([])
    const [czkData, setCzkData] = useState([])
    const [dkkData, setDkkData] = useState([])
    const [iskData, setIskData] = useState([])
    const [nokData, setNokData] = useState([])
    const [sekData, setSekData] = useState([])
    const [plnData, setPlnData] = useState([])
/*     const [arsData, setArsData] = useState([]) */

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

    return(

    <Container>

    <TableContainer sx={{ minWidth: 50, maxWidth: 650, margin:'0 auto' }} >

      <Table sx={{ mt:5 }} size="large" aria-label="a dense table">
            <TableHead>
            <TableRow>
                <TableCell>Currency</TableCell>
                <TableCell>Amount</TableCell>
            </TableRow>
            </TableHead>

            <TableBody>
            <TableRow
              className='euro-row'
              key='euro'
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                <img src="https://flagcdn.com/256x192/eu.png" width="28" height="20" alt="Europe flag" />
              </TableCell>
              <TableCell>1</TableCell>
            </TableRow>
            <>
                {arrayData.map(data => <EuroValue amount={data.amount} 
                base={data.base === "EUR" && <img src="https://flagcdn.com/256x192/eu.png" width="64" height="48" alt="Europe flag" />} 
                date={data.date} flag={data.flag} usdRates={data.rates && data.rates.USD} gbpRates={data.rates && data.rates.GBP} czkRates={data.rates && data.rates.CZK} dkkRates={data.rates && data.rates.DKK} iskRates={data.rates && data.rates.ISK} nokRates={data.rates && data.rates.NOK} sekRates={data.rates && data.rates.SEK} plnRates={data.rates && data.rates.PLN} 
                /> )}
            </>
            </TableBody>
      </Table>
      <p className='p-lastupdate'>Last update: {usdData && usdData.date ? usdData.date.split('-').reverse().join('/') : 'No data available'}</p>
    </TableContainer>
    </Container>

    )
}

export default EuroValues