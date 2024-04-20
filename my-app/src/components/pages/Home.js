import Map from '../Map';
import TopBar from '../TopBar';
import Sidebar from '../Sidebar';
import { useState } from 'react';

function Home() {
    // call API 
    // const [sidebarData, setSidebarData] = useState(null);
    const sidebarData=[
        {
            "name": "San Diego", 
            "budget": 50
        },
        {
            "name": 'LA',
            "budget": 100
        }
    ]

    return (
        <div>
            <div id="topbar">
                <TopBar/>
            </div>
            <div id="home-pg">
                <div id="map">
                    <Map/>
                </div>
                <div id="sidebar">
                    I am sidebar
                    <Sidebar data={sidebarData}/>
                </div>
            </div>
        </div>
    )
}

export default Home;