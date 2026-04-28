import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Exercise from './Excercise.jsx'
import PostCards from './PostCards.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    {/* <App/> 
    <Exercise/>
    */}
    <PostCards/>
  </StrictMode>
)
