import React, {Component} from "react";
import {Carousel} from "antd";
import "./banner.scss";

class Banner extends Component {

    render() {
        return (
            <Carousel autoplay dots className={"banner-box"}>
                <div>
                    <h3>1</h3>
                </div>
                <div>
                    <h3>2</h3>
                </div>
                <div>
                    <h3>3</h3>
                </div>
                <div>
                    <h3>4</h3>
                </div>
            </Carousel>
        )
    }
}

export default Banner;