import { Link } from 'react-router-dom'
import { Menu } from 'antd';
import { 
    MailOutlined, 
    SmileOutlined, 
    SettingOutlined, 
    UserOutlined, 
    PhoneOutlined 
} from '@ant-design/icons';

const { SubMenu } = Menu;

export function Navbar() {

    return (
        <div className="container-fluid">
            <div className="header">
                <div className="logo">
                    Oficina mão na roda
                </div>
                <Menu 
                    mode="horizontal"
                    theme="dark"    
                >
                    <Menu.Item 
                        key="empresa" 
                        icon={<MailOutlined />}
                    >
                        <Link to="/">
                            A Empresa
                        </Link>
                    </Menu.Item>
                    <SubMenu 
                        key="services" 
                        icon={<SettingOutlined />} 
                        title="Nossos serviços"
                        >
                        <Menu.ItemGroup title="Mecânica">
                            <Menu.Item key="setting:1">Option 1</Menu.Item>
                            <Menu.Item key="setting:2">Option 2</Menu.Item>
                        </Menu.ItemGroup>
                        <Menu.ItemGroup title="Item 2">
                            <Menu.Item key="setting:3">Option 3</Menu.Item>
                            <Menu.Item key="setting:4">Option 4</Menu.Item>
                        </Menu.ItemGroup>
                    </SubMenu>
                    <Menu.Item 
                        key="client"  
                        icon={<SmileOutlined />}
                    >
                        <Link to="/ClientArea">
                            Area do cliente
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="contact" icon={<PhoneOutlined />}>
                        <Link to="/Contact">
                            Contatos
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="administrator" icon={<UserOutlined />}>
                        <Link to="/AdminPage">
                            Administração
                        </Link>
                    </Menu.Item>
                </Menu>
            </div>
        </div>
    )
}