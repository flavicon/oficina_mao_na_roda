import { Typography, Row, Col, Layout } from 'antd';
import { ClientArea } from './ClientArea';
import firebaseDb from '../api/api';

const { Content } = Layout;

const { Title } = Typography;

export function ServicePage(props) {
    
    // const addOrEdit = object => {
    // firebaseDb.child('ClientArea').push(
    //     object,
    //     err => {
    //             if (err) console.log(err);
    //        }
    //     )
    //  }

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