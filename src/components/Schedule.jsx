import { Layout, Table } from 'antd';


const { Content } = Layout;

const data = [
    {
        nome: 'Mike',
        placa: '32',
        servico: 'problema no motor',
        status: 'ativo',
    },
    {
        nome: 'John Bie',
        placa: '45',
        servico: 'problema no motor',
        status: 'ativo',
    },
];
  
const columns = [
    {
      title: 'Nome',
      dataIndex: 'nome',
      key: 'nome',
    },
    {
      title: 'Placa',
      dataIndex: 'placa',
      key: 'placa',
    },
    {
      title: 'Serviço',
      dataIndex: 'servico',
      key: 'servico',
    },
    {
        title: 'Status',
        dataIndex: 'status',
        key: 'status',
    },
];

  
export function Schedule() {

    return (
        <Content style={{ textAlign: 'center' }}>
            <div style={{ margin: '25px' }}>
                <Table dataSource={data} columns={columns} />
            </div>
        </Content>
    )
}