import { Typography, Layout } from 'antd';

const { Content } = Layout;

const { Title, Paragraph } = Typography;

export function Home() {
    return (
        <Content className="container">
            <div className="cardHome">
                <Title className="title">
                    Bem vindo a Oficina Mão na Roda
                </Title>
                <Paragraph className="paragraph">
                    Mussum Ipsum, cacilds vidis litro abertis. Mauris nec dolor in eros commodo tempor. Aenean aliquam molestie leo, vitae iaculis nisl. Leite de capivaris, leite de mula manquis sem cabeça. Suco de cevadiss, é um leite divinis, qui tem lupuliz, matis, aguis e fermentis. Aenean aliquam molestie leo, vitae iaculis nisl.
                </Paragraph>
                <Paragraph className="paragraph">
                    Mussum Ipsum, cacilds vidis litro abertis. Em pé sem cair, deitado sem dormir, sentado sem cochilar e fazendo pose. Detraxit consequat et quo num tendi nada. Praesent vel viverra nisi. Mauris aliquet nunc non turpis scelerisque, eget. Todo mundo vê os porris que eu tomo, mas ninguém vê os tombis que eu levo!          
                </Paragraph>
                <Paragraph className="paragraph">
                    Mussum Ipsum, cacilds vidis litro abertis. Em pé sem cair, deitado sem dormir, sentado sem cochilar e fazendo pose. Detraxit consequat et quo num tendi nada. Praesent vel viverra nisi. Mauris aliquet nunc non turpis scelerisque, eget. Todo mundo vê os porris que eu tomo, mas ninguém vê os tombis que eu levo!          
                </Paragraph>
            </div>
        </Content>
    )
}