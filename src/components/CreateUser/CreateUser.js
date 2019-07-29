import React from 'react'
import Axios from 'axios';

export default class CreateUser extends React.Component {

    
    state={
        firstname: null,
        lastname :null,
        email:null,
        avatar:null
    }
  
    handleFirstNameOnChange = (event) =>
    {
       
        this.setState({firstname:event.target.value})
    }
        handleFirstNameOnChange = (event) =>
    {
       
        this.setState({firstname:event.target.value})
       // console.log(event.target.value);
    }
    handleLastNameOnChange = (event) =>
    {
       
        this.setState({lastname:event.target.value})
       // console.log(event.target.value);
    }
    handleEmailNameOnChange = (event) =>
    {
       
        this.setState({email:event.target.value})
       // console.log(event.target.value);
    }
    handleAvatarNameOnChange = (event) =>
    {
       
        this.setState({avatar:event.target.value})
       // console.log(event.target.value);
    }

    handleSubmitClick = () =>
    {
        
        Axios.post("http://192.168.0.2:3003/api/v1/user",{
            firstname:this.state.firstname,
            lastname: this.state.lastname,
            email:this.state.email,
            avatar:this.state.avatar
        }).then(response => {
            console.log(response)
        })
        .catch(err=>{
        
            alert(err);
        })
      
    }
    
    render() {
        return (

            <div className="row">
                <center>

                    <div className="col s12 m12">
                        <div className="card ">
                            <div className="card-content ">
                                <div className="row">
                                    <h3 className="teal-text lighten-2">Register</h3>
                                </div>
                                <div className="row">
                                    <form className="col s12">
                                        <div className="row">
                                            <div className="input-field col s6">
                                                <input  onChange ={this.handleFirstNameOnChange} placeholder="First Name" id="first_name" type="text" className="validate" />
                                               
                                            </div>
                                            <div className="input-field col s6">
                                                <input onChange ={this.handleLastNameOnChange} placeholder="Last Nme"  id="last_name" type="text" className="validate" />
                                              
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="input-field col s12">
                                                <input onChange ={this.handleEmailNameOnChange}placeholder="Email" id="email" type="email" className="validate" />
                                              
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="input-field col s12">
                                                <input onChange={this.handleAvatarNameOnChange} placeholder="Avatar" id="avatar" type="text" className="validate" />
                                             
                                            </div>
                                        </div>

                                        <button onClick={this.handleSubmitClick}  className="btn waves-effect waves-light" type="button"  name="action">Submit<i className="material-icons right">send</i>
                                        </button>

                                    </form>
                                </div>


                            </div>

                        </div>
                    </div>
                </center>

            </div>




        )
    }
}