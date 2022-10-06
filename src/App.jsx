import './App.scss'
import ShoppingList from './components/pages/ShoppingList'
import AboutPage from './components/pages/AboutPage'
import ShoppingBasket from './components/pages/ShoppingBasket/ShoppingBasket'
function App() {

  return (
    <div className="App">
      <AboutPage/>
      <ShoppingList />
      <ShoppingBasket/>
    </div>
  )
}

export default App
