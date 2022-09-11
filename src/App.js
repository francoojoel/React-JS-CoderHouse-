import './index.css';
import './App.css';
import Header from './components/Header';
import News from './components/News';
import ItemCount from './components/ItemCount';
import ItemListContainer from './containers/ItemListContainer';
import ItemDetailContainer from './containers/ItemDetailContainer';

function App () {
   return (
      <div className='App-container'>
         <Header />
         <News />
         <ItemCount initial={0} stock={10} />
         <ItemListContainer />
         <ItemDetailContainer />
      </div>
   );
}

export default App;
