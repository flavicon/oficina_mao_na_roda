import { Typography, Layout } from 'antd';

const { Title } = Typography;

const { Content }  = Layout;

export function Contact() {
    return(
        <Content>
            <Typography>
                <Title style={{ textAlign: 'center' }}>
                    Contatos
                </Title>
            </Typography>
        </Content>
    )
}