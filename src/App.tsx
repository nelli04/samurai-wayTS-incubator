import {Route} from "react-router-dom";
import React, {FC} from 'react';
import './App.css';
import {Header} from "./Components/Header/Header";
import {Navbar} from "./Components/Navbar/Navbar";
import {Profile} from "./Components/Profile/Profile";
import {Music} from "./Components/Music/Music";
import {Settings} from "./Components/Settings/Settings";
import {News} from "./Components/News/News";
import {ActionsType, DataType, StoreType} from "./state/state";
import {Friend} from "./Components/Navbar/Friends/Friend";
import {DialogsContainer} from "./Components/container/DialogsContainer";

export type AppType = {
    state: DataType
    store: StoreType
    dispatch: (action: ActionsType) => void
}

const App: FC<AppType> = ({store, state}) => {
    debugger;
    return (

        <div className='app_wrapper'>
            <Header/>
            <Navbar/>
            <div className='app_wrapper_content'>
                <Route path={'/profile'} render={() => <Profile/>}/>
                <Route path={'/messages'} render={() => <DialogsContainer store={store}/>}/>
                <Route path={'/music'} render={() => <Music/>}/>
                <Route path={'/settings'} render={() => <Settings/>}/>
                <Route path={'/news'} render={() => <News/>}/>
                <Route path={'/friends'} render={() => <Friend friends={state.friends}/>}/>
            </div>
        </div>

    );
}

export default App;