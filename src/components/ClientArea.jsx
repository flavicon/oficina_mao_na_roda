import { Form, Input, Button, Select, DatePicker } from 'antd';
import {
    CarOutlined,
    UserOutlined
} from '@ant-design/icons';
import { useState } from 'react';

const { TextArea } = Input;

const { Option } = Select;

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

export function ClientArea(props) {

    const initialFieldValues = {
        name: '',
        placa: '',
        date: '',
        service: '',
        description: '',
    }

    let [ values, setValues ] = useState(initialFieldValues);

    const handleInputChange = element => {
        const [ inputName, inputValue ] = element.target
        setValues({
            ...values,
            [inputName]: inputValue
        })
    }

    const handleFormSubmit = element => {
        element.preventDefault();
        props.addOrEdit(values);
    }

    return (
        <Form
            {...layout}
            onSubmitCapture={handleFormSubmit}
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
                    id="name"
                    placeholder="Digite seu nome"
                    prefix={<UserOutlined/>}
                    value={values.name}
                    onChange={handleInputChange}
                />
            </Form.Item>

            <Form.Item
                name="placa"
                rules={[
                    {
                        required: true,
                        message: 'Por favor inserir a placa!',
                    },
                ]}
            >
                <Input
                    id="placa"
                    placeholder="Insira a placa do veiculo"
                    prefix={<CarOutlined />}
                    value={values.placa}
                    onChange={handleInputChange}
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
                        value={values.date}
                        onChange={handleInputChange}
                    />
                </Input.Group>
            </Form.Item>

            <Form.Item
                name="service"
            >
                <Select placeholder="Selecione o serviço">
                    <Option disabled value="1">serviço 1</Option>
                    <Option value="2">serviço 2</Option>
                    <Option value="3">serviço 3</Option>
                </Select>
            </Form.Item>

            <Form.Item name="description">
                <TextArea
                    showCount maxLength={100}
                    id="description"
                    placeholder="Descreva o serviço"
                    value={values.description}
                    onChange={handleInputChange}
                />
            </Form.Item>

            <Form.Item {...tailLayout}>
                <Button type="primary" htmlType="submit">
                    Enviar
                </Button>
            </Form.Item>
        </Form>
    )
}