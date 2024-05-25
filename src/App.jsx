import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.scss'

// Dependencies
import { AppRoutes } from './routes/index.component'

function App() {

  return (
    <>
      <div className='flex'>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <AppRoutes />
    </>
  )
}

export default App
