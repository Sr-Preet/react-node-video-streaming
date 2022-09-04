import React from 'react';
import {
    Route,
    BrowserRouter as Router,
    Switch,
} from "react-router-dom";
import Home from './Home';
import Player from './Player';
import Header from './Header';
import Footer from './Footer';
import './App.css';

function App() {
    return (
        <Router>
          <Header />
            <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route path="/player/:id" component={Player}></Route>
            </Switch>
            <Footer />
        </Router>
    );
}
export default App;