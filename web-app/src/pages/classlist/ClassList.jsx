import React from "react";
import Apis from "../../api/classList";
import {Button} from "antd";

class ClassList extends React.Component {
    componentDidMount() {
        Apis.getPackageList().then(res => {
            console.log("res==>", res);
        })
    }

    render() {
        return (
            <div className={"list-table"}>
                hello world!
                <Button type={"primary"}>click!</Button>
            </div>
        )
    }
}

export default ClassList;