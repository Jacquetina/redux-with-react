import React from 'react'
import { Link } from 'react-router-dom'
export default class Banner extends React.Component {
    render() {
        return (
            <div className="header">
                <div className="card-panel teal lighten-2 white-text"><h3>Click this Button to Add User  <Link className="waves-effect white teal-text waves-light btn-large" to="/create-user">Create User</Link> </h3></div>




            </div>
        )
    }
}