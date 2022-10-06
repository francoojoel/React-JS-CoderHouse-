import { Routes, Route } from 'react-router-dom';
import './index.css';
import './App.css';
import Header from './components/Header/Header';
import ItemListContainer from './Containers/ItemListContainer';
import ItemDetailContainer from './Containers/ItemDetailContainer';
import Contact from './components/Pages/Contact';
import About from './components/Pages/About';
import Products from './components/Pages/Products';
import Home from './components/Pages/Home';
import Cart from './components/Carts/Cart'
import CartProvider from './Context/CartContext';
import Checkout from './components/Checkout/Checkout';
import Footer from './components/Footer/Footer';
//import ItemCount from './components/ItemCount';

function App () {
   return (
      <CartProvider>
         <div className='App-container'>    
            <Header />
            <Routes>
               <Route path='/' element={<Home />} />
               <Route path='/products' element={<Products />} />
               <Route path='/category/:categoryId' element={<ItemListContainer />} />
               <Route path='/detail/:detailId' element={<ItemDetailContainer />} />
               <Route path='/contact' element={<Contact />} />
               <Route path='/about' element={<About />} />
               <Route path='/cart' element={<Cart />} />
               <Route path='/checkout' element={<Checkout />} />
            </Routes>
            <Footer />
         {/*<ItemCount initial={0} stock={15} />*/}
         </div> 
      </CartProvider>
   );
}

export default App;
