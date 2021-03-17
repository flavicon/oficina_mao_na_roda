import { Layout, Table } from 'antd';
import axios from 'axios';
import { useEffect, useState } from 'react';

const { Content } = Layout;

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
    {
      title: 'Action',
      dataIndex: 'action',
      key: 'action',
    },
];

  
export function Schedule() {
    const [ atendimentos, setAtendimentos ] = useState([])

    useEffect(() => {
        axios.get('http://localhost:5000/atendimentos')
        .then((response) =>{
            setAtendimentos(response.data);
        })
    },[]);

    return (
        <Content style={{ textAlign: 'center' }}>
            <div style={{ margin: '25px' }}>
                <Table dataSource={atendimentos} columns={columns} />
            </div>
        </Content>
    )
}