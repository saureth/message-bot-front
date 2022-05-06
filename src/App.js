import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Login from './components/screens/auth/Login';
import styled from 'styled-components';

const AppContainer = styled.div`
  color: #2155CD;
  background-color: #E8F9FD;
  height: 100%;
`;

function App() {
  return (
    <AppContainer>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
      </BrowserRouter>
    </AppContainer>
  );
}

export default App;
