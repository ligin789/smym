import React,{useEffect} from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import axios from 'axios'
import blog from './components/blog';
import Footer from './components/Footer'
import Header from './components/Header'
import Login from './components/Login';
import Main from './components/Main'

function App() {
    useEffect(() => {
       axios.get("http://localhost/zzzzzzz/server/login.php")
       .then(data=>
        {
            console.log(data);
        })
        .catch(err=>console.log(err));
    }, [])
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
                <Switch>
                    <Route exact path="/login" component={Login}/>
                </Switch>
            <Footer/>
            </Router>
            
        </div>
    )
}

export default App
