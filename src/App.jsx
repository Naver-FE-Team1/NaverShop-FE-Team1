import './App.scss'
import { Button, ThemeProvider } from '@mui/material'
import { ThemeConfig } from './theme/ThemeConfig'

function App() {
  console.log(ThemeConfig)

  return (
    <ThemeProvider theme={ThemeConfig}>
      <div className="App">
        <Button variant='contained'>Hello world</Button>
        <span>hello world</span>
      </div>
    </ThemeProvider>
  )
}

export default App
