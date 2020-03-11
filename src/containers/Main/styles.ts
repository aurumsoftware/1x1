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
