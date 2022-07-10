import React from 'react';
import './Close.css'
import lolit from '../TopBar/lolit.jpg'

const Close = (props) => {
    console.log(props.user.profilePicture)
    return (
        <div className='closeFriend'>
            <div className="sitBarFriendList">
                <div className="sitBarFriendItem">
                    <img src={lolit} alt="Lolit" />
                    <span className='imgName'>{props.user.username}</span>
                </div>   
            </div>
        </div>
    );
};

export default Close;