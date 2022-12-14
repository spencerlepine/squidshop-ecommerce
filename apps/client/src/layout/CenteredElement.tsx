import * as React from 'react';
import { Container } from '@mui/system';
import { CssBaseline, Box } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme();

type Props = {
  children: any;
  maxWidth?: "xs" | "sm" | "md" | "lg";
}

const CenteredElement: React.FC<Props> = (props) => {
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth={props.maxWidth || "xs"}>
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          {props.children}
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default CenteredElement
