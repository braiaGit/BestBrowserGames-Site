import './App.css';
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
      
      </main>
    </div>
  );
}

export default App;
