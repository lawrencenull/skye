import { observer } from 'mobx-react-lite';
import * as React from 'react';

import { StyledToolbar } from './style';
import { NavigationButtons } from '../NavigationButtons';

import { AddressBar } from '../AddressBar';
import { RightButtons } from '../RightButtons';
import store from '../../store';
import { platform } from 'os';
import { FullscreenExitButton } from '../Titlebar/style';
import { ipcRenderer, remote } from 'electron';
import { WindowsControls } from 'react-windows-controls';

const onFullscreenExit = (e: React.MouseEvent<HTMLDivElement>) => {
  remote.getCurrentWindow().setFullScreen(false);
};

const onCloseClick = () => ipcRenderer.send(`window-close-${store.windowId}`);
const onMaximizeClick = () =>
  ipcRenderer.send(`window-toggle-maximize-${store.windowId}`);
const onMinimizeClick = () =>
  ipcRenderer.send(`window-minimize-${store.windowId}`);
const onMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
  if (store.addressbarFocused) {
    e.preventDefault();
  }
};

export const Toolbar = observer(() => {
  return (
    <StyledToolbar
      onMouseDown={onMouseDown}
      isFullscreen={store.isFullscreen}
      color={store.tabs.selectedTab?.color}
    >
      <NavigationButtons />
      <div style={{ flex: 1 }} />
      <AddressBar />
      <RightButtons />
      {platform() !== 'darwin' &&
        (store.isFullscreen ? (
          <FullscreenExitButton
            style={{ height: store.isCompact ? '100%' : 32 }}
            onMouseUp={onFullscreenExit}
            theme={store.theme}
          />
        ) : (
          <WindowsControls
            style={{
              height: store.isCompact ? '100%' : 32,
              WebkitAppRegion: 'no-drag',
              marginLeft: 8,
            }}
            onClose={onCloseClick}
            onMinimize={onMinimizeClick}
            onMaximize={onMaximizeClick}
            // @ts-ignore
            dark={store.theme['toolbar.backgroundColor']}
          />
        ))}
    </StyledToolbar>
  );
});
