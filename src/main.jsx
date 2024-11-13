
// On page load or when changing themes, best to add inline in `head` to avoid FOUC
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  document.documentElement.classList.add('dark')
  localStorage.theme = 'dark'
} else {
  document.documentElement.classList.remove('dark')
  localStorage.theme = 'light'
}

// // Whenever the user explicitly chooses light mode
// localStorage.theme = 'light'

// // Whenever the user explicitly chooses dark mode
// localStorage.theme = 'dark'

// // Whenever the user explicitly chooses to respect the OS preference
// localStorage.removeItem('theme')


import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
