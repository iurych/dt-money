import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import App from './App.tsx'
import { defaultTheme } from './styles/themes/default.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider  theme={{ defaultTheme }}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)
