import * as React from 'react';
import { Container } from '@mui/system';
import { CssBaseline, Box } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme();

type Props = {
  children: any;
  maxWidth?: "xs" | "sm" | "md" | "lg";
}

const PageElement: React.FC<Props> = (props) => {
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth={props.maxWidth ?? 'xs'}>
        <CssBaseline />
        <Box>
          {props.children}
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default PageElement
