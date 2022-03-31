import { Avatar } from '@material-ui/core';
import React, { useState } from 'react';
import './message-sender.scss';
import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import { useStateValue } from '../../StateProvider';
import db from '../../firebase';
import firebase from 'firebase';

const MessageSender = () => {

    const[input , setInput] = useState('');
    const[imageUrl , setImageUrl] = useState('');
    const[{user} , dispatch] = useStateValue();

    const handleSubmit = (e) =>{
        e.preventDefault();
        db.collection('posts').add({
            profilePic:user.photoURL,
            message:input,
            timestamp:firebase.firestore.FieldValue.serverTimestamp(),
            image:imageUrl,
            username:user.displayName
        })
        setInput('');
        setImageUrl('');
    }
    return (
        <div className='messageSender'>
            <div className="messageSender__top">
                <form action="">
                    <Avatar
                     src='https://images.pexels.com/photos/1097456/pexels-photo-1097456.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'/>
                    <input
                        value={input}
                        onChange = {(e) =>setInput(e.target.value)} 
                        className='messageSender__input' 
                        placeholder={`Whats on your mind, ${user.displayName} ?`} 
                    />
                    <input
                        onChange={(e) => setImageUrl(e.target.value)} 
                        value={imageUrl} 
                        placeholder='Enter image Url (Optional)' 
                    />
                    <button onClick={handleSubmit} >Hidden</button>
                </form>
            </div>
            <div className="messageSender__bottom">
                <div className="messageSender__option">
                    <VideocamIcon style={{ color: 'red' }} />
                    <h3>Live Video</h3>
                </div>
                <div className="messageSender__option">
                    <PhotoLibraryIcon style={{ color: 'green' }} />
                    <h3>Photo/Video</h3>
                </div>
                <div className="messageSender__option">
                    <InsertEmoticonIcon style={{ color: 'orange' }} />
                    <h3>Feeling/Activity</h3>
                </div>
            </div>

        </div>
    )
}

export default MessageSender