import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsCard from './NewsCard/NewsCard';

const Category = () => {
    const news = useLoaderData();
    return (
        <div>
            <h1>category: {news.length}</h1>
            {
                news.map(n => <NewsCard key={n._id} news={n}></NewsCard>)
            }
        </div>
    );
};

export default Category;