import './App.scss';
import ValidarDni from './Componentes/ValidarDni.js';
import  Paso1  from './Componentes/Paso1.js';

import { Container } from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useRoutes,
} from "react-router-dom";

const App = () => {
  let routes = useRoutes([
    { path: "/", element: <ValidarDni /> },
    { path: "Paso1", element: <Paso1 /> },
  ]);
  return routes;
};

function AppWrapper () {
  return (
    <div className="App">
      <Container>      
        <App></App> 
      </Container>
    </div>
  );
}

export default AppWrapper ;
