import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
// import Greeting from "./Greeting.jsx";
// import DefaultFood, { SavouryFood } from "./Foods.jsx"
// import App from './Button.jsx';
import AnimalsStarting from './Animals.jsx';
import NoAnimals from './NoAnimals.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AnimalsStarting />
    <NoAnimals />
    {/* <DefaultFood />
    <SavouryFood />
    <Greeting />
    <App /> */}
  </StrictMode>,
)
