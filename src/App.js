import Overview from './components/Overview';
import BMICalculator from './components/BMICalculator';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Description from './components/Description';
import BMIChart from './components/BMIChart';
import './App.css'
function App() {
  return (
    <div>
      <Navbar/>
      <BMICalculator/>
      <Description/>
      <Overview/>
      <Footer/>
    </div>
  );
}

export default App;
