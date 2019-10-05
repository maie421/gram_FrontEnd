import React from "react";
import propTypes from "prop-types";
import {HashRouter as Router,Route,Switch} from "react-router-dom";
import Auth from "../Routes/Auth";
import Feed from "../Routes/Feed";

const LoggedInRoutes =()=>(
    <>
        <Route exact path="/" component={Feed}/>
    </>
);

const LoggedOutRoutes =()=>(
    <>
       <Route exact path="/" component={Auth} />
    </>
);

const AppRouter =({isLoggedIn})=>(
    <Router>
        <Switch>{isLoggedIn?<LoggedInRoutes/>:<LoggedOutRoutes/>}</Switch>
    </Router>
);

AppRouter.propTypes={
    isLoggedIn:propTypes.bool.isRequired
};

export default AppRouter;