import './index.css';
import Timer from './components/Timer';
import CustomUseCallback from "./components/CustomUseCallback";
import CheckRerendering from "./components/CheckRerendering";
import FetchingData from "./components/FetchingData";
import LocalStorage from "./components/LocalStorage";

function App() {
    return (
        <div className="App container mx-auto text-center px-4">
            <Timer />
            <CustomUseCallback />
            <CheckRerendering />
            <FetchingData />
            <LocalStorage />
        </div>
    );
}

export default App;
