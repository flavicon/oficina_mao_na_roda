import { Typography, Form, Input, Button, Checkbox, Row, Col  } from 'antd';

const { Title, Paragraph, Text, Link } = Typography;

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
    span: 16,
  },
};

export function ClientArea() {
    return (
        <>
            <Row>
                <Col span={12} style={{marginTop: '8rem'}}>
                    <Form
                        {...layout}
                    >
                        <Form.Item
                            label="Username"
                            name="username"
                            rules={[
                                {
                                required: true,
                                message: 'Please input your username!',
                                },
                            ]}
                        >
                        <Input />
                        </Form.Item>
                
                        <Form.Item
                            label="Password"
                            name="password"
                            rules={[
                                {
                                required: true,
                                message: 'Please input your password!',
                                },
                            ]}
                        >
                        <Input.Password />
                        </Form.Item>
                
                        <Form.Item {...tailLayout} name="remember" valuePropName="checked">
                        <Checkbox>Remember me</Checkbox>
                        </Form.Item>
                
                        <Form.Item {...tailLayout}>
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                        </Form.Item>
                    </Form>
                </Col>
            </Row>
        </>
    )
}