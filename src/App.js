import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Management from "./components/profiles/management";
import Operations from "./components/profiles/operations";
import GHLNavbar from "./common/GHLNavbar";
import UserInformation from "./components/recommender-system/UserInformation";
import React from "react";

function App() {
    return (
        <div className="App">
            <GHLNavbar/>
            <Router>
                <Routes>
                    <Route path="management" element={<Management/>}/>
                    <Route path="operations" element={<Operations/>}/>
                </Routes>
            </Router>
        </div>
    );
}

export default App;
