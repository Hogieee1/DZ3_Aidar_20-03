import './App.css'
import AllProducts from './components/allProducts/AllProducts'
import Navigation from './components/navigation/Navigation'
import Search from './components/search/Search' 

function App() {
  const handleLink = (e) => {
    alert(`К сожалению мы еще не добавили товары в (${e.target.innerHTML})`)
  }



  return (
    <div className="App">
      <Search/>
      <Navigation onLink={handleLink}/>
      <AllProducts/>
    </div>
  )
}

export default App
