import React from 'react';
import {Routes,Route} from 'react-router-dom'
import Header from '../../Components/Header/Header';
import NewHome from '../NewHome/NewHome';
import Explore from '../Explore/Explore'
import Profile from '../Profile/Profile';
const Home = ({handleLogged}) => {
    return(
        <div>
            <Header isLogged={handleLogged}/>
            <Routes>
                <Route exact path='/' component={NewHome}/>
                <Route exact path='/explore' component={Explore}/>
                <Route path='/:username' component={Profile}/>
            </Routes>
        </div>
    )
}

export default Home;