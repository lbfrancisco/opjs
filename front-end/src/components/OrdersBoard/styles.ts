import styled from 'styled-components';

export const Board = styled.div`
  padding: 1.6rem;
  border: 1px solid rgba(204, 204, 204, .7);
  border-radius: 1.6rem;
  height: fit-content;

  flex: 1;

  > header {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: .8rem;
    gap: .8rem;

    font-size: 1.4rem;

    strong {
      font-weight: 600;
    }
  }
`;

export const OrdersContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1.6rem;
  margin-top: 2.4rem;

  > button {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    width: 100%;
    padding: 4rem 0;

    background: #fff;
    border: 1px solid rgba(204, 204, 204, .7);
    border-radius: .8rem;
    height: 12.8rem;

    strong {
      font-size: 1.6rem;
      font-weight: 500;
    }

    span {
      font-size: 1.4rem;
      color: #666;
    }
  }
`;
