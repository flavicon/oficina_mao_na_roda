import { Form, Input, Button, Select, DatePicker, Layout, Typography } from 'antd';
import {
    CarOutlined,
    DollarOutlined
} from '@ant-design/icons';

const { Content } = Layout;

const { TextArea } = Input;

const { Option } = Select;

const { Title } = Typography;

const layout = {
  labelCol: {
    span: 10,
  },
  wrapperCol: {
    span: 6,
    offset: 9,
  },
};

const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 8,
  },
};

export function CreateService() {
    return (
       <Content className="cardCreateService">
            <div className="form">
                <Title>
                    Cadastrar novo serviço
                </Title>
                <Form {...layout}>
                <Form.Item
                    name="name"
                    rules={[
                        {
                            required: true,
                            message: 'Por favor inserir o nome do serviço!',
                        },
                    ]}
                >
                    <Input
                        id="name"
                        placeholder="Nome do serviço"
                        prefix={<CarOutlined/>}
                    />
                </Form.Item>

                <Form.Item name="description">
                    <TextArea
                        showCount maxLength={100}
                        id="description"
                        placeholder="Descreva o serviço"
                    />
                </Form.Item>

                <Form.Item
                    name="preco"
                    rules={[
                        {
                            required: true,
                            message: 'Por favor inserir o preço!',
                        },
                    ]}
                >
                    <Input
                        id="preco"
                        placeholder="Insira o preço do serviço"
                        prefix={<DollarOutlined />}
                    />
                </Form.Item>

                <Form.Item
                    name="date"
                    rules={[
                        {
                            required: true,
                            message: 'Por favor informe a data!',
                        },
                    ]}
                >
                    <Input.Group compact>
                        <DatePicker
                            style={{ width: '100%' }}
                            placeholder="Selecione a data"
                            id="date"
                        />
                    </Input.Group>
                </Form.Item>

                <Form.Item {...tailLayout}>
                    <Button type="primary" htmlType="submit">
                        Enviar
                    </Button>
                </Form.Item>
                </Form>
            </div>
       </Content>
    )
}