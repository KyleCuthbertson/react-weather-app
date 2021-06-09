import './App.css';
import Header from './components/Header';
import MainWeatherContent from './components/MainWeatherContent';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="App">
      <Header/>
      <MainWeatherContent/>
      <Footer />
    </div>
  );
}

export default App;
