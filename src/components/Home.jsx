import { Typography, Layout, Row, Col } from 'antd';

import styles from '../styles/components/home.module.css';

const { Header, Content, Footer } = Layout;

const { Title, Paragraph, Text, Link } = Typography;

export function Home() {
    return (
        <>
            <Row>
                <Col span={8} offset={10}>
                    <Title>
                        A empresa
                    </Title>
                </Col>
            </Row>
            <Row>
                <Col span={12} offset={6}>
                    <Layout style={{height: '100vh'}}>
                        <Content>
                            <Paragraph>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet distinctio atque pariatur, nam aliquid eligendi placeat asperiores quod doloremque tenetur minima repudiandae dolorem amet! At corporis amet aperiam adipisci quibusdam!
                            </Paragraph>
                        </Content>
                        <Footer>
                            <Paragraph>
                                teste
                            </Paragraph>
                        </Footer>
                    </Layout>
                </Col>
            </Row>
        </>
    )
}