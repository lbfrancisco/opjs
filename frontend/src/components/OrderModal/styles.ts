import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0px;
  top: 0px;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(4.5px);
`;

export const Modal = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;

  width: 470px;

  padding: 32px;
  border-radius: 8px;

  background-color: #fff;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    strong {
      font-size: 1.5rem;
    }

    button {
      background-color: transparent;
      border: none;
      line-height: 0;
    }
  }

  .status-container {
    small {
      font-size: 0.875rem;
      font-weight: 500;
      color: #333;
      opacity: 0.8;
    }

    div {
      display: flex;
      gap: 8px;
      margin-top: 8px;
    }
  }
`;

export const OrderDetails = styled.div`
  small {
    font-size: 0.875rem;
    font-weight: 500;
    color: #333;
    opacity: 0.8;
  }

  img {
    width: 80px;
    border-radius: 6px;
  }

  .item {
    display: flex;
    align-items: flex-start;
    gap: 8px;
    margin-top: 8px;

    & + .item {
      margin-top: 24px;
    }

    .quantity {
      margin-left: 12px;
    }

    .product-details {
      display: flex;
      flex-direction: column;

      > span {
        margin-top: 4px;
      }
    }

    span {
      color: #666;
      font-size: 0.875rem;
    }
  }
`;

export const PaymentDetail = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  small {
    font-size: 0.875rem;
    font-weight: 500;
    color: #333;
    opacity: 0.8;
  }
`;

export const Actions = styled.footer`
  display: flex;
  flex-direction: column;
  gap: 16px;

  .primary {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;

    color: #fff;
    background-color: #333;

    border: none;
    border-radius: 48px;
    padding: 12px 24px;
  }

  .secondary {
    color: #D73035;
    background-color: transparent;
    border: none;
    padding: 12px 24px;
  }
`;
