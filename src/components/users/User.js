import React, { Component } from 'react'
import UserItem from './UserItem';


export class User extends Component {
    state = {
        users: [
            {login: "mojombo",
            id: 1,
            html_url: "https://github.com/mojombo",
            url : "https://avatars.githubusercontent.com/u/1?v=4"},
            {login: "defunkt",
            id: 2,
            html_url: "https://api.github.com/users/defunkt",
            url : "https://avatars.githubusercontent.com/u/2?v=4"},
            {login: "pjhyett",
            id: 3,
            html_url: "https://api.github.com/users/pjhyett",
            url : "https://avatars.githubusercontent.com/u/3?v=4"}
        ]
    };
    render() {
        return (
            <div style={userStyle}>
                {this.state.users.map(user =>{
                   return <UserItem key={user.id} user={user} />
                })}
            </div>
        )
    }
}

const userStyle = {
    display : 'grid',
    gridTemplateColumns : 'repeat(3,1fr)',
    gridGap : '1rem'
};


export default User;
