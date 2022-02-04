import React, { useEffect, useState } from 'react';
import Cards from '../Cards/Cards';

const Posts = () => {
    const [post,setPost]=useState([])
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res=>res.json())
        .then(data=>setPost(data))
    },[])
    const [randomImages,setImage]=useState([])

    useEffect(()=>{
        fetch('https://api.unsplash.com/photos?per_page=100&query=random&client_id=OCQpYHJdo2PRIxuXD-_3ozIflnHsS7WKyGZnU1MBgvU')
        .then(res=>res.json())
        .then(data=>setImage(data))
    },[])
    console.log(randomImages)
    return (
        <div className='post'>
            <div  className='allposts'>
                {
                    post.map(pt=><Cards
                         post={pt} 
                         ranImages={randomImages}
                    ></Cards>)
                }
            </div>
        </div>
    );
};

export default Posts;