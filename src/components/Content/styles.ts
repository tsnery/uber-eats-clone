import styled from 'styled-components/native';
import {HEADER_IMAGE_HEIGHT} from '../HeaderImage';
import {MIN_HEADER_HEIGHT} from '../Header';

type TTitleProps = {
  size?: number;
};

export const Placeholder = styled.View`
  height: ${HEADER_IMAGE_HEIGHT}px;
  margin-bottom: ${MIN_HEADER_HEIGHT}px;
`;

export const Paragraph = styled.Text`
  font-size: 14px;
`;

export const Info = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 8px;
`;

export const Ratings = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Divider = styled.View`
  height: 2px;
  background-color: #e2e3e4;
`;

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
