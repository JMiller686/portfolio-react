import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from '../components/Header';
import HomePage from '../components/HomePage';
import PortFolioPage from '../components/PortfolioPage';
import ContactPage from '../components/ContactPage';
import NotFound from '../components/NotFound';

const AppRouter = () => {
    return (
        <BrowserRouter>
            <div>
                <Header />
                <Switch>
                    <Route path="/" component={ HomePage } exact={true} />
                    <Route path="/portfolio" component={ PortFolioPage } />
                    <Route path="/contact" component={ ContactPage } /> 
                    <Route component={ NotFound }/>
                </Switch>
            </div>
        </BrowserRouter>
    )
}

export default AppRouter;