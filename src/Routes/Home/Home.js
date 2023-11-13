import React from "react";
import WelcomeCard from "./WelcomeCard";
import LoginSection from "../Login/LoginSection";
import CardOfGames from "./GamesSection";
function Home() {
    return (
        <>
            <WelcomeCard />
            <LoginSection />
            <CardOfGames />
        </>
    )
}
export default Home;