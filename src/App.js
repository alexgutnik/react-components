import './index.css';
import Timer from './components/Timer';
import CustomUseCallback from "./components/CustomUseCallback";
import CheckRerender from "./components/CheckRerender";
import FetchingData from "./components/FetchingData";
import LocalStorage from "./components/LocalStorage";

function App() {
    return (
        <div className="App container mx-auto text-center">
            <Timer />
            <CustomUseCallback />
            <CheckRerender />
            <FetchingData />
            <LocalStorage />
        </div>
    );
}

export default App;
