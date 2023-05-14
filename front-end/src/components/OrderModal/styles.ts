import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;

  background-color: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(4.5px);

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalBody = styled.div`
  background-color: #fff;
  width: 48rem;
  border-radius: .8rem;
  padding: 3.2rem;

  > header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    font-size: 2.4rem;

    button {
      border: 0;
      line-height: 0;
      background: transparent;
    }
  }

  > .status-container {
    margin-top: 3.2rem;

    div {
      display: flex;
      gap: .8rem;
      margin-top: .8rem;
    }

    small {
      font-weight: 500;
      font-size: 1.4rem;
      opacity: .8;
    }

    strong {
      font-size: 1.6rem;
    }
  }
`;

export const OrderDetails = styled.div`
  margin-top: 3.2rem;

  display: flex;
  flex-direction: column;

  > div {
    strong {
      font-size: 1.6rem;
    }
  }

  small {
    font-weight: 500;
    font-size: 1.4rem;
    opacity: .8;
  }

  > .order-items {
    margin-top: 1.6rem;

    display: flex;
    flex-direction: column;

    .item {
      display: flex;

      & + .item {
        margin-top: 1.6rem;
      }
    }

    img {
      border-radius: .8rem;
    }

    .quantity {
      font-size: 1.4rem;
      color: #666;
      display: block;
      min-width: 2rem;
      margin: 0 .4rem 0 1.2rem;
    }

    .product-details {
      strong {
        display: block;
        margin-bottom: .4rem;
      }

      span {
        font-size: 1.4rem;
        color: #666;
      }
    }
  }

  .total {
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-top: 2.4rem;

    span {
      font-weight: 500;
      font-size: 1.4rem;
      opacity: .8;
    }
  }
`;

export const Actions = styled.footer`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  margin-top: 3.2rem;

  > button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  > .primary {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: .8rem;

    background-color: #333;
    border-radius: 4.8rem;
    font-size: 1.6rem;
    padding: 1.2rem 2.4rem;
    color: #fff;
    border: 0;
  }

  > .secondary {
    background: transparent;
    font-size: 1.6rem;
    padding: 1.2rem 2.4rem;
    font-weight: 600;
    color: #D73035;
    border: 0;
  }
`;
