import React, { useEffect } from 'react';

const TopHeadline = () => {
    useEffect(()=>{
        fetch("https://newsapi.org/v2/top-headlines?country=us&apiKey=a757074d6a164334a170b27bb8a57562")
    })
    return (
        <div>
            
        </div>
    );
};

export default TopHeadline;