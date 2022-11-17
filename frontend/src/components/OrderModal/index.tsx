import { useEffect } from 'react';
import closeIcon from '../../assets/images/close-icon.svg';

import { Order } from '../../types/Order';
import { formatCurrency } from '../../utils/formatCurrency';
import { Overlay, Modal, OrderDetails, PaymentDetail, Actions } from './styles';

interface OrderModalProps {
  visible: boolean;
  order: Order | null;
  onClose: () => void;
}

export function OrderModal({ visible, order, onClose }: OrderModalProps) {
  if(!visible || !order) return null;

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if(event.key === 'Escape') {
        onClose();
      }
    }

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  useEffect(() => {
    function handleClickOverlay(event: MouseEvent) {
      if((event.target as HTMLElement).classList.contains('overlay')) {
        onClose();
      }
    }

    document.addEventListener('click', handleClickOverlay);

    return () => {
      document.removeEventListener('click', handleClickOverlay);
    };
  }, [onClose]);

  const total = order.products.reduce((acc, { product, quantity }) => {
    return acc += product.price * quantity;
  }, 0);

  return (
    <Overlay className="overlay">
      <Modal>
        <header>
          <strong>Mesa {order.table}</strong>
          <button type="button" onClick={onClose}>
            <img src={closeIcon} alt="close icon" />
          </button>
        </header>
        <div className="status-container">
          <small>Status do Pedido</small>
          <div>
            <span>
              {order.status === 'WAITING' && '🕑'}
              {order.status === 'IN_PRODUCTION' && '👩‍🍳'}
              {order.status === 'COMPLETED' && '✅'}
            </span>

            <strong>
              {order.status === 'WAITING' && 'Fila de Espera...'}
              {order.status === 'IN_PRODUCTION' && 'Em preparação...'}
              {order.status === 'COMPLETED' && 'Pronto!'}
            </strong>
          </div>
        </div>

        <OrderDetails>
          <small>Itens</small>
          {order.products.map(({ _id, product, quantity }) => (
            <div className="item" key={_id}>
              <img
                src={`http://localhost:3001/uploads/${product.imagePath}`}
                alt={product.name}
              />
              <span className="quantity">{quantity}x</span>
              <div className="product-details">
                <strong>{product.name}</strong>
                <span>{formatCurrency(product.price)}</span>
              </div>
            </div>
          ))}
        </OrderDetails>

        <PaymentDetail>
          <small>Total</small>
          <strong>{formatCurrency(total)}</strong>
        </PaymentDetail>

        <Actions>
          <button type="button" className="primary">
            <span>👩‍🍳</span>
            <strong>Iniciar Produção</strong>
          </button>

          <button type="button" className="secondary">
            <strong>Cancelar Pedido</strong>
          </button>
        </Actions>
      </Modal>
    </Overlay>
  );
}
