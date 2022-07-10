import "./Online.css";
import lolit from '../../assits/gift.png'
import lolit1 from '../TopBar/lolit.jpg'

const Online = (user) => {

    return (
        <div className="rightBarFriendItem">
            <div className="online">
               <img src={lolit1} alt="Mohan" className="onlineProfileImg" />
               <span className="onlineIcon"></span>
            </div>
            <span className='imgName'>{user.user.username}</span>
        </div>
    );
};

export default Online;