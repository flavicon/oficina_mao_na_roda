import { Typography, Layout } from 'antd';

const { Title, Paragraph, Text, Link } = Typography;

const { Content } = Layout;

export function AdminPage() {
    return(
        <Content>
            <Typography>
                <Title style={{ textAlign: 'center' }}>
                    Administração
                </Title>
            </Typography>
        </Content>
    )
}