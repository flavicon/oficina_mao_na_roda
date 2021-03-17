import { Typography, Row, Col, Layout } from 'antd';
import { ClientArea } from './ClientArea';

const { Content } = Layout;

const { Title } = Typography;

export function ServicePage(props) {

    return (
        <Content>
            <Title style={{ textAlign: 'center' }}>
                Agendamento de Serviço
            </Title>
            <Row style={{ marginTop: '3rem' }}>
                <Col span={12} offset={4}>
                    <ClientArea />
                </Col>
            </Row>
        </Content>
    )

    
}