import styled from 'styled-components';
import { ReactComponent as EmptyStateSVG } from '../../../../svgs/emptyState.svg';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

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

export const EmptyStateTitle = styled(Typography).attrs({ variant: 'subtitle1', color: 'secondary' })`
  margin-bottom: ${({ theme }): string => theme.spacings.sm};
`;
