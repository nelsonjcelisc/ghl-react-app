import React from "react";
import UserInformation from "../recommender-system/UserInformation";
import StaysInformation from "../recommender-system/StaysInformation";
import PreviousRequests from "../recommender-system/PreviousRequests";
import Recommendations from "../recommender-system/Recommendations";
import OperationsClv from "../clv/OperationsClv";

export default class Operations extends React.Component {
    render() {
        const userId ="0x001386E6EE5E5F39213AF50B1E0E6BCC";
        const userId_ ="0x75AF4A2FB5CFCF126516796FB59B145D";
        
        return <div className="container">
            <UserInformation userId={userId}/>
            <StaysInformation userId={userId}/>
            <PreviousRequests userId={userId}/>
            <Recommendations userId={userId}/>
            <OperationsClv userId={userId_}/>
        </div>
    }
}