import React, {Component} from "react";
import {Link, NavLink} from "react-router-dom";
import './head.scss';

const menu = [
    {
        name: "知识库",
        path: "/main/home"
    },
    {
        name: "热词",
        path: "/main/hot"
    },
    {
        name: "日志",
        path: "/main/log"
    },
    {
        name: "敏感词",
        path: "/main/sensitive"
    },
];

class Head extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "hello"
        }
    }

    render() {
        return (
            <div className={"app-header"}>
                <div className={"header-left"}>
                    <div className={"logo"}>log</div>
                    <ul className={"menu-list"}>
                        {
                            menu.map((item, index) => {
                                let {name, path} = item;
                                return (
                                    <li key={index}>
                                        <NavLink to={path}>{name}</NavLink>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
                <div className={"login"}>login</div>
            </div>
        )
    }
}

export default Head;