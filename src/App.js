import './App.css';
import CardOfGames from './CardOfGames';
import Header from './Header';
import LoginSection from './LoginSection';
import WelcomeCard from './WelcomeCard';
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
