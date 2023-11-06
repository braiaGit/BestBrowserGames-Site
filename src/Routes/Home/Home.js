import React from "react";
import Header from "../Header/Header";
import WelcomeCard from "./WelcomeCard";
import LoginSection from "../Login/LoginSection";
import CardOfGames from "./CardOfGames";
import Sobre from "../About/About";
function Home() {
    return (
        <div>
            <WelcomeCard />
            <main className='container'>
                <LoginSection />
                <CardOfGames />
            </main>
        </div>
    )
}
export default Home;