import './index.css';
import './App.css';
import Header from './components/Header';
import News from './components/News';
import ItemCount from './components/ItemCount';

function App () {
   return (
      <div className='App-container'>
         <Header />
         <News />
         <ItemCount initial={0} stock={10} />
      </div>
   );
}

export default App;
