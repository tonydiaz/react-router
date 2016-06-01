var React = require('react');
var Router = require('react-router').Router;
var Route = require('react-router').Route;

var Base = require('./components/Base.jsx');
var Page1 = require('./components/Page1.jsx');
var Page2 = require('./components/Page2.jsx');

var Routes = (
    <Router>
        <Route path="/" component={Base}>
            <Route path="/page1" component={Page1}/>
            <Route path="/page2" component={Page2}/>
        </Route>
    </Router>
);

module.exports = Routes;
