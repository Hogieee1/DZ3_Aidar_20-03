import './App.css'
import AllProducts from './components/allProducts/AllProducts'
import Navigation from './components/navigation/Navigation'
import Search from './components/search/Search' 

function App() {
  const handleLink = (e) => {
    alert(`К сожалению мы еще не добавили товары в (${e.target.innerHTML})`)
  }

  const handleInput =(e) => {
    console.log(`Вы сделали поиск по запросу: ${e.target.value}`)
  }

  return (
    <div className="App">
      <Search handle={handleInput}/>
      <Navigation onLink={handleLink}/>
      <AllProducts/>
    </div>
  )
}

export default App
