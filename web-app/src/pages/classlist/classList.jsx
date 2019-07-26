import React from "react";
import Apis from "../../api/classList";
import Banner from "../../components/banner/banner";

class ClassList extends React.Component {
    componentDidMount() {
        Apis.getPackageList().then(res => {
            console.log("res==>", res);
        })
    }

    render() {
        return (
            <div className={"list-table"}>
                <Banner/>
            </div>
        )
    }
}

export default ClassList;