import React from "react";
import ManagementTreeMap from "../clv/ManagementTreeMapChart";
import UserInformation from "../recommender-system/UserInformation";
import StaysInformation from "../recommender-system/StaysInformation";
import PreviousRequests from "../recommender-system/PreviousRequests";
import Recommendations from "../recommender-system/Recommendations";
import OperationsTreeMapChart from "../clv/OperationsTreeMapChart";

export default class Operations extends React.Component {
    render() {
        const userId ="0x001386E6EE5E5F39213AF50B1E0E6BCC";
        return <div className="container">
            <UserInformation userId={userId}/>
            <StaysInformation userId={userId}/>
            <PreviousRequests userId={userId}/>
            <Recommendations userId={userId}/>
            <OperationsTreeMapChart userId={userId}/>
        </div>
    }
}