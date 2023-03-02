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
import {DataType} from "./Components/Profile/state";

export type AppType = {
    state: DataType
}

const App: FC<AppType> = ({state}) => {
    return (

        <div className='app_wrapper'>
            <Header/>
            <Navbar/>
            <div className='app_wrapper_content'>
                <Route path={'/profile'} render={() => <Profile profile={state.profile}
                                                                message={state.message}
                                                                addPost={state.addPost}
                                                                changeNewText={state.changeNewText}/>}/>
                <Route path={'/messages'} render={() => <Dialogs message={state.message}
                                                                 profile={state.profile}
                                                                 addPost={state.addPost}
                                                                 changeNewText={state.changeNewText}/>}/>
                <Route path={'/music'} render={() => <Music/>}/>
                <Route path={'/settings'} render={() => <Settings/>}/>
                <Route path={'/news'} render={() => <News/>}/>
            </div>
        </div>

    );
}

export default App;