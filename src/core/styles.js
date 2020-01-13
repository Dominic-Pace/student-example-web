import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${props => props.theme.colors.white};
  display: flex;
  min-height: calc(100vh - 80px);
  padding-top: 80px;
  position: relative;
  width: 100vw;
`;

export const PageContainer = styled.div`
  width: 70%;
`;
