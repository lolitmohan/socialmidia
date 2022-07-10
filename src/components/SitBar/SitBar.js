import React from 'react';
import './SitBar.css';
import { MdOutlineRssFeed,MdChat, MdVideoCameraBack, MdGroups, MdOutlineBookmark, MdQuestionAnswer, MdShoppingBag, MdEvent, MdGolfCourse } from "react-icons/md";
import Close from '../Close Friend/Close';
import {Users} from '../../MyData';


const SitBar = () => {
    return (
        <div className='sitBar'>
            <div className="sitBarWarpper">
                <ul className="sitBarList">
                    <li className="sitBarListItem">
                        <MdOutlineRssFeed/>
                        <span className="feed">Feed</span>
                    </li>
                    <li className="sitBarListItem">
                        <MdChat/>
                        <span className="feed">Chats</span>
                    </li>
                    <li className="sitBarListItem">
                        <MdVideoCameraBack/>
                        <span className="feed">Video</span>
                    </li>
                    <li className="sitBarListItem">
                        <MdGroups/>
                        <span className="feed">Groups</span>
                    </li>
                    <li className="sitBarListItem">
                        <MdOutlineBookmark/>
                        <span className="feed">Bookmarks</span>
                    </li>
                    <li className="sitBarListItem">
                        <MdQuestionAnswer/>
                        <span className="feed">Questions</span>
                    </li>
                    <li className="sitBarListItem">
                        <MdShoppingBag/>
                        <span className="feed">Jobs</span>
                    </li>
                    <li className="sitBarListItem">
                        <MdEvent/>
                        <span className="feed">Events</span>
                    </li>
                    <li className="sitBarListItem">
                        <MdGolfCourse/>
                        <span className="feed">Courses</span>
                    </li>
                </ul>
                <div className="btn">
                    <button className='btn-see'>See More</button>
                </div>
                <hr className='sitBarHr' />
                {Users.map(u=>(
                    <Close user={u} key={u.id}/>
                ))}
            </div>
        </div>
    );
};

export default SitBar;