import styled from 'styled-components';
import { ReactComponent as EmptyStateSVG } from '../../../../svgs/emptyState.svg';
import Button from '@material-ui/core/Button';

export const EmptyStateContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
`;

export const EmptyStateImage = styled(EmptyStateSVG)`
  margin-bottom: ${({ theme }): string => theme.spacings.lg};
`;

export const AddButton = styled(Button).attrs({ color: 'primary' })`
  margin-top: ${({ theme }): string => theme.spacings.lg};
`;
