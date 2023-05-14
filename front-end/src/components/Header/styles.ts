import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #D73035;
  height: 198px;

`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  max-width: 1216px;
  padding-inline: 2.4rem;

  > .page-details {
    color: #fff;

    h1 {
      font-size: 3.2rem;
      margin-bottom: .6rem;
    }

    h2 {
      font-weight: 400;
      font-size: 1.6rem;
      opacity: .9;
    }
  }
`;
