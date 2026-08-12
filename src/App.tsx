import { useState, useEffect } from 'react'
import './App.css'

import Grid from '@mui/material/Grid2' 
import DishTable from './components/DishTable'
import Student from './components/Student'
import Summary from './components/Summary'

// PENDIENTE: Cree la interfaz
export interface Dish {
  position: number;
  title: string;
  subtitle: string;
  rating: number;
  country: string;
  iconic: string;
  ingredients: string;
}


function App() {

  let url = "https://raw.githubusercontent.com/aavendan/datos/refs/heads/main/tasteatlas/bestdishes100-2425.json"
  
  // PENDIENTE: Variable de estado y la función de modificación. 
  const [dishes, setDishes] = useState<Dish[]>([])


  // PENDIENTE: 
  // Realizar una petición asíncrona a la URL. La respuesta es un JSON. 
  // Al recibir la respuesta, actualice la variable de estado.
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data: Dish[]) => setDishes(data))
      .catch((error) => console.error('Error al realizar la petición:', error))
  }, [])


  return (
    <Grid container spacing={5}>

        {/* Student */}
        <Grid size={{ xs: 12 }}>

          {/* PENDIENTE: Envíe sus datos (apellidos, nombres y paralelo) como props del componente */}
          <Student 
            apellidos="Mosquera Cruz" 
            nombres="Anthony Alexander" 
            paralelo="102" 
          />

        </Grid>

        {/* Summary */}
        <Grid size={{ xs: 12 }}>

          <Summary totalDishes={dishes.length} />

        </Grid>
        
        {/* DishTable */}
        <Grid size={{ xs: 12 }}>

          {/* PENDIENTE: Envíe la variable de estado como prop */}
          <DishTable data={dishes}></DishTable>
        
        </Grid>
        
       
    </Grid>
  )
}

export default App