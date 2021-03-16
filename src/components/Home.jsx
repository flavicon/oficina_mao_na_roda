import { Typography, Layout } from 'antd';

const { Header, Content, Footer } = Layout;

const { Title, Paragraph, Text, Link } = Typography;

export function Home() {
    return (
        <Layout style={{height: '100vh'}}>
            <Header>
                <Typography>
                    <Title>
                        A Empresa
                    </Title>
                </Typography>
            </Header>
            <Content>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam atque alias quis distinctio odio fuga ipsam est qui dicta quas, debitis vero cumque perferendis necessitatibus, voluptatem iste eligendi quaerat sint.
            </Content>
            <Footer>
                <Paragraph>
                    by: mãonaroda.
                </Paragraph>
            </Footer>
        </Layout>
    )
}