import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CountBarchart from "./components/topic-analysis/barchart/CountBarchart";
import GHLNavbar from "./common/GHLNavbar";
import CountPerServiceChart from "./components/topic-analysis/per-service/CountPerServiceChart";
import UserData from "./components/recommender-system/UserData";
import OperationsTreeMapChart from "./components/clv/OperationsTreeMapChart";
function App() {
    return (
        <div className="App">

            <GHLNavbar/>
            <div className="container">
                <div className="row" style={{textAlign:'left'}}>
                    {/*<CountBarchart/>*/}
                    {/*<CountPerServiceChart/>*/}
                    {/*<OperationsTreeMapChart/>*/}
                    {/*<UserData userId="0x001386E6EE5E5F39213AF50B1E0E6BCC"/>*/}
                </div>
            </div>
        </div>
    );
}

export default App;
