import React from 'react';
import news from '../assets/news.jpg';

const News = () => {
  return (
    <div className='News-container'>
        <img src={news} alt="New Arrivals" />
        <div className='Centered-title'>
            <h3 className='Sub-title'>Best Offer</h3>
            <h1 className='Main-title'>New Arrivals</h1>
        </div>
    </div>
  )
}

export default News;