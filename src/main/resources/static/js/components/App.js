import React from "react";
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Employee from '../pages/Employee';
import Profession from '../pages/Profession';
import Department from '../pages/Department';
import About from '../pages/About';
import Home from '../pages/Home';
import {Navbar} from './Navbar';
import {Footer} from './Footer'
import {Alert} from './Alert'

function App() {
    return(
        <BrowserRouter>
            <Navbar/>
            <div className='container pt-4'>
                <Alert/>
                <Switch>
                    <Route path={'/'} exact component={Home}/>
                    <Route path={'/employee'} exact component={Employee}/>
                    <Route path={'/department'} exact component={Department}/>
                    <Route path={'/profession'} exact component={Profession}/>
                    <Route path={'/About'} exact component={About}/>
                </Switch>
            </div>
            <Footer/>
        </BrowserRouter>
    );
}

export default App;