
import './App.css';
import { Buttons } from './components/Buttons/Buttons';
import DataProvider from './components/Context/DataContext';
import { Display } from './components/Display/Display';

function App() {
  return (
    <DataProvider>
          <div className='content'>
        <Display/>
        <Buttons/>
    </div>
    </DataProvider>

  );
}

export default App;
