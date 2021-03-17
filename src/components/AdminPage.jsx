import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Layout, Menu, Typography } from 'antd';
import { 
    PieChartOutlined, 
    DesktopOutlined, 
    TeamOutlined, 
    UserOutlined, 
    FileOutlined 
} from '@ant-design/icons';
import { Schedule } from './Schedule';
import { CreateService } from './CreateService';

const { Content, Sider } = Layout;
const { Title } = Typography;

const { SubMenu } = Menu;

export function AdminPage() {
    return(
        <Content style={{ margin: '0', overflow: 'initial' }}>
            <Router>
                <Layout>
                    <Sider>
                        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                            <Menu.Item key="1" icon={<PieChartOutlined />}>
                                <Link to="/AdminPage/Schedule">
                                    Atendimentos 
                                </Link>
                            </Menu.Item>
                            <Menu.Item key="2" icon={<DesktopOutlined />}>
                                <Link to="/AdminPage/CreateService">
                                    Cadastrar serviços
                                </Link>
                            </Menu.Item>
                            <SubMenu key="sub1" icon={<UserOutlined />} title="Contas">
                            <Menu.Item key="3">Tom</Menu.Item>
                            <Menu.Item key="4">Bill</Menu.Item>
                            <Menu.Item key="5">Alex</Menu.Item>
                            </SubMenu>
                            <SubMenu key="sub2" icon={<TeamOutlined />} title="Grupos">
                            <Menu.Item key="6">Team 1</Menu.Item>
                            <Menu.Item key="8">Team 2</Menu.Item>
                            </SubMenu>
                            <Menu.Item key="9" icon={<FileOutlined />}>
                                Documentos
                            </Menu.Item>
                        </Menu>
                    </Sider>
                    <Layout>
                        <Switch>
                            <Route path="/AdminPage/Schedule">
                                <Schedule />
                            </Route>
                            <Route path="/AdminPage/CreateService">
                                <CreateService />
                            </Route>
                        </Switch>
                    </Layout>
                </Layout>
            </Router>
        </Content>
    )
}