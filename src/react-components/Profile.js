import React, { Component } from 'react';
import ProfileHeader from './ProfileHeader'
import ProfileMain from './ProfileMain'
import '../style/profile.sass'



class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            profileDisplay: 'none',
            avatarDisplay: 'none',
            blockDisplay: 'none',
            mainDisplay: 'none'
        }
    }           
    render() {               
        setTimeout(
            () => this.setState({ avatarDisplay: ' ' }), 
            1000
        );
        setTimeout(
            () => this.setState({ blockDisplay: ' ' }), 
            2000
        );
        setTimeout(
            () => this.setState({ mainDisplay: ' ' }), 
            3000
        );        
        return (
            <div className='profile'>
                <ProfileHeader
                    avatar={this.props.avatar}
                    post={this.props.post}
                    follower={this.props.follower}
                    following={this.props.following}
                    avatarDisplay={this.state.avatarDisplay}
                    blockDisplay={this.state.blockDisplay}
                ></ProfileHeader>
                <ProfileMain
                    name={this.props.name}
                    profession={this.props.profession}
                    text={this.props.text}
                    site={this.props.site}
                    mainDisplay={this.state.mainDisplay}
                ></ProfileMain>
            </div>
        );
    }
}

export default Profile;

