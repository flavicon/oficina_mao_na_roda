import { Navbar } from "../components/Menu";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import '../styles/global.css';
import { ClientArea } from "../components/ClientArea";
import { Home } from "../components/Home";

export function App() {
    return(
        <Router>
            <Navbar />
            <Switch>
                <Route path="/ClientArea">
                    <ClientArea />
                </Route>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
        </Router>
    )
}