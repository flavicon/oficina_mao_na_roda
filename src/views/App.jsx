import { Navbar } from "../components/Menu";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import '../styles/global.css';
import { ClientArea } from "../components/ClientArea";
import { Home } from "../components/Home";
import { Contact } from "../components/Contact";
import { AdminPage } from "../components/AdminPage";
import { Layout } from 'antd';
import { GithubOutlined } from '@ant-design/icons';

const { Header, Footer } = Layout;
 
export function App() {
    return(
        <Layout>
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
                    <Route path="/ClientArea">
                        <ClientArea />
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