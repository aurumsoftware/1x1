import styled from 'styled-components';
import { Button, Typography } from '@material-ui/core';
import { ReactComponent as LogoAurum } from '../../svgs/aurumLogo.svg';
import { ReactComponent as Interview } from '../../svgs/interview.svg';

export const Container = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const LoginButton = styled(Button)`
  && {
    transition: all 0.5s ease;
    border-radius: 8px;
    border: 1px solid #dee2e6;
    padding: ${({ theme }): string => `${theme.spacings.md} ${theme.spacings.xxl}`};
  }
`;

export const LoginLabel = styled.span`
  margin-left: ${({ theme }): string => theme.spacings.md};
`;

export const Content = styled.div`
  padding: ${({ theme }): string => theme.spacings.xxl};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const AurumLogo = styled(LogoAurum)`
  margin-bottom: ${({ theme }): string => theme.spacings.xxl};
`;

export const InterviewImage = styled(Interview)`
  margin-bottom: ${({ theme }): string => theme.spacings.md};
`;

export const Description = styled(Typography)`
  && {
    color: ${({ theme }): string => theme.palette.secondary.dark};
    margin-bottom: ${({ theme }): string => theme.spacings.xxl};
  }
`;
