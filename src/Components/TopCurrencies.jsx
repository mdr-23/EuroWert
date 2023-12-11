import { Container } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { getGBP, getUSD } from '../Services/currencyServices'
import TopCurrency from './TopCurrency'

function TopCurrencies() {

    const [gbpData, setGbpData] = useState([])
    const [usdData, setUsdData] = useState([])

    useEffect(
        () => {
            const result = async() =>{
                try{
                    const responseDataUsd = await getUSD()
                    setUsdData(responseDataUsd)
                    console.log('data USD: ', usdData)
                    const responseDataGbp = await getGBP()
                    setGbpData(responseDataGbp)
                }catch(e){
                    console.log(e)
                }
            } 
            result()
        },[]
    )


    const arrayData = [usdData, gbpData]

    return(

        <Container>
            <div className="cards-topc-container">
                {arrayData.map(data => <TopCurrency amount={data.amount} 
                base={data.base === "EUR" && <img src="https://flagcdn.com/256x192/eu.png" width="54" height="38" alt="Europe flag" />} 
                date={data.date} flag={data.flag} usdRates={data.rates && data.rates.USD} gbpRates={data.rates && data.rates.GBP} czkRates={data.rates && data.rates.CZK} dkkRates={data.rates && data.rates.DKK} iskRates={data.rates && data.rates.ISK} nokRates={data.rates && data.rates.NOK} sekRates={data.rates && data.rates.SEK} plnRates={data.rates && data.rates.PLN} 
                /> )}
            </div>
        </Container>

    )
}

export default TopCurrencies