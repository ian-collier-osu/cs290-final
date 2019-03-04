import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import TopBar from './components/TopBar.js';
import HomeBody from './pages/HomeBody.js';
import SolutionsBody from './pages/SolutionsBody.js';
import PricingBody from './pages/PricingBody.js';
import EnterpriseBody from './pages/EnterpriseBody.js';
import NotFoundBody from './pages/404.js';

class App extends Component {
  render() {
    return (
        <div>
            <TopBar/>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={HomeBody} />
                    <Route path="/solutions" component={SolutionsBody} />
                    <Route path="/pricing" component={PricingBody} />
                    <Route path="/enterprise" component={EnterpriseBody} />
                    <Route component={NotFoundBody} />
                </Switch>
            </BrowserRouter>
        </div>
    );
  }
}

export default App;
