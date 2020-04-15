import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import {Route} from "react-router-dom";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer"
import Users from "./components/Users/Users"
import UsersContainer from "./components/Users/UsersContainer"
import ProfileContainer from "./components/Profile/ProfileContainer"

const App = (props) => {
  return (
    <div className='appWrapper'>
      <Header/>
      <Navbar/>
      <div className='appWrapperContent'>
        <Route path='/profile/:userId?'
               render={() => <ProfileContainer/>}/>
        <Route path='/dialogs'
               render={() => <DialogsContainer/>}/>
        <Route path='/music'
               render={() => <Music/>}/>
        <Route path='/news'
               render={() => <News/>}/>
        <Route path='/users'
               render={() => <UsersContainer/>}/>
        <Route path='/settings'
               render={() => <Settings/>}/>
      </div>
    </div>
  );
}

export default App;
