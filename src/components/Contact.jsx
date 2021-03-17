import { 
    Typography, 
    Layout, 
    Form, 
    Input, 
    Button, 
    Row, 
    Col
} from 'antd';

import { MailOutlined, UserOutlined } from '@ant-design/icons';

const { Title } = Typography;

const { TextArea } = Input;

const { Content }  = Layout;

const layout = {
    labelCol: {
      span: 11,
    },
    wrapperCol: {
      span: 10,
      offset: 11,
    },
  };
  
  const tailLayout = {
    wrapperCol: {
      offset: 11,
      span: 12,
    },
  };

export function Contact() {
    return(
        <Content>
            <Typography>
                <Title style={{ textAlign: 'center' }}>
                    Contatos
                </Title>
                <Row style={{ marginTop: '3rem' }}>
                    <Col span={12} offset={4}>
                        <Form
                            {...layout}
                        >
                            <Form.Item
                                name="name"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Por favor inserir seu nome!',
                                    },
                                ]}
                            >
                                <Input 
                                    id="nome" 
                                    placeholder="Digite seu nome"
                                    prefix={<UserOutlined/>}
                                />
                            </Form.Item>

                            <Form.Item
                                name="mail"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Por favor inserir a placa!',
                                    },
                                ]}
                            >
                                <Input 
                                    id="mail" 
                                    placeholder="Insira seu E-mail"
                                    prefix={<MailOutlined />}
                                />
                            </Form.Item>

                            <Form.Item name="placa">
                                <TextArea showCount maxLength={100} placeholder="Escreva sua mensagem..."/>
                            </Form.Item>
                    
                            <Form.Item {...tailLayout}>
                                <Button type="primary" htmlType="submit">
                                    Enviar
                                </Button>
                            </Form.Item>
                        </Form>
                    </Col>
                </Row>
            </Typography>
        </Content>
    )
}