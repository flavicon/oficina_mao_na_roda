import { Typography, Layout } from 'antd';
import { 
   
} from '@ant-design/icons';

const { Content } = Layout;

const { Title, Paragraph, Text } = Typography;

export function Home() {
    return (
        <Content className="container">
            <Title className="title">
                Bem vindo a Oficina Mão na Roda
            </Title>
            <Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, ipsum? Qui sunt aliquam impedit. Dolor voluptatum animi doloremque eligendi minima fugit eaque culpa earum temporibus? Accusamus necessitatibus quo consequuntur corrupti?
            </Text>
            <Paragraph>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet distinctio atque pariatur, nam aliquid eligendi placeat asperiores quod doloremque tenetur minima repudiandae dolorem amet! At corporis amet aperiam adipisci quibusdam!
            </Paragraph>
        </Content>
    )
}