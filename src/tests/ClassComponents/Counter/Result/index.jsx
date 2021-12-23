import React  from "react";
import {value} from "lodash/seq";


const Result = ({
                    testText,
                    counter,
                    method,
                    // inputText
                }) => {
    console.log("Result");
    return (

        <div className="counter_wrapper_count">
            {testText}
            {counter}
            <div>
                <p>
                    Method: {method}
                </p>
            </div>
            <div>

                {/*<input*/}
                {/*    type="text"*/}
                {/*    // value={inputText}*/}
                {/*      onChange={this.props.target} />*/}

            </div>
            {/*Text : {inputText}*/}
        </div>
    );
}

export default Result;