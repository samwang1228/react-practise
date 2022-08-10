import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
// function Home() {
//     return (
//     <div>
//     <h2>Home</h2>
//     </div>
//     );
//    } 
//    function About() {
//     return (
//     <div>
//     <h2>About</h2>
//     </div>
//     );
//    } 
//    function Dashboard() {
//     return (
//     <div>
//     <h2>Dashboard</h2>
//     </div>
//     );
export default function SidebarExample() {
    return (
        <Router>
            <div style={{ display: "flex" }}>
                <div style={{ padding: '10px', width: '40%', background: '#f0f0f0' }} >
                    <ul style={{ listStyleType: "none", padding: 0 }}>
                        <li>
                            <Link to="/">長庚⼤學</Link>
                        </li>
                        <li>
                            <Link to="/資訊⼯程系">資訊⼯程系</Link>
                        </li>
                        <li>
                            <Link to="/⼈⼯智慧系">⼈⼯智慧系</Link>
                        </li>
                    </ul>
                </div>
                <div style={{ flex: 1, padding: "10px" }}>
                    <Switch>
                        <Route exact path="/資訊⼯程系">
                            <h1>資訊工程學系</h1>
                        </Route>
                        <Route exact path="/⼈⼯智慧系">
                            <h1>⼈⼯智慧系</h1>
                        </Route>
                        <Route exact path="/">
                            <h1>長庚⼤學</h1>
                        </Route> 

                    </Switch>
                </div>
            </div>
        </Router>
    );
}