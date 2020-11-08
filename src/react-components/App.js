import React, { Component } from "react";
import Profile from '../react-components/Profile'
import '../style/app.sass';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            SabaProfile: {
                avatar: '../image/avatar.jpg',
                post: 142,
                follower: `7.4M`,
                following: 117,
                name: 'Saba',
                profession: 'Band / Musician',
                text: <p>PIVOTGANG <span>🏀</span><br />
                CARE FOR ME TOUR OUT NOW <span>🎙</span><br />
                    <a href='/'>#CHI-TOWN</a><br />
                This remind me of before we had insomnia<br />
                Sleepin' peacefully, never needed a pile of drugs<br />
                </p>,
                site: 'pivotgang.com'
            }
        }
    }
    render() {
        return (
            <Profile
                avatar={this.state.SabaProfile.avatar}
                post={this.state.SabaProfile.post}
                follower={this.state.SabaProfile.follower}
                following={this.state.SabaProfile.following}
                name={this.state.SabaProfile.name}
                profession={this.state.SabaProfile.profession}
                text={this.state.SabaProfile.text}
                site={this.state.SabaProfile.site}
            >
            </Profile>

        );
    }
}

export default App;