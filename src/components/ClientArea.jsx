import { Typography, Form, Input, Button, Row, Col, Layout, Select  } from 'antd';

const { Title } = Typography;

const { Option } = Select;

const { Content } = Layout;

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};

const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 12,
  },
};

export function ClientArea() {
    return (
        <Content>
            <Title style={{ textAlign: 'center' }}>
                Agendamento de Serviço
            </Title>
            <Row>
                <Col span={12} offset={4}>
                    <Form
                        {...layout}
                    >
                        <Form.Item
                            label="Nome"
                            name="name"
                            id="name"
                            rules={[
                                {
                                required: true,
                                message: 'Por favor inserir seu nome!',
                                },
                            ]}
                        >
                            <Input id="nome" />
                        </Form.Item>

                        <Form.Item 
                            label="Serviço"
                            name="servico"
                            id="servico"
                            rules={[
                                {
                                required: true,
                                message: 'Por favor informe o serviço!',
                                },
                            ]}
                        >
                            <Select>
                                <Option value="1">Option 1</Option>
                                <Option value="2">Option 2</Option>
                                <Option value="3">Option 3</Option>
                            </Select>
                        </Form.Item>
                
                        <Form.Item {...tailLayout}>
                            <Button type="primary" htmlType="submit">
                                Enviar
                            </Button>
                        </Form.Item>
                    </Form>
                </Col>
            </Row>
        </Content>
    )
}