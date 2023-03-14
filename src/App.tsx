import {Route} from "react-router-dom";
import React from 'react';
import './App.css';
import {Header} from "./Components/Header/Header";
import {Navbar} from "./Components/Navbar/Navbar";
import {Profile} from "./Components/Profile/Profile";
import {Music} from "./Components/Music/Music";
import {Settings} from "./Components/Settings/Settings";
import {News} from "./Components/News/News";
import {DialogsContainer} from "./Components/container/DialogsContainer";

const App = () => {
    debugger;
    return (

        <div className='app_wrapper'>
            <Header/>
            <Navbar/>
            <div className='app_wrapper_content'>
                <Route path={'/profile'} render={() => <Profile/>}/>
                <Route path={'/messages'} render={() => <DialogsContainer/>}/>
                <Route path={'/music'} render={() => <Music/>}/>
                <Route path={'/settings'} render={() => <Settings/>}/>
                <Route path={'/news'} render={() => <News/>}/>
                {/*<Route path={'/friends'} render={() => <Friend friends={state.friends}/>}/>*/}
            </div>
        </div>

    );
}

export default App;

// store={store}