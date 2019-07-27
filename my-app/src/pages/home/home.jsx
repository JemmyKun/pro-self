import React, {Component} from "react";
import Apis from "../../api/home";
import "./home.scss";

class Home extends Component {
    componentDidMount() {
        this.getHomeData();
    }

    getHomeData() {
        Apis.getHomeList().then(res => {
            console.log("home:res", res);
        })
    }

    render() {
        return (
            <div className={"home-page"}>
                home-page
            </div>
        )
    }
}

export default Home;