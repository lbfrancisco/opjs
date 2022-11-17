import { Container, Content } from './styles';
import logo from '../../assets/images/logo.svg';

export function Header() {
  return (
    <Container>
      <Content>
        <div className="page-details">
          <h1>Pedidos</h1>
          <p>Acompanhe os pedidos dos clientes</p>
        </div>

        <img src={logo} alt="waiter app logo" />
      </Content>
    </Container>
  );
}
