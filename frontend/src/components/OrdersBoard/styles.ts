import styled from 'styled-components';

export const Board = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  flex: 1;
  gap: 24px;

  padding: 16px;
  border: 1px solid rgba(204, 204, 204, 0.4);
  border-radius: 16px;

  header {
    display: flex;
    align-items: center;
    gap: 8px;

    font-size: 0.875rem;
  }
`;

export const OrdersContainer = styled.div`
  display: flex;

  flex-direction: column;
  gap: 8px;

  width: 100%;

  button {
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 4px;

    background-color: #fff;

    border: 1px solid rgba(204, 204, 204, 0.4);
    border-radius: 8px;

    width: 100%;
    padding: 40px 0;

    strong {
      font-size: 1rem;
      font-weight: 500;
    }

    span {
      font-size: 0.875rem;
      color: #666;
    }
  }
`;
