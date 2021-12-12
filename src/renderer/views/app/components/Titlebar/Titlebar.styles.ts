import styled, { css } from 'styled-components';

import { ITheme } from '~/interfaces';
import { platform } from 'os';
import { contrast } from '~/utils/colors';

export interface ToolbarProps {
  isFullscreen: boolean;
  theme: ITheme;
  color?: string;
  dialogOpen: boolean;
}

export const StyledToolbar = styled.div<ToolbarProps>`
  position: relative;
  z-index: 100;
  display: flex;
  align-items: center;
  flex-flow: row;
  width: 100%;
  justify-content: center;
  ${({ isFullscreen, theme, color, dialogOpen }) => css`
    background-color: ${!!color ? color : theme.titlebar.background};
    align-items: ${theme.isCompact ? 'center' : 'initial'};
    padding-left: ${platform() === 'darwin' && !isFullscreen ? 78 : 4}px;
    padding-top: 10px;
    padding-bottom: 10px;
    &:before {
      -webkit-app-region: ${isFullscreen || dialogOpen ? 'no-drag' : 'drag'};
    }
  `};

  ${({ color, theme }) => {
    if (color && color !== '') {
      const cc = contrast(color);

      const isDarkMode = theme.dark;
      switch (cc) {
        case 'dark':
          if (isDarkMode) {
            return css`
              color: #fff;
            `;
          } else {
            return css`
              color: #e5e5e5;
            `;
          }
        case 'light': {
          if (isDarkMode) {
            return css`
              color: #000;
            `;
          } else {
            return css``;
          }
        }
      }
    }
    return css`
      color: ${theme.addressbar.text};
    `;
  }}

  transition: background-color 0.4s, color 0.4s;
  transition-timing-function: ease-out;
`;