import './Profile.css';
import TopBar from '../../components/TopBar/TopBar'
import SitBar from '../../components/SitBar/SitBar'
import FeedBar from '../../components/FeedBar/FeedBar'
import RightBar from '../../components/RightBar/RightBar'


const Profile = () => {
    return (
        <>
           <TopBar/>
           <div className="profile">
            <FeedBar/>
           </div>
        </>
    );
};

export default Profile;