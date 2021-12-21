import React from 'react'
import { BrowserRouter as Router, Route,  Routes } from 'react-router-dom';
import Agenda from '../views/Agenda';

import Layout from './Layout';
import Formulario from '../views/Formulario';


const Rutas = () => {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Layout />}  >
                     <Route index element={<Formulario />} />
                     <Route path='agenda' element={<Agenda />} />
                </Route>
               
            </Routes>
        </Router>
    )
}

export default Rutas
