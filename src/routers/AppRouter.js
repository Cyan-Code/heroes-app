import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { LoginScreen } from '../components/login/LoginScreen';
import { DashboardRoutes } from './DashboardRoutes';

  export const AppRouter = () => {
    return (
      // Linea 14-15 puede haber estilos globales, para todas las rutas :o, // en la linea 17 habia un exact path, creo que no se puede ya que es una ruta principal de subRutas,las rutas hijas no tienen el componente de <Router />
      <Router>
        <div>
          <Switch>
            <Route exact path = "/login" component = { LoginScreen } />
            <Route path = "/" component = { DashboardRoutes } />
          </Switch>
        </div>
      </Router>
    )
  }
