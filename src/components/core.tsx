import styled from "styled-components/native";
import {
  ColorProps,
  FlexboxProps,
  LayoutProps,
  PositionProps,
  SpaceProps,
  color,
  flexbox,
  layout,
  position,
  space,
} from "styled-system";

export const Spacer = styled.View<FlexboxProps & SpaceProps & LayoutProps>`
  ${space}
  ${layout}
  ${flexbox}
`;
