import React, { Component } from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SinglePage from './SinglePage';
import SEO from './widget/SeoHome';
import Breadcumb from './widget/Breadcumb';
import List from './List';
import About from './Demo';
import Pos from './Pos';
import Order from './Order';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './widget/Header';
import Top from './Top';
import './cute.css';
class App extends Component {
  render() {
    return (
      <Router>
        <SEO />
        <Top />
        <div className="container">
          <div className="row">
            <Header />
            <Breadcumb />
            <div className="col-md-12 p-3">
              <Route path="/" component={List} exact />
              <Route path="/article" component={List} exact />
              <Route path="/demo" component={About} exact />
              <Route path="/pos" component={Pos} exact />
              <Route path="/order" component={Order} exact />
              <Route path="/article/:name" component={SinglePage} />
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

render(<App />, document.getElementById('root'));
