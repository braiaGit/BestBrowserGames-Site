import React from "react";
import WelcomeCard from "./WelcomeCard";
import LoginSection from "../Login/LoginSection";
import CardOfGames from "./CardOfGames";
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