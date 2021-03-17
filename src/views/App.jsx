import { Navbar } from "../components/Menu";
import { Home } from "../components/Home";
import { Contact } from "../components/Contact";
import { AdminPage } from "../components/AdminPage";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Layout } from 'antd';
import { GithubOutlined } from '@ant-design/icons';

import 'antd/dist/antd.css';
import '../styles/global.css';
import { ServicePage } from "../components/ServicePage";

const { Header, Footer } = Layout;
 
export function App() {
    return(
        <Layout className="mainLayout">
            <Router>
                <Header>
                    <Navbar />
                </Header>
                <Switch>
                    <Route path="/AdminPage">
                        <AdminPage />
                    </Route>
                    <Route path="/Contact">
                        <Contact />
                    </Route>
                    <Route path="/ServicePage">
                        <ServicePage></ServicePage>
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
                <Footer style={{ textAlign: 'center' }}>
                    <GithubOutlined /> flavicon
                </Footer>
            </Router>
        </Layout>
    )
}