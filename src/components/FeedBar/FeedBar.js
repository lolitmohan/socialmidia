import React from 'react';
import Post from '../Post/Post';
import Sheare from '../Sheare/Sheare';
import './FeedBar.css';
import {Posts} from '../../MyData'; 


const FeedBar = () => {
    return (
        <div className='feedBar'>
            <Sheare></Sheare>

            {
                Posts.map(p =>(

                    <Post post={p} key={p.id}/>
                    
                ))
            }
        </div>
    );
};

export default FeedBar;