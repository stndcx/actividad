import React  from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import IndexComentarios from './componentes/IndexComentarios';
import CrearComentarios from './componentes/CrearComentarios';
import ActualizarComentarios from './componentes/ActualizarComentarios';
import 'bootstrap/dist/css/bootstrap.min.css'


function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<IndexComentarios />}></Route>
      <Route path="/crear" element={<CrearComentarios />}></Route>
      <Route path="/actualizar/:id" element={<ActualizarComentarios />}></Route>


    </Routes>
    </BrowserRouter>
  )
}

export default App;

