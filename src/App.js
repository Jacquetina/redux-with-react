import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import {Route,Switch} from 'react-router-dom';
import CreateUser from './components/CreateUser/CreateUser';
import NotFound from './components/NotFound/NotFound';
import Footer from './components/Footer/Footer';
function App() {
  return (
    <div className="App">
    <Header/>
   
    <Switch>
      <Route exact path ="/" component ={Main}/>
      <Route exact path ="/create-user" component ={CreateUser}/>
      <Route exact path ="/edit-user/:id" component ={CreateUser}/>
      <Route  component ={NotFound}/>
    </Switch>
    <Footer/>
    </div>
  );
}

export default App;
