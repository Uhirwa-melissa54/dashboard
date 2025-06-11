import React from 'react';
import { Box } from '@mui/material';
import { useTheme } from '@mui/material';
import { tokens } from './theme';

function Progress({ progress = "0.75", size = 35 }) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const progressNum = parseFloat(progress) || 0;
  const angle = progressNum * 360; // angle in degrees

  return (
    <Box
      sx={{
        width: size,
        height: size,
        borderRadius: "50%",
        background: `
          radial-gradient(${colors.primary[400]} 55%, transparent 56%),
          conic-gradient(
            ${colors.greenAccent[500]} ${angle}deg,
            ${colors.blueAccent[500]} ${angle}deg 360deg
          )
        `,
      }}
    />
  );
}

export default Progress;
