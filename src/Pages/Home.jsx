import EuroConverContainer from "../Components/EuroConvertContainer"
import EuroValues from "../Components/EuroValues"
import MainCardsContainer from "../Components/MainCards/MainCardsContainer"
import TopCurrencies from "../Components/TopCurrencies"

const Home = () => {

    return(

        <>

        <section className='home-intro'>

            <h1>EuroWert</h1>

            <p>
                Willkommen bei EuroWert - Your Euro Exchange Guide!
            </p>

        </section>

        <TopCurrencies />

        <h2>Euro live exchange rates</h2>

        <EuroValues />

        <EuroConverContainer />

        <MainCardsContainer />

        </>
        
    )

}

export default Home