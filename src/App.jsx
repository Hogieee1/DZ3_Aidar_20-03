import './App.css'
import AllProducts from './components/allProducts/AllProducts'
import Navigation from './components/navigation/Navigation'
import Search from './components/search/Search'

function App() {
  return (
    <div className="App">
      <Search/>
      <Navigation/>
      <AllProducts/>
    </div>
  )
}

export default App
