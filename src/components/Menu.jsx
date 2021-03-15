import { Button } from 'antd';
import 'antd/dist/antd.css';
import styles from './styles/menu.module.css';

export function Menu() {
    return (
        <div>
            <header className={styles.cabecalho}>
                <h1>Oficina mão na roda</h1>
                <p>Seu carro em boas mãos.</p>
            </header>
            <Button type="primary">Agendar manuntenção</Button>
            <Button type="primary">Administração</Button>
        </div>
    )
}