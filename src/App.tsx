import {Route} from "react-router-dom";
import React, {FC} from 'react';
import './App.css';
import {Header} from "./Components/Header/Header";
import {Navbar} from "./Components/Navbar/Navbar";
import {Profile} from "./Components/Profile/Profile";
import {Dialogs} from "./Components/Dialogs/Dialogs";
import {Music} from "./Components/Music/Music";
import {Settings} from "./Components/Settings/Settings";
import {News} from "./Components/News/News";
import {DataType, StoreType} from "./Components/Profile/state";
import {Friend} from "./Components/Navbar/Friends/Friend";

export type AppType = {
    state: DataType
    store: StoreType
}

const App: FC<AppType> = ({state}) => {

    return (

        <div className='app_wrapper'>
            <Header/>
            <Navbar/>
            <div className='app_wrapper_content'>
                <Route path={'/profile'} render={() => <Profile profile={state.profile}
                                                                message={state.message}
                                                                changeNewText={state.changeNewText}
                                                                addPost={state.addPost}
                />}/>
                <Route path={'/messages'} render={() => <Dialogs message={state.message}
                                                                 profile={state.profile}
                                                                 changeNewText={state.changeNewText}
                                                                 addPost={state.addPost}
                                                                 />}/>
                <Route path={'/music'} render={() => <Music/>}/>
                <Route path={'/settings'} render={() => <Settings/>}/>
                <Route path={'/news'} render={() => <News/>}/>
                <Route path={'/friends'} render={() => <Friend/>}/>
            </div>
        </div>

    );
}

export default App;