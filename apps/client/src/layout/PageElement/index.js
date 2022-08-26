import { Container } from '@mui/system';
import { CssBaseline, Box } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme();

const PageElement = (props) => {
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth={props.maxWidth || "xs"}>
        <CssBaseline />
        <Box>
          {props.children}
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default PageElement
