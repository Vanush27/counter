import React from "react";
import Actions from "./Actions";
import Result from "./Result";
import "./styles.css";
import Input from "./Input";

class CounterClass extends React.Component {

    state = {
        counter: 0,
        testText: "Counter ",
        method: "",
        // inputText : ""
    }
    handleCounterPlus = (e) => {
        this.setState({
            counter: this.state.counter + 1,
            method: "Plus"
        });
    }
    handleCounterMinus = (e) => {
        this.setState({
            counter: this.state.counter - 1,
            method: "Minus"
        });
    }
    //
    // handleInputText = (e) => {
    //     this.setState({
    //         inputText: this.state.inputText +"van"
    //     });
    // }

    render() {
        // console.log("🚀 ~ render")
        console.log("Counter");
        return (
            <div className="counter_wrapper">
                <Actions
                    handleCounterPlus={this.handleCounterPlus}
                    handleCounterMinus={this.handleCounterMinus}
                    // handleInputText ={this.handleInputText}
                />
                <Result
                    testText={this.state.testText}
                    counter={this.state.counter}
                    method={this.state.method}

                    // inputText ={this.state.inputText}
                />
                <Input/>
            </div>
        );
    }


    // constructor(props) {
    //     super(props);
    //     console.log("constructor")
    // }


    // handleInputText = (e) => {
    //
    //     this.setState({
    //         inputText: this.target.value
    //     });
    // }

    // componentWillMount() {
    //     console.log("componentWillMount")
    // }
    // static getDerivedStateFromProps() {
    //     console.log("🚀 ~ getDerivedStateFromProps")
    //     return true;
    // }
    // componentDidMount() {
    //     // console.log("🚀 ~ componentDidMount");
    // }
    // shouldComponentUpdate(nextProps, nextState) {
    //     // console.log("🚀 ~ prevState", nextState)
    //     // console.log("🚀 ~ prevProps", nextProps)
    //     // console.log("shouldComponentUpdate");
    //     return true;
    // }
    // componentDidUpdate(){
    // // console.log("🚀 ~ componentDidUpdate")
    //
    // }
}

export default CounterClass;