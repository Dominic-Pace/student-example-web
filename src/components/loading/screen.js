import React from 'react';
import { withTheme } from 'styled-components';
import { CircleLoader } from 'react-spinners';

import { Container } from './styles';

export const LoadingScreen = ({ theme }) => {
  return (
    <Container>
      <CircleLoader sizeUnit="px" size={24} color={theme.colors.primary} loading />
    </Container>
  );
};

export default withTheme(LoadingScreen);
