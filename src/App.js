import { Container, Paper } from '@mui/material';
import Header from './header/header';
import Skills from './skills/skills';
import './App.css';


function App() {
  return (
    <Container fixed>
      <Paper elevation={3}>
        <Header />
        <Skills />
      </Paper>
    </Container>
  );
}

export default App;