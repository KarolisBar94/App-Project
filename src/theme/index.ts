import { createTheme } from '@mui/material';

// Sukuria temą, default temos pagrindu
const theme = createTheme({
  palette: {
    primary: {
      main: '#311b92',
    },
  },
  zIndex: {
    appBar: 1250,
  },
});

export default theme;
