import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import blog from './components/blog';
import Footer from './components/Footer'
import Header from './components/Header'
import Main from './components/Main'

function App() {
    return (
        <div>
            <Router>
            <Header/>
                <Switch>
                    <Route exact path="/" component={Main}/>
                </Switch>
                <Switch>
                    <Route exact path="/blog" component={blog}/>
                </Switch>
            <Footer/>
            </Router>
            
        </div>
    )
}

export default App
