import React from "react";
import './styles/reset.css';
import './styles/global.scss';
import Header from "./components/Header";
import Preview from "./components/Preview";
import Offer from "./components/Offer";
import Content from "./components/Content";
import Hotel from "./components/Hotel";
import Apartments from "./components/Apartments";
import Transports from "./components/Transports";
import Booking from "./components/Booking";
import Footer from "./components/Footer";


const App = () => {
    return (
        <div>
            <Header/>
            <Preview/>
            <Offer/>
            <Content/>
            <Hotel/>
            <Apartments/>
            <Transports/>
            <Booking/>
            <Footer/>
        </div>
    )
}

export default App;