import React from 'react';
import './App.css';
import {Header} from "./Components/Header/Header";
import {Navbar} from "./Components/Navbar/Navbar";
import {Profile} from "./Components/Profile/Profile";
import {Dialogs} from "./Components/Dialogs/Dialogs";




function App() {
    return (
        <div className='app_wrapper'>
            <Header/>
            <Navbar/>
            <Profile/>
            <div className='app_wrapper_content'>
                <Dialogs/>
            </div>
        </div>
    );
}

export default App;