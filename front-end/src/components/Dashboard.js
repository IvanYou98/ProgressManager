import React, {Component} from 'react';
import NavBar from "./NavBar";

import DashboardItem from "./DashboardItem";

class Dashboard extends Component {
    render() {
        return (
            <div>
                {/*Navigation Bar*/}
                <NavBar/>
                <DashboardItem/>
            </div>
        );
    }
}

export default Dashboard;