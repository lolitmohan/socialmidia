import React from 'react';
import './Post.css';
import lolit from '../TopBar/lolit.jpg'
import { MdMoreVert } from "react-icons/md";
import { BsFillSuitHeartFill } from "react-icons/bs";
import { AiFillLike } from "react-icons/ai";
import {Users} from '../../MyData';

const Post = (props) => {
    console.log(props.post)

    const {date, comment, desc, like, Photo} = props.post;

       

    return (
        <div className='post'>
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img className='postProtfolioImg' src={lolit} alt="Lolit"/>
                        <span className="postUserName">Lolit mohan</span>
                        <span className="postTime"> {date}</span>
                    </div>
                    <div className="postTopRight">
                        <MdMoreVert/>
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postText">{desc}</span>
                    <img src={lolit} alt="Post Imge" className="postImg" />
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <div className="likebg">
                            <span className="like"><AiFillLike/></span>
                        </div>
                        <div className="heart">
                            <span className="like"><BsFillSuitHeartFill/></span>
                        </div>
                        <span className="pepole">{like} Peoples Other like</span>
                    </div>
                    <div className="postBottomRight">
                        <span className="comment">{comment} Comments </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Post;