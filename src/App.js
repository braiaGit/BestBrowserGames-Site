import './App.css';
import CardOfGames from './Bory/CardOfGames';
import Header from './Header/Header';
import LoginSection from './Login/LoginSection';
import WelcomeCard from './Bory/WelcomeCard';
import Sobre from './Sobre/Sobre';
function App() {
  return (
    <div className="App">
      <Header/>
      <WelcomeCard/>
      <main className='container'>
      <LoginSection/>
      <CardOfGames/>
      <Sobre/>
      </main>
    </div>
  );
}

export default App;
