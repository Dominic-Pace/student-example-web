import styled from 'styled-components';

export const Container = styled.div`
  margin: ${props => props.theme.spacing.l} auto;
  position: relative;
  width: 100%;
  
  table {
    border-radius: 4px;
    border-spacing: 0;
    border: 1px solid ${props => props.theme.colors.lightGrey}80;
    margin: 0 auto;
    width: 75%;
    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }
    th,
    td {
      margin: 0;
      padding: 0.5rem;
      border-bottom: 1px solid ${props => props.theme.colors.lightGrey}80;
      border-right: 1px solid ${props => props.theme.colors.lightGrey}80;
      :last-child {
        border-right: 0;
      }
    }
  }
`;
