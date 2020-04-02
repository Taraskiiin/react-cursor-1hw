import React from 'react';
import postimg from '../assets/img/1hbVBwPsnlY.jpg'
import './post.css'
const Post = (props) => {
    return (
        <div className="post__block">
            <div className="profile">
                <img src="https://upload.wikimedia.org/wikipedia/en/thumb/7/74/Anakin-Jedi.jpg/220px-Anakin-Jedi.jpg" alt="profil-avatar"></img>
                <div className='profile__info'>
                    <p className="user__name">{props.name}</p>
                    <p className="nick__name">{props.nickname}</p>
                    <p className="date__post">{props.date}</p>
                </div>
            </div>
            <div className="post__body">
                <p className="content">{props.content}</p>
                <img src={postimg}  alt ="post-photo"/>
            </div>
        </div>
    );
}
export default Post;  