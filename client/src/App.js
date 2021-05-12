import React,{useEffect} from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import axios from 'axios'
import About from './components/about';
import Footer from './components/Footer'
import Header from './components/Header'
import Login from './components/Login';
import Main from './components/Main'
import "react-big-calendar/lib/css/react-big-calendar.css";
import Calander from './components/Calander/Calander'


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
                    <Route exact path="/about" component={About}/>
                </Switch>
                <Switch>
                    <Route exact path="/login" component={Login}/>
                </Switch>
                <Calander></Calander>
            <Footer/>
            </Router>
            
        </div>
    )
}

export default App
