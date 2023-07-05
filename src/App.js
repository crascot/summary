import { Container, Paper } from '@mui/material';
import Header from './header/header';
import Skills from './skills/skills';
import './App.css';
import Works from './works/works';


function App() {
  return (
    <Container fixed>
      <Paper elevation={3}>
        <Header />
        <Skills />
        <hr />
        <Works />
      </Paper>
    </Container>
  );
}

export default App;