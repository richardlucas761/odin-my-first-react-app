import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
// import Greeting from "./Greeting.jsx";
// import DefaultFood, { SavouryFood } from "./Foods.jsx"
// import App from './Button.jsx';
import App from './Animals.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* <DefaultFood />
    <SavouryFood />
    <Greeting />
    <App /> */}
  </StrictMode>,
)
