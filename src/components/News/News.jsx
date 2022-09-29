import React from 'react';
import news from '../../assets/news-heading.jpg';

const News = () => {
  return (
    <div className='Heading-container'>
        <img src={news} alt="New Arrivals" />
        <div className='Centered-title'>
            <h4 className='Sub-title'>Best Offers</h4>
            <h2 className='Main-title'>Get your products</h2>
        </div>
    </div>
  )
}

export default News;