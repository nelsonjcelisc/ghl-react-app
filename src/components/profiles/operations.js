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
            <h3>Servicios usados</h3>
            <PreviousRequests userId={userId}/>
            <h3>Servicios recomendados</h3>
            <Recommendations userId={userId}/>
            <OperationsTreeMapChart userId={userId}/>_}/>
        </div>
    }
}
