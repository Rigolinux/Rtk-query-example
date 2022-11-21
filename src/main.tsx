import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

//redux
import {ApiProvider} from '@reduxjs/toolkit/query/react'

//apis
import {api} from './api/Api-task'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ApiProvider api={api} >  
    <App  />
    </ApiProvider>
    
  </React.StrictMode>
)
