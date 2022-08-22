import Header from './components/Header';
import PageRoutes from './pages';
import Footer from './components/Footer';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import './App.css';
import config from './config'; // TODO delete this

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
        <p>TODO ${config.REACT_APP_GATEWAY_API_URL}, {process.env.NODE_ENV}</p>
        <PageRoutes />

        <Footer />
      </Box>
    </div>
  );
}

export default App;
