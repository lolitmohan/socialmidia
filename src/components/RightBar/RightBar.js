import React from 'react';
import './RightBar.css';
import lolit from '../../assits/gift.png'
import lolit1 from '../TopBar/lolit.jpg'
import Online from '../Online/Online';
import {Users} from '../../MyData';



const RightBar = () => {
    return (
        <div className='rightBar'>
            <div className="rightBarWrapper">
                <div className="birdayContainer">
                    <img src={lolit} alt="" className="birdayImg" />
                    <span className="birdayText">
                        <b>Lolit Mohan</b> and <b>3 Other friends</b> have a birday today
                    </span>
                </div>
            </div>
            <img src={lolit} alt="" className="rightBarAd" />
            <h4 className="rightBarTitle">Online Friends</h4>
            <hr />
            <div className="rightBarFriendList">
                {Users.map(u=>(
                    <Online user={u} key={u.id} />
                ))}
                
            </div>      
        </div>
    );
};

export default RightBar;