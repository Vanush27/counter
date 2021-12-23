// import MessageDynamic from "../components/MessageDynamic";
import MessageModule from "../components/MessageModule";
import { messages } from '../helpers/mockData';
// import CoffeIcon from "../icons/Coffee";

const MainTest = () => {

    return (
        <div className="main-test">
            <h1>Main Test Component</h1>
            {/* <MessageDynamic
                isMessage={true}
                messageData={messages[0]}
                styleType="aqua"
            />
            <MessageDynamic
                messageData={messages[1]}
                styleType="dark"
            />
            <MessageDynamic
                messageData={messages[2]}
                styleType="light"
            /> */}
            {/* <CoffeIcon /> */}

            <MessageModule
                messageData={messages[0]}
            />
        </div>
    );
}
export default MainTest;