import React from "react";


class TestHom extends React.Component {

    constructor() {
        super();
        console.log("constructor")
    }

    componentDidMount() {
        console.log("componentDidMount")
    }

    state = {
        number: 0,
        text: "",
    }
    plusRender = () => {
        this.setState({number: this.state.number + 1});
    }

    minusRender = () => {
        this.setState(prevState => ({
            number: prevState.number - 1
        }))
    }

    componentWillUnmount() {
        console.log("componentWillUnmount")
    }

    render() {
        console.log("render")
        return (

            <div>
                <p>{this.state.number}</p>
                <button onClick={this.plusRender}>+</button>
                <button onClick={this.minusRender}>-</button>

            </div>
        )
    }
}

export default TestHom