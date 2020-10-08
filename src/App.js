import React from 'react';
import {Route} from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar/Navbar';
import ProfileContainer from './components/Profile/ProfileContainer';
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from './components/Users/UsersContainer';
import HeaderContainer from "./components/Header/HeaderContainer";


const App = () => {
    debugger
    return (
            <div className='app-wrapper'>
                <HeaderContainer />
                <Navbar />
                <div className='app-wrapper-content'>
                    <Route path='/dialogs' //следит за url в браузере. Если url совпадают то она делает render
                           render={ () => <DialogsContainer /> }/>

                    <Route path='/profile/:userId?'//через двоеточие выполняется условие match из темы WithRouter. Создается отсебяшный параметр userID. Знак ? означает опционально.
                           render={ () => <ProfileContainer /> }/>

                    <Route path='/users'
                           render={ () => <UsersContainer /> }/>
                </div>
            </div>
        )
}

export default App;