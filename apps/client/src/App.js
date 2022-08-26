import Header from './layout/Header';
import PageRoutes from './pages';
import Footer from './layout/Footer';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import './App.css';

const containerStyling = {
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
  marginTop: '4em',
}

const App = () => {
  return (
    <div className="App">
      <Header />

      <Box sx={containerStyling}>
        <CssBaseline />

        <PageRoutes />

        <Footer />
      </Box>
    </div>
  );
}

export default App;
