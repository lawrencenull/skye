import { Theme } from '../app/models/theme';
import { transparency } from './transparency';
import { colors } from './colors';

export const lightTheme: Theme = {
  'toolbar.backgroundColor': '#fff',
  'toolbar.bottomLine.backgroundColor': '#e5e5e5',
  'toolbar.icons.invert': false,
  'tab.backgroundOpacity': 0.85,
  'tab.selectedHover.backgroundOpacity': 0.8,
  'tab.hover.backgroundColor': 'rgba(0, 0, 0, 0.04)',
  'tab.selected.textColor': 'inherit',
  'tab.textColor': `rgba(0, 0, 0, ${transparency.text.high})`,
  'tab.separator.backgroundColor': 'rgba(0, 0, 0, 0.12)',
  'overlay.windowsButtons.invert': true,
  'tab.allowLightBackground': false,
  accentColor: colors.blue['500'],
};

export const darkTheme: Theme = {
  'toolbar.backgroundColor': '#212121',
  'toolbar.bottomLine.backgroundColor': '#000',
  'toolbar.icons.invert': true,
  'tab.backgroundOpacity': 0.6,
  'tab.selectedHover.backgroundOpacity': 0.45,
  'tab.hover.backgroundColor': 'rgba(255, 255, 255, 0.12)',
  'tab.selected.textColor': '#fff',
  'tab.textColor': `rgba(255, 255, 255, 0.54)`,
  'tab.separator.backgroundColor': 'rgba(255, 255, 255, 0.12)',
  'overlay.windowsButtons.invert': true,
  'tab.allowLightBackground': true,
  accentColor: colors.blue['500'],
};