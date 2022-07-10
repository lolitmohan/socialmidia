import React from 'react';
import './Sheare.css'
import lolit from '../TopBar/lolit.jpg'
import { MdPhoto, MdLabel, MdRoom, MdEmojiEmotions} from "react-icons/md";


const Sheare = () => {
    return (
        <div className='sheare'>
            <div className="sheareWrapper">
                <div className="sheareTop">
                    <img src={lolit} alt="Lolit Mohan" className="sheareProfileImg" />
                    <input placeholder="What's in your mind safak" className='sheareInput' />
                </div>
                <hr className='shearHr' />
                <div className="sheareBottom">
                    <div className="sheareOptions">
                        <MdPhoto className='photo' htmlColor="tomato"/>
                        <span className="sheareOptionText">Photo or Text</span>
                    </div>
                    <div className="sheareOptions">
                        <MdLabel className='label'/>
                        <span htmlColor="blue" className="sheareOptionText">Tag</span>
                    </div>
                    <div className="sheareOptions">
                        <MdRoom className='location' />
                        <span className="sheareOptionText">Location</span>
                    </div>
                    <div className="sheareOptions">
                        <MdEmojiEmotions className='feelings' />
                        <span className="sheareOptionText">Feelings</span>
                    </div>
                    <div className="sheareBtn">
                        <button className='btnSheare'>Sheare</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sheare;