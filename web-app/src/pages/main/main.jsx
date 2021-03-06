import React from "react";
import {Switch, Route, Redirect} from "react-router-dom";

import ClassList from "../classlist/classList";
import Know from "../know/know";
import Home from "../home/home";

import "./main.scss";

const Main = () => {
    return (
        <div className={"app-main"}>
            <Switch>
                <Route path={"/main/home"} component={Home}/>
                <Route path={"/main/know"} component={Know}/>
                <Route path={"/main/log"} component={ClassList}/>
                <Route path={"/main/sensitive"} component={Know}/>
                <Redirect to={"/main/know"}/>
            </Switch>
        </div>

    )
};

export default Main;