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
                    <Route path={'/profile'} render={()=><Profile/>}/>
                    <Route path={'/messages'} render={()=><Dialogs />}/>
                    <Route path={'/music'} render={()=><Music/>}/>
                    <Route path={'/settings'} render={()=><Settings/>}/>
                    <Route path={'/news'} render={()=><News/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;