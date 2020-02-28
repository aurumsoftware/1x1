import React from 'react';
import { StyledChip, PropTypes } from './styles';
import { Typography } from '@material-ui/core';

const Chip: React.FC<PropTypes> = ({ label, color = 'secondary', margin = false }) => {
  return (
    <StyledChip color={color} margin={margin}>
      <Typography variant="caption" color={color}>
        {label}
      </Typography>
    </StyledChip>
  );
};

export default Chip;
