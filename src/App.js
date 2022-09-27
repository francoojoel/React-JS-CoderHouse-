import { Routes, Route } from 'react-router-dom';
import './index.css';
import './App.css';
import Header from './components/Header';
import ItemListContainer from './containers/ItemListContainer';
import ItemDetailContainer from './containers/ItemDetailContainer';
import Contact from './components/Contact';
import About from './components/About';
import Products from './components/Products';
import Home from './components/Home';
import Cart from './components/Cart'
import CartProvider from './context/CartContext';
//import ItemCount from './components/ItemCount';

function App () {
   return (
      <CartProvider>
         <div className='App-container'>    
            <Header />
            <Routes>
               <Route path='*' element={<Home />} />
               <Route path='/category/:categoryId' element={<ItemListContainer />} />
               <Route path='/detail/:detailId' element={<ItemDetailContainer />} />
               <Route path='/products' element={<Products />} />
               <Route path='/contact' element={<Contact />} />
               <Route path='/about' element={<About />} />
               <Route path='/cart' element={<Cart />} />
            </Routes>
         {/*<ItemCount initial={0} stock={15} />*/}
         </div> 
      </CartProvider>
   );
}

export default App;
