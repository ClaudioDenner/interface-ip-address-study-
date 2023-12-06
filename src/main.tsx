import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import ProviderContextGlobal from './context/ProviderContext.tsx'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ProviderContextGlobal>
      <App />
    </ProviderContextGlobal>
  </React.StrictMode>,
)
