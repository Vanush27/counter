import Header from './Header';
// import Main from "./Main";
// import MainTest from '../tests/Main';
import ClassComponent from '../tests/ClassComponents';

function App() {
    const testName = "Marat";
    return (

        <div className="App">
            <Header/>
            {/* <Main /> */}
            {/* <MainTest /> */}
            <ClassComponent
                name={testName}
            />
        </div>
    );
}

export default App;
