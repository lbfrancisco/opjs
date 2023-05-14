import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  background: ${({ disabled }) => disabled ? '#999' : '#D73035'};
  padding: 14px 24px;
  border-radius: 48px;

  align-items: center;
  justify-content: center;
`;
