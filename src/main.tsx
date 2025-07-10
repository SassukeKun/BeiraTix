import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import TransactionHistory from './pages/TransactionHistory'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <TransactionHistory />
  </StrictMode>,
)
