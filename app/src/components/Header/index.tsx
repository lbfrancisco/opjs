import { TouchableOpacity } from 'react-native';
import { Text } from '../Text';
import { Container, OrderContent, OrderHeader, OrderTable } from './styles';

interface HeaderProps {
  table: string;
  onCancel: () => void;
}

export function Header({ table, onCancel }: HeaderProps) {
  return (
    <Container>
      {!table && (
        <>
          <Text size={14} opacity={0.9}>Bem vindo(a), ao</Text>
          <Text size={24} weight='600'>
            WAITER
            <Text size={24} weight='400'>APP</Text>
          </Text>
        </>
      )}

      {table && (
        <OrderContent>
          <OrderHeader>
            <Text size={24} weight="600">Pedido</Text>

            <TouchableOpacity onPress={onCancel}>
              <Text size={14} weight="600" color="#D73035">cancelar pedido</Text>
            </TouchableOpacity>
          </OrderHeader>
          <OrderTable>
            <Text color="#666">Mesa {table}</Text>
          </OrderTable>
        </OrderContent>
      )}
    </Container>
  );
}
