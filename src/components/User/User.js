import React from 'react'
import './User.css'
import { Link } from 'react-router-dom'
export default class Card extends React.Component {
    render() {
        return (


            <div className="col s12 m7 l6">
                <div className="card">
                    <div className="card-image">
                        <img src={this.props.avatar} alt="Avatar" />
                        <span className="card-title">{this.props.name}</span>
                    </div>
                    <div className="card-content">
                        {/*<p><b>{this.props.name}</b></p>*/}
                        <p>{this.props.email}</p>
                    </div>
                    <div className="card-action">
                        <Link className="waves-effect waves-light btn-small" to={"edit-user/" + this.props.id}>Edit</Link>
                        <Link to="/" className="waves-effect waves-light  red darken-1 btn-small">Delete</Link>
                    </div>
                </div>
            </div>



        )
    }
}