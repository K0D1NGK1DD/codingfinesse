import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route} from "react-router-dom"
import './styles/index.css';
import "typeface-raleway"
import Home from "./pages/home"
import Bio from "./pages/bio"
import Post from "./pages/post"
import NotFound from "./pages/notfound"

ReactDOM.render(
    <Router>
        <div>
            <Route exact path="/" component={Home} />
            <Route exact path="/bio" component={Bio} />
            <Route exact path="/404" component={NotFound} />
            <Route exact path="/post/:id" render={props => <Post {...props} />} />
        </div>
    </Router>, 
    document.getElementById('root')
);

