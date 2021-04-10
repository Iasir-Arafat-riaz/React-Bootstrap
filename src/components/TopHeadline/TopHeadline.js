import React, { useEffect, useState } from 'react';

const TopHeadline = () => {
    const[headline,setHeadline]=useState([])
    useEffect(()=>{
        fetch("https://newsapi.org/v2/top-headlines?country=us&apiKey=a757074d6a164334a170b27bb8a57562")
        .then(respone=>respone.json())
        .then(data=>setHeadline(data.articles))
       
    },[])
    return (
        <div>
            
            <h1>Top Headlines :{headline.length}</h1>

        </div>
       
    );
};

export default TopHeadline;