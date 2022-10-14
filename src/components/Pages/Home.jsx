import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ItemListContainer from '../../containers/ItemListContainer';
import News from '../News/News';

const Home = () => {
  return (
    <div>
      <News />
      <Routes>
         <Route path='/' element={<ItemListContainer />} />
      </Routes>
    </div>
  )
}

export default Home;
