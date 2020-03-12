import styled from 'styled-components';

import MaterialDrawer from '@material-ui/core/Drawer';

export const Container = styled.div`
  display: flex;
`;

export const Drawer = styled(MaterialDrawer)`
  flex-shrink: 0;
  width: 290px;
`;

export const Content = styled.div`
  flex-grow: 1;
`;

export const Toolbar = styled.div`
  min-height: 56px;
`;

// minHeight: 56
// @media (min-width:0px) and (orientation: landscape): Object
// minHeight: 48
// @media (min-width:600px): Object
// minHeight: 64
