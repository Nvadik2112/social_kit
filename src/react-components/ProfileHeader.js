import React from 'react';
import ButtonMessage from './ButtonMessage'
import ButtonFollow from './ButtonFollow'
import '../style/profile.sass'

const ProfileHeader = props => (
    <div className='profile-header'>
        <div className='profile-header__pic' style={{display: props.avatarDisplay}}>
            <div className='profile-header__pic-shadow'>
            </div>
            <img src={props.avatar} alt="Аватар" />
        </div>
        <div className='profile-header__block' style={{display: props.blockDisplay}}>
            <div className='profile-header__items'>
                <div className='profile-header__item'>
                    <h1>{props.post}</h1>
                    <h2>Posts</h2>
                </div>
                <div className='profile-header__item'>
                    <h1>{props.follower}</h1>
                    <h2>Followers</h2>
                </div>
                <div className='profile-header__item'>
                    <h1>{props.following}</h1>
                    <h2>Following</h2>
                </div>
            </div>
            <div className='profile-header__buttons'>
                <ButtonMessage onClick={() => { alert('Кнопка нажата') }} className='profile-header__button profile-header__button-message'>
                    Message
                        </ButtonMessage>
                <ButtonFollow onClick={() => { alert('Кнопка нажата') }} className='profile-header__button profile-header__button-add'>
                    <img src="../image/Follow.svg" alt="Follow" />
                </ButtonFollow>
            </div>
        </div>
    </div>
)
export default ProfileHeader