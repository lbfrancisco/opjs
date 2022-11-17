import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 198px;

  background-color: #D73035;
  color: #fff;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  max-width: 1216px;

  .page-details {
    h1 {
      font-size: 2rem;
      margin-bottom: 6px;
    }

    p {
      font-size: 1rem;
      opacity: 0.9;
    }
  }
`;
