import React from "react";
import '../style/app.sass';

const ProfileMain = props => (
    <div className='profile-main' style={{display: props.mainDisplay}}>
        <h1 className='profile-main__name'>{props.name}</h1>
        <h2 className='profile-main__profession'>{props.profession}</h2>
        <div className='profile-main__text'>{props.text}</div>
        <div className='profile-main__site'><a href={props.site}>{props.site}</a></div>
    </div>
)

export default ProfileMain