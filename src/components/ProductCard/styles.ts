import styled from 'styled-components/native';
import {TTitleProps} from './types';

export const Title = styled.Text<TTitleProps>`
  font-size: ${({size}) => (size ? size : 16)}px;
  color: #333;
`;

export const Link = styled.Text`
  color: #247a00;
`;

export const Item = styled.View`
  border-bottom-color: #e2e3e4;
  border-bottom-width: 1px;
  margin-top: 16px;
`;

export const Description = styled.Text`
  margin-bottom: 8px;
`;

export const Price = styled.Text`
  margin-bottom: 16px;
`;
