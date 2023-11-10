import React from "react";
import WelcomeCard from "./WelcomeCard";
import LoginSection from "../Login/LoginSection";
import CardOfGames from "./CardOfGames";
function Home() {
    return (
        <div>
                <WelcomeCard />
                <LoginSection />
                <CardOfGames />
        </div>
    )
}
export default Home;