import {BrowserRouter, Route} from "react-router-dom";
import React from 'react';
import './App.css';
import {Header} from "./Components/Header/Header";
import {Navbar} from "./Components/Navbar/Navbar";
import {Profile} from "./Components/Profile/Profile";
import {Dialogs} from "./Components/Dialogs/Dialogs";
import {Music} from "./Components/Music/Music";
import {Settings} from "./Components/Settings/Settings";
import {News} from "./Components/News/News";

function App() {
    debugger
    return (
        <BrowserRouter>
            <div className='app_wrapper'>
                <Header/>
                <Navbar/>
                <div className='app_wrapper_content'>
                    <Route path={'/profile'} component={Profile}/>
                    <Route path={'/messages'} component={Dialogs}/>
                    <Route path={'/music'} component={Music}/>
                    <Route path={'/settings'} component={Settings}/>
                    <Route path={'/news'} component={News}/>
                </div>
            </div>
        </BrowserRouter>);
}

export default App;