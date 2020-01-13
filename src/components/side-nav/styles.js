import styled, { css } from 'styled-components';

export const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 15%;
`;

export const NavItem = styled.div`
  border: 1px solid ${props => props.theme.colors.grey};
  border-radius: 4px;
  color: ${props => props.theme.colors.black};
  margin-bottom: ${props => props.theme.spacing.m};
  min-width: 60%;
  padding: ${props => props.theme.spacing.xs} ${props => props.theme.spacing.l};
  text-align: center;
  text-decoration: none;
  transform: scale(1);
  transition: 0.5s transform ease-in-out;
  width: fit-content;
  
  ${props => props.isActive && css`
    border: 1px solid ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.primary};
  `}
  
  &:hover {
    transform: scale(1.03);
    transition: 0.25s transform ease-out;
  }
  
  &:focus {
    outline: none;
  }
`;
