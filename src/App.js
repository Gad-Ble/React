import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/profile/Profile';
import Dialogs from "./components/Dialogs/Dialogs";

const App = () => {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div class={"content"}>
                {/*<Profile />*/}
                <Dialogs/>
            </div>
        </div>);
}

export default App;