import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import theme from './theme';
import './i18n'; 

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />
      <HomePage />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
