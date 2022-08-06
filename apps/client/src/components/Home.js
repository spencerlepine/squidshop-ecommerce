import { useEffect } from 'react';
import Header from './Header';
import Products from './Products';
import SignIn from './SignIn'
import SignUp from './SignUp'
import Missing from './Missing';
import Footer from './Footer';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import {
  Routes,
  Route,
} from "react-router-dom";

const Home = () => {
  return (
    <div className="App">
      <Header />

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
          marginTop: '4em',
        }}
      >
        <CssBaseline />
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="login" element={<SignIn />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="*" element={<Missing />} />
        </Routes>
        <Footer />
      </Box>
    </div>
  );
}

export default Home;
