import React  from "react"
import { isEqual } from "lodash";
import {value} from "lodash/seq";
class Actions extends React.PureComponent {
    // shouldComponentUpdate(nextProps) {

    //     if (isEqual(nextProps, this.props)) return false;

    // }

    render() {
        console.log("Actions");

        return (

            <div className="counter_wrapper_actions">
                <button
                    onClick={this.props.handleCounterPlus}
                >
                    +
                </button>
                <button
                    onClick={this.props.handleCounterMinus}
                >
                    -
                </button>

                {/*<input type="text" onChange={this.props.handleInputText}/>*/}
            </div>


        );
    }
}




export default Actions;
