import React from "react";
import CounterClass from "./Counter";

class ClassComponent extends React.Component {

    render() {
        // console.log("this",this.props)
        return (
            <CounterClass />
        );
    }
}

export default ClassComponent;