import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { CircleLoader } from 'react-spinners';

import { Container } from './styles';

export const LoadingScreen = () => {
  const theme = useContext(ThemeContext);
  return (
    <Container>
      <CircleLoader sizeUnit="px" size={24} color={theme.colors.primary} loading />
    </Container>
  );
};

export default LoadingScreen;
