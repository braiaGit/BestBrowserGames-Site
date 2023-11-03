import './App.css';
import CardOfGames from './Bory/CardOfGames';
import Header from './Header/Header';
import LoginSection from './Login/LoginSection';
import WelcomeCard from './Bory/WelcomeCard';
function App() {
  return (
    <div className="App">
      <Header/>
      <WelcomeCard/>
      <main className='container'>
      <LoginSection/>
      <CardOfGames/>

      </main>
    </div>
  );
}

export default App;
