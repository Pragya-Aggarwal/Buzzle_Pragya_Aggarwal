import './App.css';
import Buzzle from './components/Buzzle/Buzzle';
import Header from './components/Header/Header';
import LeftNavPage from './components/LeftNavPage/LeftNavPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import { DataScience } from './constants/dataScience';
import { Enterpreneurship } from './constants/Enterpreneurship';
import { FinanceInvestment } from './constants/Finance&Investment';
import { SoftwareEngineering } from './constants/SoftwareEngineering';

function App() {
  return (
    <div className='App'>
    <Header/>
    <LeftNavPage/>
    <Buzzle title="DATA SCIENCE" data= {DataScience}/>
    <Buzzle title="SOFTWARE ENGINEERING" data= {SoftwareEngineering}/>
    <Buzzle title="FINANCE & INVESTMENT" data= {FinanceInvestment}/>
    <Buzzle title="ENTERPRENEURSHIP" data= {Enterpreneurship}/>

    </div>
  );
}

export default App;
