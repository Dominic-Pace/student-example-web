import React from 'react';
import { withTheme } from 'styled-components';
import { CircleLoader } from 'react-spinners';

import { FullScreenContainer } from './styles';

export const LoadingScreen = ({ theme }) => {
  return (
    <FullScreenContainer>
      <CircleLoader sizeUnit="px" size={24} color={theme.colors.primary} loading />
    </FullScreenContainer>
  );
};

export default withTheme(LoadingScreen);
