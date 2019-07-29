import React from 'react'
import User from '../User/User'
import Banner from '../Banner/Banner';
export default class Main extends React.Component {
    state = {
        users: []
    }
    constructor()
    {
        super();
        const axios = require('axios');
        axios.get("http://192.168.0.2:3003/api/v1/user")
        .then(response => {
            //console.log(response.data);
            this.setState({users:response.data})
        })

    }
    render() {
        return (
            <div className="main">
                <Banner />
                <div className="row">
                    {
                        this.state.users.map((user,i) => <User key={i} name={user.firstname + " " + user.lastname} email={user.email} avatar={user.avatar} id={user._id} />)
                    }
                </div>
            </div>
        )
    }
}