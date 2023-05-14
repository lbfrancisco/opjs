import { FlatList, TouchableOpacity } from 'react-native';
import { CartItem } from '../../types/CartItem';

import {
  Actions,
  Image,
  Item,
  ProductContainer,
  ProductDetails,
  QuantityContainer,
  Summary,
  TotalContainer
} from './styles';

import { Text } from '../Text';
import { formatCurrency } from '../../utils/formatCurrency';
import { PlusCircle } from '../Icons/PlusCircle';
import { MinusCircle } from '../Icons/MinusCircle';
import { Button } from '../Button';
import { Product } from '../../types/Product';
import { OrderConfirmedModal } from '../OrderConfirmedModal';
import { useState } from 'react';
import { api } from '../../utils/api';

interface CartProps {
  cartItems: CartItem[];
  onAdd: (product: Product) => void;
  onDecrement: (product: Product) => void;
  onConfirmOrder: () => void;
  selectedTable: string;
}

export function Cart({ cartItems, onAdd, onDecrement, onConfirmOrder, selectedTable }: CartProps) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const cartTotalPrice = cartItems.reduce((total, item) => {
    return total + (item.product.price * item.quantity);
  }, 0);

  async function handleConfirmOrder() {
    const payload = {
      table: selectedTable,
      products: cartItems.map((cartItem) => ({
        product: cartItem.product._id,
        quantity: cartItem.quantity,
      }))
    };

    setIsLoading(true);

    await api.post('/orders', payload);

    setIsLoading(false);
    setIsModalVisible(true);
  }

  function handleOk() {
    onConfirmOrder();
    setIsModalVisible(false);
  }

  return (
    <>
      <OrderConfirmedModal
        visible={isModalVisible}
        onOk={handleOk}
      />

      {cartItems.length > 0 && (
        <FlatList
          data={cartItems}
          keyExtractor={cartItem => cartItem.product._id}
          showsVerticalScrollIndicator={false}
          style={{ marginBottom: 20, maxHeight: 150 }}
          renderItem={({ item: cartItem }) => (
            <Item>
              <ProductContainer>
                <Image
                  source={{
                    uri: `${api.defaults.baseURL}/uploads/${cartItem.product.imagePath}`
                  }}
                />

                <QuantityContainer>
                  <Text size={14} color="#666">
                    {cartItem.quantity}x
                  </Text>
                </QuantityContainer>
                <ProductDetails>
                  <Text size={14} weight="600">{cartItem.product.name}</Text>
                  <Text size={14} style={{ marginTop: 4 }}>{formatCurrency(cartItem.product.price * cartItem.quantity)}</Text>
                </ProductDetails>
              </ProductContainer>
              <Actions>
                <TouchableOpacity
                  onPress={() => onAdd(cartItem.product)}
                >
                  <PlusCircle />
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => onDecrement(cartItem.product)}
                >
                  <MinusCircle />
                </TouchableOpacity>
              </Actions>
            </Item>
          )}
        />
      )}

      {cartItems.length > 0 ? (
        <Summary>
          <TotalContainer>
            <Text color="#666">Total</Text>
            <Text weight="600" size={20}>{formatCurrency(cartTotalPrice)}</Text>
          </TotalContainer>
          <Button
            onPress={handleConfirmOrder}
            loading={isLoading}
          >
            Confirmar pedido
          </Button>
        </Summary>
      ) : (
        <Summary>
          <TotalContainer>
            <Text color="#999">Seu carrinho está vazio!</Text>
          </TotalContainer>
          <Button
            onPress={() => alert('disabled button')}
            disabled
          >
            Confirmar pedido
          </Button>
        </Summary>
      )}
    </>
  );
}
