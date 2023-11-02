import {BrowserRouter, useRoutes} from 'react-router-dom'
import Empleados  from './pages/empleadosPages'
import { EmpleadosProvider } from './context/empleadosContext'
import { AreasProvider } from './context/areasContext'
import { RolesProvider } from './context/rolesContext'
import './App.css'

function Router() {
  let router = useRoutes([
    {path: '/', element: <Empleados/>}
  ])
  return router
}


function App() {
  return (
    <>
      <EmpleadosProvider>
          <AreasProvider>
            <RolesProvider>
              <BrowserRouter>
                <Router>
                </Router>
              </BrowserRouter>
            </RolesProvider>
          </AreasProvider>
      </EmpleadosProvider>
    </>
  )
}

export default App
