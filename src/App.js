import './App.css';
import Header from './components/Header';
import Formation from './components/Formation';
import PortfolioList from './components/PortfolioList';
import ExpériencesList from './components/ExpériencesList';

import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      
      <Header />
      <Formation />
      <h2 className='portfolio' id='portfolio'>Portfolio</h2>
      <PortfolioList />
      <h2 classNmae='experiences' id='experiences'>Expériences</h2>
      <ExpériencesList />
      <Footer />
    </div>
  );
}

export default App;
