import { BrowserRouter ,Routes, Route } from 'react-router-dom';
import './index.css';
import './App.css';
import Header from './components/Header';
import News from './components/News';
import ItemListContainer from './containers/ItemListContainer';
import ItemDetailContainer from './containers/ItemDetailContainer';
import Contact from './components/Contact';
import About from './components/About';
//import ItemCount from './components/ItemCount';

function App () {
   return (
      <BrowserRouter>
         <div className='App-container'>
            <Header />
               <Routes>
                  <Route path='/' element={<News />} />
                  <Route path='/' element={<ItemListContainer />} />
                  <Route path='/categoria/:categoriaId' element={<ItemListContainer />} />
                  <Route path='/detail/:itemId' element={<ItemDetailContainer />} />
                  <Route path='/contact' element={<Contact />} />
                  <Route path='/about' element={<About />} />
            </Routes>
         {/*<ItemCount initial={0} stock={15} />*/}
         </div>
      </BrowserRouter>  
   );
}

export default App;
